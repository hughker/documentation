# Findify Custom Integration

To integrate Findify into your shop you'll need to follow steps listed below:

* Select a plan and create a Findify account
* Provide a valid product feed
* Add the Findify tracking tags
* Configure a search page url
* Include the search enabling tags
* Add the Findify Javascript to the `<head>` section

__Important note__: If you have any problems or are stuck at any step, don't hesitate to contact us at yourfriends@findify.io.

## Create an account in our system

1. Go to our [Registration Page](https://dashboard.findify.io/#/sign-in/register)
2. Select _Javascript - Other platforms_
3. Enter you name, email and store url. The store url value should not contain _https://_ or _http://_ prefix, e.g. __www.example.com__ or __example.com__ are both valid
4. You will receive an email to validate your account. Click the confirmation link and proceed to next steps

## Provide more information about your shop

1. Select the feed language

__This is an important step as we analyze your feed using a specific analyzer for each language  and frontend will be translated accordingly. If you don't find the language you need, conctact us at youfriends@findify.io__
2. Choose the timzone that your shop is in. This is mainly for analytics to be calculated correctly.
3. Choose the currency of your store

__Please note: we currently don't support multiple currencies on a single store, unless the conversion is done on the frontend. If you need multiple currencies, you would need to generate seperate feeds per currency.__

## Provide a valid product feed

We support these formats for the product feed:

- [CSV](productFeedCSV.md)
- [XML](productFeedXML.md)
- JSON (_please contact us at yourfriends@findify.io directly_)

The feed must be __publicly available__ so that our system can access it via HTTP or HTTPS. We also support Basic Authentication, but for that please contact us directly at yourfriends@findify.io.

After generating the feed, input the publicly accessible url and choose the appropriate format. 

The feed validation process will run afterwards and will notify you if there is any missing information or the feed has incorrect format. 

__You wouldn't be able to proceed futher while the feed is not valid. If you are sure that the feed is correct, but the feed  validation gives an error, please contact us at yourfriends@findify.io__

## Add the Findify tracking tags

You will need to add tags to two templates, one on the product pages, the other on the purchase confirmation page.

### Product page tag

This tag should be used on all product pages, so the best is to place the tag in the product template. This data is taken into account when analyzing the product popularity ordering. The part __“PRODUCT_ID”__ should be replaced by the ID of the product. The ID of the product must correspond to the ID that is in the field __item_group_id__ in the product feed.

```html
<div class="findify_page_product" style="display:none">PRODUCT_ID</div>
```

### Confirmation page tag

Findify will use this data to provide you, the merchant, with search analytics and feed the machine learning processes. __The machine learning components automatically improve the search functionality on your site and increase your conversion, average order value and customer lifetime value.__

This tag is placed on the page that is shown to the customer, after their purchase has been confirmed (often called confirmation page or checkout success). This data is taken into account when analyzing the product popularity ordering.

```html
<div class="findify_purchase_order" style="display:none">
	<span class="order_number">ORDER_ID</span>
	<span class="price_currency_code">EUR</span>
	<div class="purchased_items">
		<div class="line_item">
			<span class="product_id">PRODUCT_ID_1</span>
			<span class="quantity">1</span>
			<span class="unit_price">269.00</span>
		</div>
		<div class="line_item">
			<span class="product_id">PRODUCT_ID_2</span>
			<span class="quantity">3</span>
			<span class="unit_price">19.00</span>
		</div>
	</div>
</div>
```

* __“ORDER_ID”__ should be replaced by the unique ID of the order
* __“EUR”__ should be replaced by the currency code of the order (use ISO 4217 for the currency code, example: USD, EUR, SEK…)
* In _purchased_items_ you should put one _line_item_ per product purchased in the order.

For each __line_item__, you should:

* put the ID of the complex product in _“product_id”_ (for example __“PRODUCT_ID_1”__ or __“PRODUCT_ID_2”__)
* put the quantity of the purchased product in “quantity” (for example **“1”** or **“3”**). The ID of the product must correspond to the ID that is in the field __item_group_id__ in the product feed.
* put the price of one unit of the purchased product in _“unit_price”_ (for example __“269.00”__ or __“19.00”__)

## Configure search page url

The search page URL, is the page to which your customers will be redirected to view the search results. It’s best to create a dedicated, empty page in your store.
Once you've created the search page URL, use it in the onboarding flow, or share it with your integration contact at Findify.

Examples of search page locations:

* */search*
* */pages/search*
* */pages/search/results* 

You can also specify a blank page __"/"__, so that the search results will be rendered on the home page of your store.

## Put search enabling tags

The search enabling tags are a set of DOM attributes that enable the Findify Search and Autocomplete.

### Search result attribute

To show the search results, just add a special attribute to any html element in which you want to display the results. __Please note that the search results will only be displayed if the url of the page with the special attribute matches the search page location.__

```html
 <div data-findify-attr="findify-search-results"></div>
```
 
### Autocomplete input attribute

To connect our autocomplete functionality to any input, just add a special attribute to the input element. You can add the attribute to multiple input elements on a single page. 

```html
<input data-findify-attr="findify-autocomplete-input"/>
```

### Autocomplete button attribute

You can add the special attribute to any button and/or link on your page. Clicking on a button with the attribute will show your customers the search results for the query currently present in the **autocomplete input**.

```html
<input data-findify-attr="findify-autocomplete-button"/>
```

## Add the Findify Javascript to `<head>` section

Simply copy the code snippet below and paste it into page source right before the closing &lt;/head&gt; tag.

```html
<script src=”{javascript_link_from_your_merchant_dashboard}”></script>
```

__Findify should be live in your store now!__
