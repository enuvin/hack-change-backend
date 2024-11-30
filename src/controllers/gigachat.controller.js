const model_repo = require('../repo/model.repo')

const GET = {
    transform: async (req, res) => {
        run_python()
        res.json({ message: "Python script success runned" })
    },
}

module.exports = {
    GET
}

function run_python() {
    // test
    const { spawn } = require('child_process');

    // Запускаем Python скрипт
    const pythonProcess = spawn('python', ['src/giga/giga.py']);

    // Обработка вывода
    pythonProcess.stdout.on('data', (data) => {
        console.log(`Output from Python: ${data}`);
    });

    // Обработка ошибок
    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python: ${data}`);
    });

    // Обработка завершения процесса
    pythonProcess.on('close', (code) => {
        console.log(`Python script exited with code ${code}`);
    });
}