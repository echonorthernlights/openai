const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
    const { prompt, size } = req.body;

    const sizePx = size === "large" ? "1024x1024" : size === "medium" ? "512x512" : "256x256";
    console.log(prompt, sizePx)
    try {
        const response = await openai.createImage({
            prompt,
            size: sizePx,
            n: 1
        })
        const link = response.data.data[0].url;
        //console.log(response.data.data[0].url)
        return res.status(200).json(link)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { generateImage }