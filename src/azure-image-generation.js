import { OpenAI } from "openai";


const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

async function generateImage(text_prompt) {
    const response = await openai.images.generate({
        prompt: text_prompt,
        n: 1,
        size: "512x512"

    });
    var image_url = response.data;
    //console.log(image_url)
    return image_url;
}

export default generateImage;