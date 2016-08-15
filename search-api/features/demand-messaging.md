# Demand Messaging

This feature allows to show messages like 'X people are viewing this product at the moment'. 

The API allows you to get the count of people that are viewing a certaing prodcut for a given period of time. 

Here's an example of how you can do it using jQuery:

```js
$(function() {
    //using JSONP
    $.getJSON("https://api-v3.findify.io", { key: YOUR_API_KEY, span: 30}, function(response) {
        console.log(response.meta.count);
    });
    //using post
    $.ajax({
        type: "POST",
        url: "https://api-v3.findify.io",
        data: { span: 30 },
        headers: { "x-key": YOUR_API_KEY },
        success: function(response) {
            console.log(response.meta.count);
        }
    });
});
```
## Parameters
### key 
It's the API key which you can find your API key in the [Merchant Dashboard](https://dashboard.findify.io/#/dashboard/integration-details)
### span
A number representing the time span in minutes to look for. Default is 2 hours (120 minutes), maximum is 3 days (4320 minutes);