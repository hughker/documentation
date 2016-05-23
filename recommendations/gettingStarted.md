## How to enable recommendations

1. Create a container that will include the recommendations. A container is usually a div with a given height and width.
2. Add the following html attributes to that container, based on the available recommendations below.
    * ```data-findify-attr="findify-recommendations-box"```
    * ```"data-findify-attr-recommendations-type"```
3. That’s it :)
4. Extras:
    * Disable title: ```data-findify-attr-recommendations-disable-title```
    
## Recommendation types and their respective tags

1. **Title:** Hot sellers
    * Availability: all pages
    * Use case: This recommendation will give customers an idea about what are the top selling products, right now. It’s suitable both for first time and returning visitors.
    * ```<div data-findify-attr="findify-recommendations-box" data-findify-attr-recommendations-type="trending"></div>```

2. **Title:** Customers who viewed this ultimately bought
    * Availability: only product pages
    * Use case: This recommendation is suitable for the case when a customer is at the end of their product discovery, and trying to decide between just a few products.
    * ```<div data-findify-attr="findify-recommendations-box" data-findify-attr-recommendations-type="customers-who-viewed-this-bought-that"></div>```

3. **Title:** Customers who viewed this also viewed
    * Availability: only product pages
    * Use case: This recommendation is great for customers just starting their discovery process.
    * ```<div data-findify-attr="findify-recommendations-box" data-findify-attr-recommendations-type="customers-who-viewed-this-viewed-that"></div>```

4. **Title:** Items you considered
    * Availability: all pages
    * Use case: This is an on-site “re-targeting” recommendation. It reminds customers of products they recently viewed, and helps push the sale.
    * ```<div data-findify-attr="findify-recommendations-box" data-findify-attr-recommendations-type="recently-viewed"></div>```
