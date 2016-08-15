# Demand Messaging

This feature allows to show messages like 'X people are viewing this product at the moment'. 

The API allows you to get the count of unique people that are viewing a certain product within a given period of time. 

Here's an example of how you can do it using jQuery:

```js
$(function() {
    //get the count of unique views for this product for the last 30 minutes
    //using JSONP
    $.getJSON("https://api-v3.findify.io/recommend/products/{PRODUCT_ID}/viewed/now", { key: YOUR_API_KEY, span: 30 }, function(response) {
        console.log(response.meta.count);
    });
    //using post
    $.ajax({
        type: "POST",
        url: "https://api-v3.findify.io/recommend/products/{PRODUCT_ID}/viewed/now",
        data: { span: 30 },
        headers: { "x-key": YOUR_API_KEY },
        success: function(response) {
            console.log(response.meta.count);
        }
    });
});
```
## Parameters
### PRODUCT_ID
The ID of the product that you want to have the count
### key 
It's the API key which you can find your API key in the [Merchant Dashboard](https://dashboard.findify.io/#/dashboard/integration-details)
### span
A number representing the time span in minutes to look for. Default is 2 hours (120 minutes), maximum is 3 days (4320 minutes);