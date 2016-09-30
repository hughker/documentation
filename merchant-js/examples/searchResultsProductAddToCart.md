# Add an "add to cart" button to the product search results

This examples shows how you can create an "add to cart" button for each product in the search results.

__Important note: to add custom styling to the button, you will need to use _Custom CSS_ feature in the Merchant Dashboard__

## Generic integration

```javascript

function addCartToFindifyProduct(apiData){
    var node = apiData.node;
    var buttonNode, button;

    if (node) {
        buttonNode = node.querySelector('[data-add-to-cart="' + apiData.data.id + '"]');

        if (!buttonNode) {
            button = document.createElement('button');

            button.setAttribute('data-add-to-cart',apiData.data.id);
            button.setAttribute('data-findify-type','search-product');
            button.setAttribute('data-findify-id', apiData.data.id);
            //adding custom classes
            button.setAttribute('class', 'YOUR_CUSTOM_CLASSES');
            
            //change button value
            button.innerHTML = "Add to cart";

            button.addEventListener('click', function(e) {                
                e.preventDefault();
                //BIND TO YOUR ADD TO CART FUNCTION
            });
            if (node.children && node.children.length > 0){
                node.children[0].appendChild(button);
            } else {
                node.appendChild(button);
            }                    
        }
    }
}

window.findifyApiRegistry = [
    function (api) {
        api.on(api.events.searchRenderedResults, function (apiData) {
            addCartToFindifyProduct(apiData);
        });
    }
];
```

## BigCommerce integration

```javascript
function addCartToFindifyProduct(apiData){
    var node = apiData.node;
    var buttonNode, button;

    if (node) {
        buttonNode = node.querySelector('[data-add-to-cart="' + apiData.data.id + '"]');

        if (!buttonNode) {
            button = document.createElement('button');

            button.setAttribute('data-add-to-cart',apiData.data.id);
            button.setAttribute('data-findify-type','search-product');
            button.setAttribute('data-findify-id', apiData.data.id);
            //adding custom classes
            button.setAttribute('class', 'YOUR_CUSTOM_CLASSES');
            
            //change button value
            button.innerHTML = "Add to cart";

            button.addEventListener('click', function(e) {                
                e.preventDefault();
                window.location.href = "cart.php?action=add&product_id=" + apiData.data.id;
            });
            if (node.children && node.children.length > 0){
                node.children[0].appendChild(button);
            } else {
                node.appendChild(button);
            }                    
        }
    }
}

window.findifyApiRegistry = [
    function (api) {
        api.on(api.events.searchRenderedResults, function (apiData) {
            addCartToFindifyProduct(apiData);
        });
    }
];
```
