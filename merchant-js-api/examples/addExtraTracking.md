#Add extra tracking with Google Analytics

This examples shows how you can track the search events using google analytics.

```javascript
window.findifyApiRegistry = [
    function (api) {
        api.on(api.events.searchGotData, function (data) {
            var gaQuery = data.meta.query || '',
                trackingUrl = '/findify-search?keywords=';

            for (var i = 0; i < 4; i++) {
                gaQuery = encodeURIComponent(gaQuery);
            }

            var virtualUrl = trackingUrl + gaQuery;

            if (typeof ga !== "undefined" && ga && typeof ga === "function") {
                try {
                    ga('send', 'pageview', virtualUrl);
                } catch (e) {
                    /* Do nothing here */
                }
            } else if (typeof _gaq !== "undefined" && _gaq && typeof _gaq.push == "function") {
                try {
                    _gaq.push(['_trackPageview', virtualUrl]);
                } catch (e) {
                    /* Do nothing here */
                }
            }

            return data;
        });
    }
];
```
