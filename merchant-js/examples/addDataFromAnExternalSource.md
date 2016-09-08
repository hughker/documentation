#Add data from an external source

This examples shows how you can add extra, external data to the search results.

```javascript
window.findifyApiRegistry = [
    function (api) {
        api.on(api.events.searchGotData, function (apiData, dispatcher) {
            var pids = [],
                request = new XMLHttpRequest();

            apiData.products.forEach(function (product) {
                pids.push(product.id);
            });

            request.open('GET', '/priceApi.php?pids=' + pids.join(','), true);
            request.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status >= 200 && this.status < 400) {
                        var data = JSON.parse(this.responseText);

                        apiData.products.forEach(function (product) {
                            if (data.products[product.id]) {
                                if (parseInt(data.products[product.id].final_price) < parseInt(product.price)) {
                                    product.sale_price = data.products[product.id].final_price;
                                }
                            }
                        });

                        dispatcher(apiData);
                    }

                }
            };

            request.send();
            request = null;

            return apiData;
        });
    }
];
```
