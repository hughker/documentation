# Findify Shopify - Best Practices

Here is a list of best practices that apply to the platform Shopify.

## Adding a new filter

### Options or Tags?
To add a new filter to a Shopify product, there are two possibilities:

1. If a product has several variants and you wish to associate the filter at the variant level, then it makes more sense to add an *option*.
For instance, if you have 3 T-Shirts available in the colors "blue", "green" and "red", you will have to create 3 options "red", "blue" and "green". Here, you characterize the variant and associate the information at the variant level.
2. On the other side, if you wish to add a filter on the product level (in case there are no options or if the filter applies to all options), then it makes more sense to add a *tag* associated to the product.

### Configure a tag so Findify can read it
If you wish to add an information in the tag, you need to prefix this information by a common word. For instance, if you wish to add the "gender" information to a T-Shirt product, valid values would be:
- gender:Male
- gender:Female
- gender:Mixed
- gender:another value

After configuring the tags, you will need to contact the Findify team so they can configure the tag on their side as well.