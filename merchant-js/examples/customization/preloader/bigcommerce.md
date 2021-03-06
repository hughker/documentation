# BigCommerce preloader integration

## Add the preloader styling

Add the code to `search.html` (or `search_with_facets.html` if you are using faceted bigcommerce search) after `<body>` tag

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
```

## Add the binding code

Find the `<div>` that is marked with `data-findify-attr="findify-search-results"` and replace it with the code below.
Please note the default BigCommerce snippets for rendering search results, you should keep them, so that BigCommerce default search will work as a fallback.

 ```html
<div data-findify-attr="findify-search-results" style="min-height: 400px;">
     <div class="findify-component-spinner">
       <div style="display:none;">
        %%Panel.SearchPageHeader%%
        %%Panel.SearchPage%%
       </div>
     </div>
</div>
```