#Close a search overlay
Some themes, have an overlay that is displayed when clicking on the search box. In some cases, this overlay does not close, and "hides" the search results.
The code example below shows how you can close this overlay, so your customers can access the search results.

```javascript
window.findifyApiRegistry = [
    function (api) {
        api.on(api.events.searchGotData, function (apiData, dispatcher) {
           window.setTimeout(function() {
             // you should change the below selector to the actual close trigger of the search overlay
             var hideSearchOverlay = document.querySelector('.search-close');

            // make sure the overaly is visible when we toggle it
             if (hideSearchOverlay && hideSearchOverlay.getBoundingClientRect().bottom!==0) { 
               hideSearchOverlay.click(); // trigger the hide overlay event
             }
          },0); // make sure we close the overlay in the next browser tick, so it doesn't re-render 

           return apiData;
        });
   }
];
```
