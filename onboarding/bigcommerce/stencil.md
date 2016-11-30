# Enable HTML editing on your store
Go to Storefront Design > My Themes
Click on "Customize"
Scroll on the left to the section "Edit theme files" and Click on "make a copy"
Add " with Findify" to the end of your theme name and Click on "Save a Copy"
Go to Storefront Design > My Themes (you should land on this page)
Select "Theme options" > "Edit theme Files" at the top right
A window showing html code should open

# Integrate Findify
## Tracking tags (https://github.com/findify/documentation/blob/master/onboarding/bigcommerce/integration.md#add-findify-tracking-tracking-tags)

### Product
Open the file `"templates" > "pages" > "product.html"`

```html
<div class="findify_page_product" style="display:none">{{product.id}}</div>
```

### Order
=> **Didn't find the right order ID variable**

Open the file `"templates" > "pages" > "order-complete.html"`
```html
<div class="findify_purchase_order" style="display:none">
   <span class="order_number">{{ order.id }}</span>
</div>
```
## Search page (https://github.com/findify/documentation/blob/master/onboarding/bigcommerce/integration.md#add-findify-to-your-search-page)

Open the file `"templates" > "pages" > "search.html"`
```html
data-findify-attr="findify-search-results"
```
## Search input (https://github.com/findify/documentation/blob/master/onboarding/bigcommerce/integration.md#add-findify-to-your-search-page)
=> **Do we even need that?**
Open the file `"templates" > "components" > "common" > "search-box.html"`

# Add our JS (https://github.com/findify/documentation/blob/master/onboarding/bigcommerce/integration.md#add-js-script-to-header)
Open the file `"templates" > "layout" > "base.html"`
Add your JS at the end of the heade
