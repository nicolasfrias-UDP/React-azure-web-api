import React from "react"


const VISION_KEY = process.env.VISION_KEY;
const VISION_ENDPOINT = process.env.VISION_ENDPOINT;

function analyzeImageUrl(UrlImage) {

    const body = {
        url: UrlImage
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': VISION_KEY
        },
        body: JSON.stringify(body)
    }

    return fetch(VISION_ENDPOINT + 'computervision/imageanalysis:analyze?features=caption,read&model-version=latest&language=en&api-version=2023-02-01-preview', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(err => {
            console.log(err)
            return err
        })

}

export default analyzeImageUrl;