const Form = require('../entities/Form')

const data_dir = '../../data'

const anketa = require(data_dir + '/anketa.json')
const anketa_scheme = require(data_dir + '/anketa_scheme.json')

const edu = require(data_dir + '/edu.json')
const edu_scheme = require(data_dir + '/edu_scheme.json')

const fedresurs = require(data_dir + '/fedresurs.json')
const fedresurs_scheme = require(data_dir + '/fedresurs_scheme.json')

const okb = require(data_dir + '/okb.json')
const okb_scheme = require(data_dir + '/okb_scheme.json')

module.exports = {
    resources_list: [
        new Form(anketa_scheme.title, anketa, true),
        new Form(edu_scheme.title, edu, true),
        new Form(fedresurs_scheme.title, fedresurs, true),
        new Form(okb_scheme.title, okb, true),
    ]
}