const data_dir = '../../data'

const model = require(data_dir + '/model.json')
const model_scheme = require(data_dir + '/model_scheme.json')

module.exports = {
    models_list: [
        {
            name: model_scheme.title,
            scheme: model
        }
    ]
}