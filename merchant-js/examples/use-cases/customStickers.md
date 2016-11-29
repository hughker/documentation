# Custom stickers

Using our MJS API and Custom CSS, you can create custom stickers, that are based on any field from the product and look exactly how you want! 

### MJS API Script example
```js
window.findifyApiRegistry = [
    function (api) {
        function switchImage(imageNode, image) {
            return function () {
                imageNode.src = image;
            };
        };

        api.on(api.events.searchRenderedResults, function (apiData) {
            var node = apiData.node;
            
            //replace CUSTOM_PROPERTY with the property you want to check
            //in order to apply custom sticker
            if (node && apiData.data.CUSTOM_PROPERTY > 10) {
                var div = document.createElement("div");
                //specify your custom classes that you will use in Custom CSS
                div.setAttribute('class', 'YOUR_CUSTOM_CLASSES');
                div.innerHTML = "Custom Sticker";
                
                //append sticker to product box
                if (node.children && node.children.length > 0){
                    node.children[0].appendChild(div);
                } else {
                    node.appendChild(div);
                } 
            }
        });
    }
];
```
### How it might look on your store

Here are some screenshots that show you the result of adding a custom sticker

![Custom discount sticker](images/sticker.png)
