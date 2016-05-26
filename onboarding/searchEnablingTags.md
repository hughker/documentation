## Search enabling tags
The search enabling tags are a set of DOM attributes that enable the Findify Search and Autocomplete.

## Search result attribute
To show the search results, just add a special attribute to any html element in which you want to display the results. Please note that the search results will only be displayed if the url of the page with the special attribute matches the search page location.

```html
 <div data-findify-attr="findify-search-results"></div>
```
 
## Autocomplete input attribute
To connect our autocomplete functionality to any input, just add a special attribute to the input element. You can add the attribute to multiple input elements on a single page. 

```html
<input data-findify-attr="findify-autocomplete-input"/>
```

## Autocomplete button attribute
You can add the special attribute to any button and/or link on your page. Clicking on a button with the attribute will show your customers the search results for the query currently present in the **autocomplete input**.

```html
<input data-findify-attr="findify-autocomplete-button"/>
```
