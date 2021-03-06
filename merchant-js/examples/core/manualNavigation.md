#Manual navigation

This document explains how to use the Merchant.JS search urls, to navigate to a pre-defined set of search results.

## Simple query

1. Load your store and search for the query which you want to navigate to.
![](https://raw.githubusercontent.com/findify/documentation/master/merchant-js-core/images/manual_navigation_1.png)


2. While on the search results page checkout the url in your browser address bar.
![](https://raw.githubusercontent.com/findify/documentation/master/merchant-js-core/images/manual_navigation_2.png)


3. Select the whole link and copy it
![](https://raw.githubusercontent.com/findify/documentation/master/merchant-js-core/images/manual_navigation_3.png)


4. Used the copied link addres as a target url for you navigation button, for example: 
```
<a href="http://mjsv3-staging.myshopify.com/pages/search-results?search={q=dog}">Dog food</a>
```

## Filtered query

1. Load your store and search for the query which you want to navigate to.
![](https://raw.githubusercontent.com/findify/documentation/master/merchant-js-core/images/manual_navigation_1.png)


2. Apply some filters using the filter panel on the left
![](https://raw.githubusercontent.com/findify/documentation/master/merchant-js-core/images/manual_navigation_4.png)


2. Checkout the url in your browser address bar.
![](https://raw.githubusercontent.com/findify/documentation/master/merchant-js-core/images/manual_navigation_2.png)


3. Select the whole link and copy it
![](https://raw.githubusercontent.com/findify/documentation/master/merchant-js-core/images/manual_navigation_3.png)


4. Used the copied link addres as a target url for you navigation button, for example: 

```
<a href="http://mjsv3-staging.myshopify.com/pages/search-results?search={q=dog&facets%5B0%5D%5Btype%5D=category&facets%5B0%5D%5Bname%5D=category1&facets%5B0%5D%5Bvalues%5D%5B0%5D=Cat%20Food&facets%5B1%5D%5Btype%5D=range&facets%5B1%5D%5Bname%5D=price&facets%5B1%5D%5Bvalues%5D%5B0%5D%5Bto%5D=20&offset=0}">Dog food</a>
```
