#Modify how the responsive search results layout works

This examples shows how you can manage the search results product layout to suit your needs.

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
                node.setAttribute('class', 'findify-mjs-search-results__main__content__product col-lg-4 col-sm-6 col-xs-6 col-xxs-12');
            }
        });
    }
];
```
