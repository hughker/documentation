#Modify the content of the sortBy dropdown labels

This examples shows how you can change the labels of the sortBy dropdown component.

```javascript
api.on(api.events.searchRenderedHeader, function (apiData) {
    if (apiData.node) {
        var dropDownItems = apiData.node.querySelectorAll('.findify-mjs-search-results__header__content__sort__drop-down__inner__item'),
            dropDownLabel = apiData.node.querySelector('.findify-mjs-search-results__header__content__sort__drop-down > span');

        if (dropDownLabel) {
            dropDownLabel.textContent = dropDownLabel.textContent.replace('Price:', '£:');
        }
        if (dropDownItems) {
            for (var i = 0; i < dropDownItems.length; i += 1) {
                if (i > 0) {
                    dropDownItems[i].textContent = dropDownItems[i].textContent.replace('Price:', '£:')
                }
            }
        }
    }
});
```
