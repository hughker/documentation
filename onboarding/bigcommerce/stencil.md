# Integrating Findify with Stencil themes

## Enable HTML editing on your store
__Important note: if for some reason after integration search is not working or you think your website is broken, you can revert to the unmodified theme and contact us!__

In the beginning you need to make a copy of your current theme, so that you can edit theme files directly.

 * Go to `Storefront Design > My Themes`
 * Click on `Customize`
 * Scroll on the left to the section `Edit theme files` and click on `make a copy`
 * Add ` with Findify` to the end of your theme name and click on `Save a Copy`
 * Go to `Storefront Design > My Themes`
 * Select `Theme options > Edit theme Files` at the top right
 * A window showing html code should open
 
You're ready to start integration process!

## Tracking tags

### Product

Open the file `templates > pages > product.html`

Paste the code snippet before ```{{/partial}}```

```html
<div class="findify_page_product" style="display:none">{{product.id}}</div>
```

### Order

Open the file `templates > pages > order-complete.html`

Paste the code snippet before ```{{/partial}}```

```html
<div class="findify_purchase_order" style="display:none">
   <span class="order_number">{{ order.id }}</span>
</div>
```
## Search page

Open the file `templates > pages > search.html`

Paste the following code snippet __after__ ```{{#partial "page"}}```

```html
<style>
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
    transform-origin: 50% 50%;
  }

  .findify-component-spinner:after {
    border-radius: 50%;
    width: 60px;
    height: 60px; 
  }

  @-webkit-keyframes findify-component-spinner-animation {
    0% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg); 
    }
    100% {
      -webkit-transform: rotate(450deg);
      transform: rotate(450deg); 
    }
  }

  @keyframes findify-component-spinner-animation {
    0% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg); 
    }
    100% {
      -webkit-transform: rotate(450deg);
      transform: rotate(450deg); 
    } 
  }

  .findify-component-spinner {
    border-top: 3px solid #eaeaea;
    border-right: 3px solid #eaeaea;
    border-bottom: 3px solid #eaeaea;
    border-left: 3px solid #c6c6c6;}
  }
</style>

<div data-findify-attr="findify-search-results" style="min-height: 400px;">
   <div class="findify-component-spinner">
      <div style="display:none;">
```

Paste the following code snippet __before__ ```{{/partial}}```
```html
</div>
</div>
</div>
```

## Add our JS

Open the file `templates > layout > base.html`

Paste the code snippet containing our script __before__ ```</head>```

_You can get the script tag during the onboarding or in the Merchant Dashboard -> Store setup -> Integration_
