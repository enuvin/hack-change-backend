const logger = require('./utils/logger')

const artifact_controller = require('./controllers/artifact.controller')
const resource_controller = require('./controllers/resource.controller')

const router = (app) => {
    app.get('/resources', logger_middleware, resource_controller.GET.list)
}

function logger_middleware(req, res, next) {
    logger.info(`${Date.now()} ${req?.method} ${req?.url}`)
    next()
}

module.exports = { router }

/*
1. Получение списков источников
/resources GET method
response: 
[{name: string, data: any}]

2. Получение списка моделей
/models GET method
response:
[{name: string, scheme: SCHEME}]

3. Преобразование данных с помощью AI
/transform POST method
payload:
{data: any, scheme: SCHEME}
response:
{status: 200, result: data}

4. Подтверждение преобразования данных
/approve POST method
payload:
{data: any, scheme: SCHEME}
response:
{status: 200}
*/