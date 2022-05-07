// Llamas este módulo que modifica el objeto instanciado
require('./patcher');

// Al llamar el módulo en logger.js te dará el objeto modificado
const logger = require('./logger');

logger.customMessage();
