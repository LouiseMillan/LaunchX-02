const logger = require('./logger');

// Ya que puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an informational message');

/*
    También puedes instanciar uno nuevo de esta manera:
    const customLogger = new logger.constructor('CUSTOM');
    customLogger.log('This is an informational message');
 */

const customLogger = new logger.constructor('CUSTOM');
customLogger.log('This is an informational message');