## Introduction

This document presents the product feed specification for the feeds to be sent to Findify.

The product feed must be sent in CSV format. In order for the product feed to be synchronized periodically with the search engine, the CSV file must be accessible via HTTP (or HTTPS). Findify is supporting files behind basic authentication.

## Mandatory fields

|Name of the field|Description|Example
|-----------------|-----------|------|
|id               |Unique identifier of the product. This identifier must be **unique** across all products.|*tddy123uk*|
|title            |Title of the product.|*Men's Pique Polo Shirt*|
|description      |Description of the product. The description should not be written over multiples lines.|*Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.*|
|price            |Price of the product.|*15.99*|
|image_url        |URL of the image of the product. For a best displaying quality, the image must have a size of 180px * 180px.|*http://www.example.co.uk/image1.jpg*|
|product_url      |URL of the product’s page.|*http://www.example.com/asp/sp.asp?cat=12&id=1030*|
|category          |Category of the product. The different subcategories are split using the > delimiter.|*Clothing & Accessories > Clothing > Dresses*|
|thumbnail_url    |URL of the thumbnail image of the product. The thumbnail image must have a size of 65px * 65px.|*http://www.example.co.uk/image1_thumb.jpg*|


## Optional fields

|Name of the field|Description|Example
|-----------------|-----------|------|
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

Custom fields that are not part of the model above, can be specified. Custom fields can contain a large panel of information. They can be specific to your products or to your business. Specifying a custom field make it automatically searchable (customers will be able to make queries to match the inner content of the custom field). It is possible to configure the custom field as a filter in the Merchant Dashboard.

At the moment, only the custom fields that have a type **String** or **Double** are accepted. 

To include custom fields, just add in the headers of your CSV file, the name of the custom field. Then, for each line, write the value of the custom field. If the value is non-existent, just let the field empty.

Here is an example with two custom fields (in bold) for the following product:

>id,title,description,price,image_url,product_url,category,thumbnail_url,availability,brand,sale_price,material,color,size,quantity,item_group_id,rating_score,created_at,**occasion**,**gender**

>tddy123uk,"Men's Pique Polo Shirt","Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.",15.99,http://www.example.co.uk/image1.jpg,http://www.example.com/asp/sp.asp?cat=12&id=1030,Clothing & Accessories > Clothing > Dresses,http://www.example.co.uk/image1_thumb.jpg,in stock,Calvin Klein,13.65,cotton,red,34,98,89A,3.5,1977-04-22T06:00:00Z,**casual**,**man**

## Variants

Your feed can contain variants. Our feed-pulling system can group them if you wish so. By specifying the optional field “item_group_id” that is common to the variants you want to group, the feed-pulling can group the variants of a same group into 1 product.

If your model doesn’t permit it, it is also possible for us to group the variants according to the product URL or another field of the mandatory fields. Let us know if you want to change the field for the variants.

## Product feed example in CSV

The product feed must contain a **first line describing the headers**, ie. the different names for the fields you want to include with your product. The mandatory fields described above must be present in order for the products to be displayed in the search results. 

However, you don’t have to put all the optional fields if your products don’t include the related information. The fields names are separated by the **comma delimiter** “,” in the headers line.

Each product is then written as a line in the CSV file, the fields' content also separated by the comma delimiter “,”.

Here is an example with the header that contains all the fields and 1 product (second line).

>id,title,description,price,image_url,product_url,category,thumbnail_url,availability,brand,sale_price,material,color,size,quantity,item_group_id,rating_score,created_at

>tddy123uk,"Men's Pique Polo Shirt","Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.",15.99,http://www.example.co.uk/image1.jpg,http://www.example.com/asp/sp.asp?cat=12&id=1030,Clothing & Accessories > Clothing > Dresses,http://www.example.co.uk/image1_thumb.jpg,in stock,Calvin Klein,13.65,cotton,red,34,98,89A,3.5,1977-04-22T06:00:00Z

## Hide some products

This is possible to hide some products from the search. It can be useful when the feed is automatically generated. In order to hide some products, you need to add another field named “tags” and give it the value **“findify-hide”**. 

In case you have already tags in your feed, separate the value “findify-hide” from the other values with a comma: “findify-hide, tag1, tag2”.
