# Findify Magento Integration

__Important note: you would need to install and set up [Magento Plugin](https://github.com/findify/findify-magento) to complete the integration__

To integrate Findify into your shop you'll need to follow the steps listed below:

* Select a plan and follow all the steps needed to create a Findify account.
* Configure your feed using the [Magento Plugin](https://github.com/findify/findify-magento/archive/master.zip) and provide us with a valid, publicly available URL. See the instructions on the [Github repository](https://github.com/findify/findify-magento) to install and configure the extension.

## Create an account in our system

1. Go to our [Registration Page](https://dashboard.findify.io/#/sign-in/register)
2. Select _Magento_
3. Enter you name, email and store url. The store url value should not contain _https://_ or _http://_ prefix, e.g. __www.example.com__ or __example.com__ are both valid
4. You wil receive an email to validate your account. Click the confirmation link and proceed to next steps

## Provide more information about your shop

1. Select feed language: This is an __important step__ as we analyze your feed using a specific analyzer for each language  and frontend will be translated accordingly. If you don't find the language you need, contact us at youfriends@findify.io
2. Choose the timezone that your shop is in. This is mainly for analytics to be calculated correctly.
3. Choose the currency of your store.

__We don't support multiple currencies for the same store at the moment, unless you can do the conversion on the frontend. If you need multiple currencies, you would need to have a separate feed generated for each currency.__

## Provide a valid product feed

The product feed generation is done by the [Magento Plugin](https://github.com/findify/findify-magento). 

As soon as you install it and set it up you will have a link to the feed, which you will need to paste in the input for this step.

## Create a new page "search" in your Magento installation

You would need to add a new page called "search" where the search results will be displayed.
If you already have an existing "search" page present, you need to:

1. Login into your Magento admin panel
2. Navigate to __CMS > Pages__
3. Click on the __search__ page
4. Click on the section __Content__
  1. On the main box, add the following: `<div data-findify-attr="findify-search-results"></div>`
5. Click on __Save page__

However, if you do not have any search page, please, follow these instructions:

1. Login into your Magento admin panel
2. Navigate to __CMS > Pages__
3. Click on __Add a new page__ on the top right of the panel.
  1. Page Title = "search"
  2. URL Key = "search"
  3. Store view set to "All stores view"
  4. Status set to "enabled"
4. Click on the section __Content__
  1. On the main box, add the following:`<div data-findify-attr="findify-search-results"></div>`
  2. In the section __Design__, set the __Layout__ to "1 column"
5. Click on __Save page__

## Add an HTML tag to your product page

The goal of this step is to add a tracking HTML tag to record the product pages views.

Add to the following file: app/design/frontend/{your_package}/{your_theme}/layout/local.xml
```xml
<catalog_product_view>
    <reference name="content">
    	<block type="core/template" name="findify_tracking_code" template="findify/product_view.phtml" after="-"></block>
    </reference>
</catalog_product_view>
```

Add then the following file: app/design/frontend/{your_package}/{your_theme}/template/findify/product_view.phtml
```php
<?php $product = Mage::registry('current_product'); ?>
<?php if($product && $product->getId()) : ?>
 <?php
   if($product->getTypeId() == "simple"){
         $parentIds = Mage::getModel('catalog/product_type_grouped')->getParentIdsByChild($product->getId());
         if(!$parentIds)
             $parentIds = Mage::getModel('catalog/product_type_configurable')->getParentIdsByChild($product->getId());
         if(isset($parentIds[0])){
           $parent = Mage::getModel('catalog/product')->load($parentIds[0]);
          $pid = $parent->getId();
        } else $pid = $product->getId();
   } else $pid = $product->getId();
 ?>
    <div class="findify_page_product" style="display:none;"><?php echo $pid; ?></div>
<?php endif; ?>
```

## Add an HTML tag to your checkout confirmation page

The goal of this step is to add a tracking HTML tag to record the successful purchases.

Add to the following file: app/design/frontend/{your_package}/{your_theme}/layout/local.xml
```xml
<checkout_onepage_success translate="label">
    <reference name="content">
        <block type="core/template" name="findify_tracking_code" template="findify/checkout_success.phtml" after="-"></block>
    </reference>
</checkout_onepage_success>
```

Add then the following file: app/design/frontend/{your_package}/{your_theme}/template/findify/checkout_success.phtml
```php
<?php $orderId = Mage::getSingleton('checkout/session')->getLastOrderId(); ?>
<?php if($orderId): ?>
    <?php $order = Mage::getModel('sales/order')->load($orderId); ?>
    <div class="findify_purchase_order" style="display:none;">
        <span class="order_number"><?php echo $order->getIncrementId(); ?></span>
        <span class="price_currency_code"><?php echo $order->getOrderCurrencyCode(); ?></span>
        <div class="purchased_items">
            <?php 
            $prodarr=array();
            $i=0;
            foreach($order->getAllItems() AS $item) : ?>
            <?php
            $pro=Mage::getModel('catalog/product')->load($item->getProductId());
                if($pro->getTypeId() == "simple"){
                    $parentIds = Mage::getModel('catalog/product_type_grouped')->getParentIdsByChild($pro->getId());
                    if(!$parentIds)
                        $parentIds = Mage::getModel('catalog/product_type_configurable')->getParentIdsByChild($pro->getId());
                    if(isset($parentIds[0])){
                        $parent = Mage::getModel('catalog/product')->load($parentIds[0]);
                        $prid = $parent->getId();
                    } else $prid = $pro->getId();
                } else $prid = $item->getProductId();
                $prodarr[$i]['id']=$prid;
                $prodarr[$i]['type']=$pro->getTypeId();
                $prodarr[$i]['price']=$item->getPrice();
                
            if($pro->getTypeId() != "configurable"){
                if($item->getPrice()==0 && $prid==$prodarr[$i-1]['id'] && $prodarr[$i-1]['type']=="configurable") $pric=$prodarr[$i-1]['price'];
                else  $pric=$item->getPrice();
            ?>
                <div class="line_item">
                    <span class="product_id"><?php echo $prid; ?></span>
                    <span class="quantity"><?php echo $item->getQtyOrdered(); ?></span>
                    <span class="unit_price"><?php echo $pric; ?></span>
                </div>
            <?php
            }
            $i++;
            endforeach; ?>
        </div>
    </div>
<?php endif; ?>
```

## Autocomplete input attribute

To connect our autocomplete functionality to any input, just add a special attribute to the input element. You can add the attribute to multiple input elements on a single page. 

```html
<input data-findify-attr="findify-autocomplete-input"/>
```

## Autocomplete button attribute

You can add the special attribute to any button and/or link on your page. Clicking on a button with the attribute will show your customers the search results for the query currently present in the **autocomplete input**.

```html
<input data-findify-attr="findify-autocomplete-button"/>
```

## Add the Findify Javascript to the `<head>` section

Simply copy the code snippet below and paste it into page source right before the closing &lt;/head&gt; tag.

```html
<script src=”{javascript_link_from_your_merchant_dashboard}”></script>
```

__Findify should be live in your store now!__
