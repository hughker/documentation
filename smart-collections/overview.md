# What are smart collections?

Smart collections are an intelligent way to present specific product segments to your users. 
The added value with Findify Smart Collections is that you will have all the features you love in Findify search, now on a collection level:

1. Dynamic filtering
2. Trend based product ordering (using our Machine Learning platform)
3. Lightning fast response time

Findify Smart Collections can be used to replace specific cateogory pages on your site, create dedicated landing pages, or as the complete collection engine for your store. Smart Collections are also SEO friendly, so they are indexed by search engines to make sure you make the best of your product data. 

# How can I create a Findify Smart Collection?

To integrate Findify Smart Collections you must be on our Enterprise plan. Please contact us directly to discuss this plan in more detail!
If you are already on the Enterprise plan, all you need to do is add one div tag to anywhere you'd like to include your Findify Smart Collection[s]:

```html
<div data-findify-attr="findify-search-results"></div>
```

# How can I add extra content to my Findify Smart Collection pages?

The Findify Smart Collection results can be easily decorated with any content from your store (like custom banners, reviews, recommendations. etc). 
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

# How can I add a fallback for Findify Smart Collections?
__Please note: if you will not add a fallback, nothing will be displayed on the page in case our servers go down__

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

## Replacing all your Shopify collections with Findify Smart Collections
__Don't forget to include current collection code in the fallback div__
Put this code in your `collection.liquid` template file (or another collection template file): 

  ```html
  <style>
      .findify-component-spinner {
        margin: 60px auto 0 auto !important;
        position: relative;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: findify-component-spinner-animation 0.7s infinite cubic-bezier(0.67, 0.35, 0.7, 0.8);
        animation: findify-component-spinner-animation 0.7s infinite cubic-bezier(0.67, 0.35, 0.7, 0.8);
        border-radius: 50%;
        width: 60px;
        height: 60px;
        -ms-transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
      }

      .findify-component-spinner:after {
        border-radius: 50%;
        width: 60px;
        height: 60px; 
      }

      @-webkit-keyframes findify-component-spinner-animation {
        0% {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg); 
        }
        100% {
          -webkit-transform: rotate(450deg);
          transform: rotate(450deg); 
        }
      }

      @keyframes findify-component-spinner-animation {
        0% {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg); 
        }
        100% {
          -webkit-transform: rotate(450deg);
          transform: rotate(450deg); 
        } 
      }

      .findify-component-spinner {
        border-top: 3px solid #eaeaea;
        border-right: 3px solid #eaeaea;
        border-bottom: 3px solid #eaeaea;
        border-left: 3px solid #c6c6c6;}
      }
  </style>
  <div data-findify-attr="findify-search-results" style="min-height: 400px;">
    <div class="findify-component-spinner"></div>
  </div>
  <div id="findify_results_fallback" style="display: none;">
      <!-- Original category code -->
  </div>
  ```

## Replacing a subset of your Shopify collections with Findify Smart Collections
1. Configure the smart collection, using instructions above
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
1. Once you've configured all your Smart Collections, go `category.html` edit page:
  **[store_url]/admin/designmode.php?ToDo=editFile&File=category.html&f=a**
2. Replace the original category markup by the following code:

  ```html
  <style>
      .findify-component-spinner {
        margin: 60px auto 0 auto !important;
        position: relative;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: findify-component-spinner-animation 0.7s infinite cubic-bezier(0.67, 0.35, 0.7, 0.8);
        animation: findify-component-spinner-animation 0.7s infinite cubic-bezier(0.67, 0.35, 0.7, 0.8);
        border-radius: 50%;
        width: 60px;
        height: 60px;
        -ms-transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
      }

      .findify-component-spinner:after {
        border-radius: 50%;
        width: 60px;
        height: 60px; 
      }

      @-webkit-keyframes findify-component-spinner-animation {
        0% {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg); 
        }
        100% {
          -webkit-transform: rotate(450deg);
          transform: rotate(450deg); 
        }
      }

      @keyframes findify-component-spinner-animation {
        0% {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg); 
        }
        100% {
          -webkit-transform: rotate(450deg);
          transform: rotate(450deg); 
        } 
      }

      .findify-component-spinner {
        border-top: 3px solid #eaeaea;
        border-right: 3px solid #eaeaea;
        border-bottom: 3px solid #eaeaea;
        border-left: 3px solid #c6c6c6;}
      }
  </style>
  <div data-findify-attr="findify-search-results" style="min-height: 400px;">
    <div class="findify-component-spinner"></div>
  </div>
  <div id="findify_results_fallback" style="display: none;">
      <!-- Original category code -->
  </div>
  ```
3. Put the initial category code inside of `#findify_results_fallback` div. In the situation where our servers are down, this div will be rendered instead.
