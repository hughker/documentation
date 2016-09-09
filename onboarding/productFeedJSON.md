## Introduction
This document presents the product feed specification for the JSON feeds sent to Findify.

In order for Findify to synchronize periodically your products with our system, the JSON file must be publicly accessible. Findify is supporting feeds available via HTTP or HTTPS (behind a basic authentication).

## Mandatory fields

The following table presents the mandatory fields you will need to insert in the product feed.

|Name of the field|Description|Example
|-----------------|-----------|------|
|id               |Unique identifier of the product. This identifier must be **unique** across all products.|*tddy123uk*|
|title            |Title of the product.|*Men's Pique Polo Shirt*|
|description      |Description of the product. |*Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.*|
|price            |Price of the product.|*15.99*|
|image_url        |URL of the product image. For a best displaying quality, the image must have a size of 180px * 180px.|*http://www.example.co.uk/image1.jpg*|
|product_url      |URL of the product page.|*http://www.example.com/asp/sp.asp?cat=12&id=1030*|
|category          |Category of the product. Subcategories are split using the > delimiter. It's possible to include several groups of categories by separating them with the ### delimiter.|*Clothing & Accessories > Clothing > Dresses*|
|thumbnail_url    |URL of the product thumbnail image. The thumbnail image must have a size of 65px * 65px.|*http://www.example.co.uk/image1_thumb.jpg*|

## Optional fields

|Name of the field|Description|Example
|-----------------|-----------|------|
|sku              |SKU of the product. Even if the "id" of the product is the SKU, you need to add a dedicated "sku" field.|*126373-AOP*|
|availability     |Availability status of the product (‘in stock” or “out of stock”).|*in stock*|
|brand            |Brand of the product.|*Calvin Klein*|
|seller           |Seller of the product.|*Calvin Shop*|
|sale_price       |Advertised sale price of the product.|*13.65*|
|material         |Material of the product.|*cotton*|
|color            |Color of the product.|*red*|
|size             |Size of the product.|*34*|
|quantity         |Quantity of the product|*98*|
|item_group_id    |Common identifier for all variants of the same product.|*89A*|
|created_at       |Date when the product has been made available to the users (format ISO-8601).|*2014-04-22T06:00:00Z*|
|rating_score     |Rating score of the product.|*3.5*|
|name_custom_field|A custom field that contains one specific information.|**|

## Custom fields

Custom fields can be added in the feed, in addition of the fields described above. Custom fields can contain a large panel of information, specific to your products or to your business. Defining a custom field make it automatically searchable for the Findify search: customers will be able to make queries to match their inner content. Custom fields can also be configured as filters in the Findify Dashboard.

At the moment, only the custom fields that have a type **String** or **Double** are accepted. 

To include custom fields, add a new field whose name is your custom field name.
Here is an example where the custom fields gender and occasion have been added to the product mandatory and optional fields.
```json
{
  "id": "tddy123uk",
  "sku": "OY1236H3",
  "title": "Men's long sleeves white shirt",
  "description": "This product has long sleeve, comfortable fabric, button front closure and a solid color",
  "price": 69,
  "image_url": "http://www.example.com/my_image.jpg",
  "product_url": "http://www.example.com/my_product",
  "category": "Clothing > Shirt > For work",
  "thumbnail_url": "http://www.example.com/my_image_small.jpg",
  "availability": true,
  "brand": "Calvin Klein",
  "material": "60% Cotton, 40% Polyester",
  "color": "white",
  "size": "L",
  "quantity": 30,
  "gender": "Man",
  "occasion": "wedding"
}
```

## Variants

If your feed contain variants, by default, Findify will group them into one unique product. By specifying the field “item_group_id” and filling it with a common value for the variants you want to group, we will group these variants into 1 product.

```json
{
  "id": "610010",
  "title": "Men's long sleeves white shirt",
  "price": 54,
  "size": "L",
  ...
  "item_group_id": "630446"
}
{
  "id": "610011",
  "title": "Men's long sleeves white shirt",
  "price": 60,
  "size": "XL",
  ...,
  "item_group_id": "630446"
}
```

Here the same T-shirt available in both sizes L and XL will be grouped into 1 unique product.

If your model does not permit it, grouping the variants according to the product URL or another field from the set of mandatory fields is also possible. Let us know if it is the case!

## Structure of the product feed

We are accepting different structures for the JSON feed. You can choose the one you prefer depending on the complexity on your side to generate the feed.

### 1 product per line (JSONL format)
```json
{"id": "15363", "title": "Long sleeve shirt", ... }
{"id": "73829", "title": "Short sleeve shirt", ... }
```

### 1 array containing all the products
```json
[{"id": "15363", "title": "Long sleeve shirt", ... },
{"id": "73829", "title": "Short sleeve shirt", ... }]
```

### All the products into a "products" object
```json
{
  "products": [
    {
      "title": "Long sleeve shirt",
      "id": "15363",
      ...
    },
    {
      "title": "Short sleeve shirt",
      "id": "73829",
      ...
    }
  ]
}
```

## Remove some products from appearing in the search

Sometimes, you would like to remove some products from the search. This can be useful when the feed is automatically generated or if you have wholesale products you do not wish to make them appear in the search results. In order to remove these products, you need to add another field named “tags” and give it the value **findify-remove**. 

```json
{
  "id": "637382",
  "title": "Long sleeve shirt for kid",
  ...
  "tags": "findify-remove"
}
```

In case you have already tags in your feed, separate the value “findify-remove" from the other values with a comma: “findify-remove, tag1, tag2”.
