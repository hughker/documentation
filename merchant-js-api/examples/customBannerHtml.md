#Add custom css

This examples shows how you can inject custom css into the search results.

```javascript
window.findifyApiRegistry = [
    function (api) {
      api.addStyle('https://yourstore.com/custom-findify-style.css');
    }
];
```

