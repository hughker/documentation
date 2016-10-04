# Add an "add to cart" button to the product search results

This examples shows how you can create an "add to cart" button for each product in the search results.
If you have multiple variants of one product, you would need to update the script to select correct variant.

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

## Shopify integration

function addCartToFindifyProduct(apiData){
    var node = apiData.node;
    var formNode, button;

    if (node) {
        formNode = node.querySelector('[data-add-to-cart="' + apiData.data.id + '"]');

        if (!formNode) {
            formNode = document.createElement('form');
            formNode.setAttribute("method", "POST");
            formNode.setAttribute("action", "/cart/add");
            formNode.setAttribute('data-add-to-cart', apiData.data.id);
            formNode.setAttribute('data-findify-type','search-product');
            formNode.setAttribute('data-findify-id', apiData.data.id);
            //ADD CUSTOM CLASSES TO THE FORM
            formNode.setAttribute('class', 'YOUR_CUSTOM_CLASSES');

            var quantity = document.createElement('input');
            quantity.setAttribute("type", "hidden");
            quantity.setAttribute("name", "quantity");
            quantity.setAttribute("value", "1");
            formNode.appendChild(quantity);

            var productID = document.createElement('input');
            productID.setAttribute("type", "hidden");
            productID.setAttribute("name", "id");
            
            if (apiData.data.variants_ids.length === 1){
                productID.setAttribute("value", apiData.data.variants_ids[0]);
            } else {
                //SET CORRECT VARIANT ID IF THERE ARE MULTIPLE
                return;
            }
            
            formNode.appendChild(productID);

            var submitButton = document.createElement('input');
            submitButton.setAttribute("type", "submit");
            submitButton.setAttribute("value", "Add to cart");

            submitButton.addEventListener('click', function(e) {                
                e.preventDefault();
                formNode.submit();
            });
            
            formNode.appendChild(submitButton);

            if (node.children && node.children.length > 0){
                node.children[0].appendChild(formNode);
            } else {
                node.appendChild(formNode);
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
