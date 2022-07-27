export class Recommendations {
    constructor(axios) {
      this.$axios = axios;
      this.othersLikeURL = "/api/v1/recommendations/predict/others-you-may-like";
      this.productDetailsURL = "/v3/findByEcode/15108";

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

        console.log(idList);

        let responses = []
        for (let i = 0; i < 5; i++) {
            let productId = idList.results[i].id 
            
            let responseData = await this.$axios.$get(`${this.productDetailsURL}?id=${productId}&inventory=true&active=true&clearance=false&attributes=true&skus=true&category=false`)

            console.log(responseData)

            // responseData[0].skus.forEach(element => {
            //     console.log(element);
            //     responses.push({
            //         name: element.name
            //     })
            // });

            responses.push(responseData[0].skus);  
        }

        console.log(responses);
        return responses
    }
}