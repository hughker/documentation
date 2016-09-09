## Introduction

This document presents the product feed specification for the CSV feeds sent to Findify.

In order for Findify to synchronize periodically your products with our system, the CSV file must be publicly accessible. Findify is supporting feeds available via HTTP or HTTPS (behind a basic authentication).

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

Custom fields that are not part of the model above, can be specified in the feed. Custom fields can contain a large panel of information, specific to your products or to your business. Defining a custom field make it automatically searchable: customers will be able to make queries to match their inner content. Custom fields can also be configured as filters in the Findify Merchant Dashboard.

At the moment, only the custom fields that have a type **String** or **Double** are accepted. 

To include custom fields, just add in the headers of your CSV file, the name of the custom field. Then, for each line, write the value of the custom field. If the value is non-existent, just let the field empty.

Here is an example with two custom fields (in bold) for the following product:

>id,title,description,price,image_url,product_url,category,thumbnail_url,availability,brand,sale_price,material,color,size,quantity,item_group_id,rating_score,created_at,**occasion**,**gender**

>tddy123uk,"Men's Pique Polo Shirt","Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.",15.99,http://www.example.co.uk/image1.jpg,http://www.example.com/asp/sp.asp?cat=12&id=1030,Clothing & Accessories > Clothing > Dresses,http://www.example.co.uk/image1_thumb.jpg,in stock,Calvin Klein,13.65,cotton,red,34,98,89A,3.5,1977-04-22T06:00:00Z,**casual**,**man**

## Variants

Your feed can contain variants. Specifying the optional field “item_group_id” and filling it with a common value for the variants you want to group will let us group these variants into 1 product.

If your model does not permit it, grouping the variants according to the product URL or another field from the set of mandatory fields is also possible. Let us know if you want to make this happen.

## Product feed example in CSV

The product feed must contain a **first line describing the headers**, ie. the different names for the fields you want to include with your product. The mandatory fields described above must be present in order for the products to be displayed in the search results. 

However, you don’t have to put all the optional fields if your products don’t include the related information. The fields names are separated by the **comma delimiter** “,” in the headers line.

Each product is then written as a line in the CSV file, the fields' content also separated by the comma delimiter “,”.

Here is an example with the header that contains all the fields and 1 product (second line).

>id,sku,title,description,price,image_url,product_url,category,thumbnail_url,availability,brand,sale_price,material,color,size,quantity,item_group_id,rating_score,created_at

>tddy123uk,126373-AOP,"Men's Pique Polo Shirt","Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.",15.99,http://www.example.co.uk/image1.jpg,http://www.example.com/asp/sp.asp?cat=12&id=1030,Clothing & Accessories > Clothing > Dresses,http://www.example.co.uk/image1_thumb.jpg,in stock,Calvin Klein,13.65,cotton,red,34,98,89A,3.5,1977-04-22T06:00:00Z

## Remove some products from appearing in the search

This is possible to remove some products from the search. This can be useful when the feed is automatically generated. In order to remove some products, you need to add another field named “tags” and give it the value **findify-remove**. 

In case you have already tags in your feed, separate the value “findify-remove" from the other values with a comma: “findify-remove, tag1, tag2”.
