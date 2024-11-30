const logger = require('./utils/logger')

const resource_controller = require('./controllers/resource.controller')
const model_controller = require('./controllers/model.controller')
const gigachat_controller = require('./controllers/gigachat.controller')

const router = (app) => {
    app.get('/resources', logger_middleware, resource_controller.GET.list)
    app.get('/models', logger_middleware, model_controller.GET.list)
    app.get('/transform', logger_middleware, gigachat_controller.GET.transform)
    app.use(logger_middleware, not_found);
}

function logger_middleware(req, res, next) {
    logger.info(`${Date.now()} ${req?.method} ${req?.url}`)
    next()
}

function not_found(req, res) {
    res.status(404);
    res.json({ error: 'Not found' })
    logger.info({ error: 'Not found' }, 'Not found')
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