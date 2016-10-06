# Change product image on hover

This examples shows how you can show a different product image when hovering over the product in the search results page.

![Change product image on hover](images/productImageOnHover.gif)

```javascript
window.findifyApiRegistry = [
    function (api) {
        function switchImage(imageNode, image) {
            return function () {
                imageNode.src = image;
            };
        };

        api.on(api.events.searchRenderedResults, function (apiData) {
            var node = apiData.node,
                image;

            if (node) {
                image = node.querySelector('img');

                if (apiData.data.image_2_url) {
                    var preload = new Image();
                        preload.src = apiData.data.image_2_url,
                        box = node.querySelector('.findify-mjs-search-results__main__content__product__box__image');

                   box.onmouseover = switchImage(image, apiData.data.image_2_url);
                   box.onmouseout = switchImage(image, apiData.data.image_url);
                }
            }
        });
    }
];
```
