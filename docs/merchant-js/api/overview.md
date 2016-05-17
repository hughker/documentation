## Merchant.js API

The merchant.js API allows you to integrate extra data, custom behaviour and custom styling of the autocompelte and search results.

## Adding API calls:

```javascript
/*global findifyApiRegistry*/
findifyApiRegistry = [];

function myapiIntegration(api) {
    api.addStyle(‘linkTo.css’);
    api.addScript(‘linkTo.js’);
    
    api.on(api.events.*, function(data) {
	// do awesome custom stuff
    }
}
```

## Supported api events:

```javascript
//autocomplete    
autocompleteGotData, (autocompleteSearchApiResponse);    
autocompleteRenderedSuggestions, ({node: DOM,data: suggestions});    
autocompleteRenderedProducts, ({node: DOM,data: products});   

//search    
searchGotData, (searchSearchApiResponse);   
searchRenderedHeader, ({node: DOM,data: metaInformation});  
searchRenderedFacets, ({node: DOM,data: filters});  
searchRenderedResults, ({node: DOM,data: products});  
searchRenderedFooter, ({node: DOM,data: metaInformation});  
searchRenderedBanner, ({node: DOM,data: banner});  
```


## Example

```javascript
window.findifyApiRegistry = [ // should be an array of functions 
    function (api) { // each function gets an injected API object with the IApi interface
         // data retrival
        api.on(api.events.searchGotData, function (apiData) { // this returns an IApiEvent object, the first parameter is of EApiEventsType
            console.log(apiData); // the complete search response data

            apiData.products.forEach(function (product) {
                product.title += ' yeah!'; // data augumentation before the views receive it
            });

            return apiData; // return data to views
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
    searchRenderedResults,
    searchRenderedFooter,
    searchRenderedBanner
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