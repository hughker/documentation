#Change the default image size with custom css

Add this css snippet to your Findify custom css file to increase the default image size. In this example we demostrate increasing the max-height of the image from 150px to 200px;

```css
/* default target image size is 150px, in this example we change it to 200px */
.findify-mjs-search-results .findify-mjs-search-results__main .findify-mjs-search-results__main__content .findify-mjs-search-results__main__content__product .findify-mjs-search-results__main__content__product__box .findify-mjs-search-results__main__content__product__box__image {
    min-height: 200px; /* target image size */
    max-height: 200px; /* target image size */ 
}

.findify-mjs-search-results .findify-mjs-search-results__main .findify-mjs-search-results__main__content .findify-mjs-search-results__main__content__product .findify-mjs-search-results__main__content__product__box .findify-mjs-search-results__main__content__product__box__image>img { 
    max-height: 200px; /* target image size */
}
```
