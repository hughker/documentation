#What are smart collections?

Smart collections are an inteligent way to present specific product segments to your users. 
Imagine you'd like to create pages for products with specific brands or colours or tags. 

Additionally smart collections learn from your user's behaviour. The order of the products is adjusted in time to increase their
conversion - you don't have to do a thing!

Our smart collections can replace any number of product pages in your store, they can be used as the only collection engine or even to create dedicated product landing pages.

#How can I create a smart collection

To integrate smart collections - contact us through the merchant chat in your [Merchant Dashboard](http://dashboard.findify.io),
afterwards you'll just need to add one div tag to anywhere you'd like to list your smart collections:

```html
<div data-findify-attr="findify-search-results"></div>
```

#How can I add extra content to my smart collection pages

The smart collection results can be easily decorate with any content from your store (like custom banners, reviewes, recommendations etc.). 
All you need to do is to put the content before and/or after the smart collection div, for example:

```html
<div class="banner"> 
    <a href="#"><img src="mybanner.png"/></a>
</div>

<div data-findify-attr="findify-search-results"></div>

<div class="text">
    <p>Some extra text</p>
</div>

<div id="home-findify-rec-1"></div>
```

###Shopify tip
You should put the smart collections html div code into your collection.liquid template.
This way you can use liquid template variables to add easily extend the collection page's content.
