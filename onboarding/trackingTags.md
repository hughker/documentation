## Introduction

The purpose of this document is to provide technical implementation guidelines for Findify’s data collection tools. Findify will use this data to provide you, the merchant, with search analytics and feed the machine learning processes. The machine learning components automatically improve the search functionality on your site and increase your conversion, average order value and customer lifetime value. 

You will need to add tags to two templates, one on the product pages, the other on the purchase confirmation page.

## Product page tag
This tag should be used on all product pages, so the best is to place the tag in the product template. This data is taken into account when analyzing the product popularity ordering. The part **“ID_PRODUCT1234”** should be replaced by the ID of the product. The ID of the product must correspond to the ID that is in the field item_group_id in the product feed.

```html
<div class="findify_page_product" style="display:none">ID_PRODUCT1234</div>
```

## Confirmation page tag
This tag is placed on the page that is shown to the customer, after their purchase has been confirmed (often called confirmation page or checkout success). This data is taken into account when analyzing the product popularity ordering.

```html
<div class="findify_purchase_order" style="display:none">
	<span class="order_number">1234</span>
	<span class="price_currency_code">EUR</span>
	<div class="purchased_items">
		<div class="line_item">
			<span class="product_id">ID_PRODUCT1234</span>
			<span class="quantity">1</span>
			<span class="unit_price">269.00</span>
		</div>
		<div class="line_item">
			<span class="product_id">ID_JACKET</span>
			<span class="quantity">3</span>
			<span class="unit_price">19.00</span>
		</div>
	</div>
</div>
```

* **“1234”** should be replaced by the unique ID of the order
* **“EUR”** should be replaced by the currency code of the order (use ISO 4217 for the currency code, example: USD, EUR, SEK…)
* In purchased_items you should put one line_item per product purchased in the order.

For each **line_item**, you should:

* put the ID of the complex product in “product_id” (for example **“ID_PRODUCT1234”** or **“ID_JACKET”**)
* put the quantity of the purchased product in “quantity” (for example **“1”** or **“3”**). The ID of the product must correspond to the ID that is in the field item_group_id in the product feed.
* put the price of one unit of the purchased product in “unit_price” (for example **“269.00”** or **“19.00”**)
