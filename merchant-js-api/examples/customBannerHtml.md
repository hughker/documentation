#Build custom banner html

This examples shows how you can inject custom html into/instead of your image banners.

```javascript
window.findifyApiRegistry = [
    function (api) {
      api.on(api.events.searchRenderedBanner, function (apiData) {
        if (apiData.data) {
           console.log(apiData.data) // products: {targetUrl: the link a banner goes to, imageUrl: the image of the banner}
        }
        
        if (apiData.node) {
            apiData.innerHTML = '<p>Your custom HTML here</p>';
        }
      });
      
      api.addStyle('https://yourstore.com/custom-findify-style.css');
    }
];
```

