export class Recommendations {
    constructor(axios) {
      this.$axios = axios;
      this.othersLikeURL = "http://localhost:8000/app/v1/recommendations/predict/others-you-may-like";
      this.productDetailsURL = 'https://prod-catalog-productdetails-api.iso.ap01.pcf.dcsg.com/v3/findByEcode/15108'

    }

    get = async (productId) => {
        let idList = await this.$axios.$post(this.othersLikeURL, {
            "userEvent": {
                "productDetails": [
                    {
                        "product": {
                            "id": productId
                        },
                        "quantity": 1
                    }
                ]
            }
        })

        responses = []
        for (let i = 0; i < 5; i++) {
            let productId = idList.results[i].id 
            responses.push(await this.$axios.$get(`${this.productDetailsURL}?id=${productId}&inventory=true&active=true&clearance=false&attributes=true&skus=true&category=false`))
        }

        console.log(responses);
    }
}