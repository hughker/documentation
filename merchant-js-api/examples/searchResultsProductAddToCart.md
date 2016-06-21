#Add an "add to cart" button to the product search results

This examples shows how you can create an "add to cart" button for each product in the search results.

```javascript

function addToCart(productId) {
    // the store's implementation of addToCart
}

window.findifyApiRegistry = [
    function (api) {
        api.on(api.events.searchRenderedResults, function (apiData) {
            var node = apiData.node;
            
            if (node) {
                var button = document.createElement('button');
                
                button.addEventListener('click', function() {
                    addToCart(apiData.data.id);
                });
                
                node.appendChild(button);
            }
        });
    }
];
```
