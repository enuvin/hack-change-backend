const gigachat = require('../giga')

const POST = {
    transform: async (req, res) => {
        const data = req?.data
        const scheme = req?.scheme
        await gigachat.createToken()
        const gigachat_answer = await gigachat.getMessage(
            // `Преобразуй данные ${data} по схеме ${scheme}`
            `Привет. Какая погода в якутске`
        )
        res.status(200)
        res.json({ result: gigachat_answer })
    },
}

module.exports = {
    POST
}