#Close a search overlay

This example shows how to close a search overlay if it appears over the search results page.

```javascript
window.findifyApiRegistry = [
    function (api) {
        api.on(api.events.searchGotData, function (apiData, dispatcher) {
           window.setTimeout(function() {
             // you should change the below selector to the actual close trigger of the search overlay
             var hideSearchOverlay = document.querySelector('.search-close');

             if (hideSearchOverlay && hideSearchOverlay.getBoundingClientRect().bottom!==0) {
               hideSearchOverlay.click();
             }
          },0); // make sure we close the overlay in the next browser tick, so it doesn't re-render 

           return apiData;
        });
   }
];
```
