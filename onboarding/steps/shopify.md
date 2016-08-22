# Shopify

To integrate Findify into your theme you need to do all of the steps listed below:

* Tag product view
* Create search results page
* Add script to `<head>` section


## Tag product view

Create a new snippet under __`snippets/`__ that is called __`findify-tagging.liquid`__ with the following content

```html
{% if product %}<div class="findify_page_product" style="display:none">{{product.id}}</div>{% endif %}
```

Reference this snippet in `layout.liquid` file of the theme by placing the snippet below before `</body>`

```html
{% include 'findify-tagging' %}
```
## Create search results page

Create a new page for displaying search results with __`search-results`__ handle and put the following content there

```html
<style><!--
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
  transform-origin: 50% 50%; }
  .findify-component-spinner:after {
    border-radius: 50%;
    width: 60px;
    height: 60px; }

@-webkit-keyframes findify-component-spinner-animation {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg); }
  100% {
    -webkit-transform: rotate(450deg);
    transform: rotate(450deg); } }

@keyframes findify-component-spinner-animation {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg); }
  100% {
    -webkit-transform: rotate(450deg);
    transform: rotate(450deg); } }

.findify-component-spinner {
      border-top: 3px solid #eaeaea;
      border-right: 3px solid #eaeaea;
      border-bottom: 3px solid #eaeaea;
      border-left: 3px solid #c6c6c6;}
   }
--></style>
<div id="findify_results" style="min-height: 400px;">
<div class="findify-component-spinner"></div>
</div>
```

## Add script to `<head>` section

Go to the [Findify Integration](https://dashboard.findify.io/#/dashboard/integration-details) section of the [Merchant Dashboard](https://dashboard.findify.io) and copy the script. 

Paste the script into __`layout.liquid`__ file before __`</head>`__ tag.

__After following these steps the search should be live in your store!__

