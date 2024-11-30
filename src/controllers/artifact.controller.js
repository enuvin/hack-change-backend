const logger = require("../utils/logger")

const GET = {
    all: async (req, res) => {
        try {
            res.status(200).json({ success: 1 });
        } catch (error) {
            logger.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
}

module.exports = {
    GET
}