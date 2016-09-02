# Findify Shopify Integration

There are 2 ways to integrate Findify into your Shopify store: 
- Using our fully automatic [Shopify App](https://apps.shopify.com/findify-search)
- Using a private Shopify app and providing us with API key and password for it

## Public app integration

- Go to our app [Findify Seach & Recommendation](https://apps.shopify.com/findify-search) in the Shopify App Store
- Install the app

Proceed to our [Merchant Dashboard](https://dashboard.findify.io) either by logging in directly or from your Shopify Admin Panel and start customizing!

## Private app integration

### Required permissions

By default for a fully automatic process we require the following permissions:
- Read and Write on Store Content
- Read and Write Script tags
- Read and Write Themes
- Read Orders
- Read Products

However, if you don't want to give us write permissions for your themes and store content, it's not a problem, although it will require some manual steps on your side. 

This is a __minimum required__ set of permissions:

- Read Orders
- Read Products

### Generating API key and password

- Follow the [Generate private app credentials](https://help.shopify.com/api/guides/api-credentials#generate-private-app-credentials) guide 
- Choose which permissions you want to give us (full or minimum)
- Send the API key and Password generated in first step to yourfriends@findify.io

### Next step: Follow [integration steps for minimum set of permissions](integration.md)