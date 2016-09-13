#Add an "add to cart" button to the product search results

This examples shows how you can create an "add to cart" button for each product in the search results.

```javascript

function addToCart(productId) {
    // the store's implementation of addToCart
}

window.findifyApiRegistry = [
    function (api) {
        api.on(api.events.searchRenderedResults, function (apiData) {
            var node = apiData.node,
                buttonNode,
                button;
            
            if (node) {
                buttonNode = node.querySelector('[data-add-to-cart="' + apiData.data.id + '"]');
                
                if (!buttonNode) {
                    button = document.createElement('button');
                    
                    button.setAttribute('data-add-to-cart',apiData.data.id);
                    button.setAttribute('data-findify-type','search-product');
                    button.setAttribute('data-findify-id', apiData.data.id);

                    button.addEventListener('click', function() {
                        addToCart(apiData.data.id);
                    });
                    
                    node.appendChild(button);
                }
            }
        });
    }
];
```