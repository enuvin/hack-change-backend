const resource_repo = require('../repo/resource.repo')

const GET = {
    list: async (req, res) => {
        res.json(resource_repo.resources_list)
    },
}

module.exports = {
    GET
}