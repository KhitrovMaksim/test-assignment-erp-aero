require('dotenv').config();
const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
const logger = require('./logger');

const { PORT } = process.env;
const app = express();
const start = async () => {
  try {
    app.listen(PORT, () => logger.info(`Server started on port: ${PORT}`));
  } catch (error) {
    logger.error(error);
  }
};

start().catch((error) => logger.error(error));
