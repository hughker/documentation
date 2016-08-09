window.findifyApiRegistry = [
    function (api) {
        function priceConverter(apiData) {
            var node = apiData.node;
            if (node && apiData.data && apiData.data.price && apiData.data.price[0] === 0) {
                var price = node.querySelector('.findify-mjs-search-results__main__content__product__box__prices, .findify-mjs-autocomplete__content__column__list__item__link__prices__price');

                if (price) {
                    price.innerHTML = 'FREE!';
                }
            }
        }
        api.on(api.events.searchRenderedResults, priceConverter);
        api.on(api.events.autocompleteRenderedProducts, priceConverter);
    }
];    
