const model_repo = require('../repo/model.repo')

const GET = {
    list: async (req, res) => {
        res.json(model_repo.models_list)
    },
}

module.exports = {
    GET
}