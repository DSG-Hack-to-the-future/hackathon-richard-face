export class Search {
    constructor(axios) {
      this.$axios = axios;
       this.searchURL = "/api/v1/search/products/"
    }

    lookup = async (lookupString) => {
        console.log("lookupString", lookupString)
        // CORS wont work... w/e
        //
        // return this.$axios.$post(this.searchURL, 
        // {
        //     "searchTerm": lookupString
        // });

        return {
            "productVOs": [
                {
                    "catentryId": 8312457,
                    "partnumber": "22416479",
                    "parentCatentryId": "8310463",
                    "parentPartnumber": "22NIKMNVNCBLBLKWHRNN",
                    "swatchPartnumber": "22NIKMNVNCBLBLKWHRNN_Black/White",
                    "name": "Nike Men's ZoomX Invincible Run Flyknit 2 Running Shoes",
                    "mfName": "Nike",
                    "badge": "NewArrivals",
                    "thumbnail": "22NIKMNVNCBLBLKWHRNN",
                    "fullImage": "22NIKMNVNCBLBLKWHRNN",
                    "assetSeoUrl": "/p/nike-mens-zoomx-invincible-run-flyknit-2-running-shoes-22nikmnvncblblkwhrnn/22nikmnvncblblkwhrnn",
                    "dsgSeoUrl": "/p/nike-mens-zoomx-invincible-run-flyknit-2-running-shoes-22nikmnvncblblkwhrnn/22nikmnvncblblkwhrnn",
                    "dsgProductSortDate": "01/13/2022",
                    "attributes": "[{\"X_BRAND\":\"Nike\"},{\"PRIMARY_CATEGORY_DSG \":\"MensRunning-129888\"},{\"5495\":\"Men's\"},{\"5382\":\"Athletic & Sneakers\"},{\"4285\":\"Running\"},{\"X_BazaarVoice_ratings_DSG\":5.0},{\"X_BazaarVoice_ratings_ovr_DSG\":5.0},{\"X_BazaarVoice_count_DSG\":2},{\"X_BazaarVoice_count_ovr_DSG\":2},{\"X_BazaarVoice_q_count_DSG\":0},{\"X_BazaarVoice_a_count_DSG\":0},{\"2101\":\"Men's\"},{\"4448\":\"Men's\"},{\"2483\":\"Neutral\"},{\"5066\":\"Road\"},{\"5222\":\"More Cushioning, Less Flexibility\"},{\"3695\":\"Imported\"},{\"5733\":\"Yes\"},{\"4187\":\"Sneakers\"},{\"4005\":\"07062022\"},{\"4482\":\"Y\"},{\"3961\":\"True\"},{\"4298\":\"NewArrivals\"},{\"4474\":\"01/13/2022\"},{\"4490\":\"http://protips.dickssportinggoods.com/sports-and-activities/running/how-to-choose-running-shoes\"},{\"4723\":\"Y\"},{\"5426\":\"Wide, exaggerated shape at the forefoot offers a more stable ride|Higher foam heights provide an even softer feel than the original|Nike® ZoomX foam gives you bounce with every step\"}]",
                    "floatFacets": [
                        {
                            "identifier": "X_BazaarVoice_ratings_DSG",
                            "stringValue": "5.0",
                            "storeId": 10001,
                            "partnumber": "22NIKMNVNCBLBLKWHRNN",
                            "value": 5.0,
                            "name": "Customer Rating"
                        },
                        {
                            "identifier": "dickssportinggoodslistprice",
                            "stringValue": "179.99",
                            "startDateTime": 1657149757000,
                            "endDate": "2070-07-06T19:22:37.000EDT",
                            "maxQty": 99.0,
                            "endDateTime": 3171914557000,
                            "partnumber": "22NIKMNVNCBLBLKWHRNN",
                            "value": 179.99,
                            "startDate": "2022-07-06T19:22:37.000EDT",
                            "minQty": 1.0
                        },
                        {
                            "identifier": "dickssportinggoodsofferprice",
                            "stringValue": "179.99",
                            "startDateTime": 1657149716000,
                            "endDate": "2070-07-06T19:21:56.000EDT",
                            "maxQty": 99.0,
                            "endDateTime": 3171914516000,
                            "partnumber": "22NIKMNVNCBLBLKWHRNN",
                            "value": 179.99,
                            "startDate": "2022-07-06T19:21:56.000EDT",
                            "minQty": 1.0,
                            "name": "Price"
                        },
                        {
                            "identifier": "dickssportinggoodsmapprice",
                            "stringValue": "179.99",
                            "startDateTime": 1657149735000,
                            "endDate": "2070-07-06T19:22:15.000EDT",
                            "maxQty": 99.0,
                            "endDateTime": 3171914535000,
                            "partnumber": "22NIKMNVNCBLBLKWHRNN",
                            "value": 179.99,
                            "startDate": "2022-07-06T19:22:15.000EDT",
                            "minQty": 1.0
                        }
                    ],
                    "dsgPriceIndicators": {
                        "dealsPercentage": 0.0,
                        "mapPriceIndicator": 0,
                        "priceIndicator": 1
                    },
                    "ratingValue": 5.0,
                    "ratingCount": 2,
                    "quickViewEnabled": true,
                    "isPinned": false,
                    "isComingSoon": false
                }
            ]
        }
    }
}