# Findify BigCommerce Integration

_At the moment we only support Public App Integration. If you want to integrate with us via a Private App, please contact us directly at yourfriends@findify.io_

To integrate Findify into your shop you'll need to follow steps listed below:

* Install [Findify Search & Recommendations](https://www.bigcommerce.com/apps/findify-search-recommendations)
* Disable quick search
* Add the Findify tracking tags
* Add Findify to your search results page
* Add the Findify Javascript to `<head>` section

__Important note__: If you're using __Stencil__ you might need extra integration work, so please, feel free to contact us!

## Install Findify Search & Recommendations app

Go to our app [Findify Search & Recommendations](https://www.bigcommerce.com/apps/findify-search-recommendations) and add it to your store.

## Disable quick search

1. Go to you store settings __([store_url]/manage/settings/store)__
2. Choose the __display__ tab
3. Scroll down until you fine _Enable Quick Search?_ section and __uncheck__ the box

## Add Findify tracking tracking tags

Adding the tag to __`product.html`__ page

1. Go to the __`product.html`__ page __([store_url]/admin/designmode.php?ToDo=editFile&File=product.html&f=a)__
2. Paste the code snippet before __`</body>`__ tag

```html
<div class="findify_page_product" style="display:none">%%GLOBAL_ProductId%%</div>
```

Adding the tag tp __`order.html`__ page

1. Go to the __`order.html`__ page __([store_url]/admin/designmode.php?ToDo=editFile&File=order.html&f=a)__
2. Paste the code snippet before the __`</body>`__ tag

```html
<div class="findify_purchase_order" style="display:none">
   <span class="order_number">%%GLOBAL_OrderId%%</span>
</div>
```

### Add Findify to your search page

_This is the trickiest part as it may very for different shops._ 

You need to put the tag at the place where you want the search results to be displayed and you may need to create a new `<div>` wrapper around the default BigCommerce element that shows search results.

1. Go to the __`search.html`__ page __([store_url]/admin/designmode.php?ToDo=editFile&File=search.html&f=a)__
2. Paste __`data-findify-attr="findify-search-results"`__ inside the __`<div>`__ tag  that wraps __`%%Panel.SearchPage%%`__
3. If there is no wrapper __`<div>`__, you should create it yourself and tag it with the tag above

### Add JS Script to header

Go to the [Findify Integration](https://dashboard.findify.io/#/dashboard/integration-details) section of the [Merchant Dashboard](https://dashboard.findify.io) and copy the script.

1. Go to the __`Panels/HTMLHead.html`__ page __([store_url]/admin/designmode.php?ToDo=editFile&File=Panels/HTMLHead.html&f=a)__
2. Paste the script copied from the Merchant Dashboard before the __`</head>`__ tag

__After following these steps the search should be live in your store!__

