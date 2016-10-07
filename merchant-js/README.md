# Findify Merchant JS

__Important note: using this feature requires knowledge in JavaScript (CSS and HTML are optional, but are good to have for UI customization). Please remember, that modifying your shop code can lead to unexpected behaviour. If you need any assistance in customization, we'll be happy to refer you to one of our [partners](http://findify.io/partners/?utm_source=github_documentation&utm_medium=github_documentation&utm_campaign=github_documentation
).__

Our Merchant JS exposes an API that is both easy to consume and can be really powerful. 

We have also created [several examples](examples/README.md) that you can use for reference. 

## MerchantJS API Lifecycle

When using the merchantJS API it's good to know the lifecycle that the views and data go through.

1. When initialising the Merchant JS the __gotConfiguration__ event is fired before passing the configuration to the components, which means you can do some live tweaking of the configuration and affect how the search works and looks for your customers - this may include personalisation or adding extra content.

2. When the UI components are initialised they start in an empty state, after that the Merchant JS requests data from the server which is resolved and passed on to the components. To affect how the data query looks you can use the __getData__ event. This gives you the data query *before* it's handed over to the backend for processing.

3. After the backend processes the data query, it returns results to the Merchant JS. You can use __searchGotData__ and __autocompleteGotData__ events to decorate the results to add extra features, for example you could have a realtime-api for the prices and update them accordingly. At this stage no component is udpated so anything you add to the data will be later handed over to the components. These events *must return the data object* or *must use the emmiter* to update the data model for the components to render.

4. Once the data is processed and returned the rendering lifecycle phase starts, in this phase you have access to the DOM elements and their data models: all the events that have __Rendered__ in their name can be used to change different aspects of the search results components. Additionally the __searchRenderedFacets__,__searchRenderedFacet__ and __searchRenderedHeader__ events have an extra *emitter* propery, which can be used to create calls to the Search API (which drives the whole cycle back to point 2)

This cycle is run every time a change to the query is made from the UI (like selecting facets, changing the results page, changing the order, etc).

## Supported api events:

```javascript
//autocomplete    
autocompleteGotData, (autocompleteSearchApiResponse,updater);    
autocompleteRenderedSuggestions, ({node: DOM,data: suggestions});    
autocompleteRenderedProducts, ({node: DOM,data: products});   

//search    
searchGotData, (searchSearchApiResponse,updater);   
searchRenderedHeader, ({node: DOM,data: metaInformation, emitter: queryDispatcher});  
searchRenderedFacets, ({node: DOM,data: facets, emitter: queryDispatcher});  
searchRenderedFacet, ({node: DOM, data: facets, emitter: queryDispatcher});
searchRenderedResults, ({node: DOM,data: products});  
searchRenderedFooter, ({node: DOM,data: metaInformation});  
searchRenderedBanner, ({node: DOM,data: banner});  

//lifecycle
gotConfiguration, (searchConfiguration);

// query
getData, (query);
```

## Adding API calls:

```javascript
/*global findifyApiRegistry*/
window.findifyApiRegistry = [function(api) {
	api.addStyle(‘linkTo.css’);
    api.addScript(‘linkTo.js’);
    
    api.on(api.events.*, function(data) {
	// do awesome custom stuff
    });
}];
```

## Adding the script to your store

You should include any API related scripts __before__ referencing our main JS script.


## Example

```javascript
window.findifyApiRegistry = [ // should be an array of functions 
    function (api) { // each function gets an injected API object with the IApi interface
        // data retrival
        // this returns an IApiEvent object, the first parameter is of EApiEventsType
        api.on(api.events.searchGotData, function (apiData, dispatch) { 
            console.log(apiData); // the complete search response data

            // synchronous augumentation example
            apiData.products.forEach(function (product) {
                product.title += ' yeah!'; // data augumentation before the views receive it
            });
            
            // asynchronous augumentation example
            someAsyncFunction(function(extraProduct) {
            	apiData.products.push(extraProduct);
            	dispatch(apiData);
            });

            return apiData; // return data to views (you can return null if you use dispatch(apiData);
        });

        // rendering
        api.on(api.events.searchRenderedResults, function (apiData) {
            console.log(apiData.node); // the top-level node for a product box (after augumentation)
            console.log(apiData.data); // all the data related to the product
        });
    }
];
```

## Interface

```typescript
enum EApiEvents {
    //autocomplete
    autocompleteGotData,
    autocompleteRenderedSuggestions,
    autocompleteRenderedProducts,

    //search
    searchGotData,
    searchRenderedHeader,
    searchRenderedFacets,
    searchRenderedFacet,
    searchRenderedResults,
    searchRenderedFooter,
    searchRenderedBanner,

    //lifecycle
    gotConfiguration,

    //query
    getData
}

// api event interface
interface IApiEvent<EVENT_DATA> {
    off:()=>void;
}


// api interface
interface IApi {
    on<EVENT_DATA>(event:EApiEvents, handler:(eventData:EVENT_DATA)=>EVENT_DATA):IApiEvent<EVENT_DATA>;
    dispatch<EVENT_DATA>(event:EApiEvents, eventData:EVENT_DATA):EVENT_DATA;
    addScript(script:string):void;
    addStyle(style:string):void;
    getScripts():string[];
    getStyles():string[];
}
```

## Required tracking tags
When using a completely custom DOM layout for the search results, it's important to add proper tracking tags to the DOM, so that our machine learning alghoritms can work properly.

Each link to a product page and each add to cart button action should have the following tags:

1. data-findify-type="search-product"
2. data-findify-id="{product.id}"

For example:
```html
<a href="http://yourStore.com/product-link" data-findify-type="search-product" data-findify-id="5280418631">Go to product</a>
```
