const data_dir = '../../data'

const anketa = require(data_dir + '/anketa.json')
const anketa_scheme = require(data_dir + '/anketa_scheme.json')

const edu = require(data_dir + '/edu.json')
const edu_scheme = require(data_dir + '/edu_scheme.json')

const fedresurs = require(data_dir + '/fedresurs.json')
const fedresurs_scheme = require(data_dir + '/fedresurs_scheme.json')

const okb = require(data_dir + '/okb.json')
const okb_scheme = require(data_dir + '/okb_scheme.json')

const GET = {
    list: async (req, res) => {
        const resources_list = [
            {
                name: anketa_scheme.title,
                data: anketa
            },
            {
                name: edu_scheme.title,
                data: edu
            },
            {
                name: fedresurs_scheme.title,
                data: fedresurs
            },
            {
                name: okb_scheme.title,
                data: okb
            },
        ]
        res.json(resources_list)
    },
}

module.exports = {
    GET
}