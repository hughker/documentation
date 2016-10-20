# What are smart collections?

Smart collections are an inteligent way to present specific product segments to your users. 
The added value with Findify Smart Collections is that you will have all the features you love in Findify search, now on a collection level:

1. Dynamic filtering
2. Trend based product ordering (using our Machine Learning platform)
3. Lightning fast response time

The Findify Smart Collections are SEO friendly, and are indexed by search engines to make sure you make the best of your product data. 
Smart Collections can be used to replace specific cateogory pages on your site, create dedicated landing pages, or as the compelte collection engine for your store.

# How can I create a Findify Smart Collection

To integrate Findify Smart Collections you must be on our Enterprise plan. Please contact us to discuss an upgrade. 
If you are already on the Enterprise plan, all you need to do is add one div tag to anywhere you'd like to include your Findify Smart Collection[s]:

```html
<div data-findify-attr="findify-search-results"></div>
```

# How can I add extra content to my Findify Smart Collection pages

The Findify Smart Collection results can be easily decorated with any content from your store (like custom banners, reviewes, recommendations. etc). 
All you need to do is put the content before and/or after the Findify Smart Collection `div`, for example:

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

# How can I add fallback for Findify Smart Collections
__Please note: if you will not add fallback, nothing will be displayed on the page in case our servers go down__

For the cases when Findify servers are not responding, you can add a fallback to display custom markup instead of Findify Smart Collections.

To do this, you need to add a `div` to the page with the following `id` and `style`:
```html
<div id="findify_results_fallback" style="display: none;">
   <!-- Any custom markup, which will be displayed instead of findify smart collections -->
</div>
```

Anything that you will put inside the `div` will be rendered as a fallback.

# Shopify specific integration
If you are a Shopify customer, you should put the Findify Smart Collection html `div` code into your `collection.liquid` template.
This way you can use liquid template variables to easily extend the collection page's content.

## replacing all your Shopify collections with Findify Smart Collections
1. Once you've configured all your smart collections, modify the collection template to include the following snippet: https://github.com/findify/documentation/blob/master/merchant-js/examples/customization/preloader/shopify.md
2. Once the snippet is added, enable Findify from your Dashboard (if this hasn't been done already)

## replacing a subset of your Shopify collections with Findify Smart Collections
1. 1. Once you've configured all your smart collections, modify the collection template to include the following snippet: https://github.com/findify/documentation/blob/master/merchant-js/examples/customization/preloader/shopify.md
2. To do so, you’d need to create a condition in the template, based on the collection handle. The collection handle is the last part of the URL you provided in the smart collection configuration sheet. For example, for this collection URL: https://example.com/collections/collection-name the collection handle is "collection-name"
3. This is the condition to create in the collection template:
```
{% if collection.handle == ‘my-collection-name’ %}
// Place the Findify code block from step #1 here
{% else %}
// Place the default collection code here
{% endif %}
```
These instructions are based on the Shopify collection handle documentation: https://help.shopify.com/themes/liquid/objects/collection#collection-handle

# Bigcommerce specific integration
1. Once you've configured all your smart collections, go `category.html` edit page:
  **[store_url]/admin/designmode.php?ToDo=editFile&File=category.html&f=a**
2. Replace original category markup by the following code:

  ```html
  <div data-findify-attr="findify-search-results" style="min-height: 400px; display:none">
  </div>
  <div id="findify_results_fallback" style="display: none;">
      <!-- Original category code -->
  </div>
  ```
3. Put initial category code inside of `#findify_results_fallback` div. For the cases, when our servers are down, will be rendered this div.
4. Go to `HTMLHead.html` edit page. Add the following code in the place before MerchantJS file is included(This file should be something like `.../search/prod/[your_site].min.js`:
  ```html
  <script>
      window.findifyApiRegistry = [
          function (api) {
              function removeTrailingSlashIfNeeded(pathname) {
                  return pathname.slice(-1) === '/' ? pathname.slice(0, -1) : pathname;
              }

              function getCollectionsNames(collections) {
                  return collections.reduce(function (acc, collection) {
                      return acc.concat(removeTrailingSlashIfNeeded(collection.slot));
                  }, []);
              }

              api.on(api.events.gotConfiguration, function (apiData) {
                  window.onload = function() {
                      var names = getCollectionsNames(apiData.collection);
                      var currentCollectionName = removeTrailingSlashIfNeeded(document.location.pathname);

                      if (names.indexOf(currentCollectionName) !== -1) {
                          var results = document.querySelector('[data-findify-attr="findify-search-results"]');
                          results && (results.style.display = 'block');
                      } else {
                          var resultsFallback = document.querySelector('#findify_results_fallback');
                          resultsFallback && (resultsFallback.style.display = 'block');
                      }
                  }
              });
          }
      ];
  </script>
  ```
5. If you want to show a preloader while Smart Collections are loading from server, you need to copy [this code](https://github.com/findify/documentation/blob/master/merchant-js/examples/customization/preloader/bigcommerce.md) from **Add the preloader styling** section and paste it after `<body>` tag.

  After it, you need to add this code inside of `data-findify-attr="findify-search-results"` div:

  ```
  <div class="findify-component-spinner"></div>
  ```
