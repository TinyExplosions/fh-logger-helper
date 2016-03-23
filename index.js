// default level to `error` so we don't inadvertently flood the logs if we dont specify
var winston = require('winston'),
    Logger = new winston.Logger(),
    defaultLogLevel = 'error';

// set the log level to whatever is specified in the Env Variable `DEBUG_LEVEL`
if (process.env.DEBUG_LEVEL && checkLogLevel(process.env.DEBUG_LEVEL)) {
    defaultLogLevel = process.env.DEBUG_LEVEL;
}

// we may want to change log level on the fly, so provide a way to do that
Logger.setLoggerLevel = function setLogLevel(level, callback) {
    callback = callback || function() {};
    if (!checkLogLevel(level)) {
        return callback({
            status: 'not ok',
            msg: level + ' is not a valid logging level'
        }, null);
    }
    Logger.remove(winston.transports.Console);

    // set console logger support to new level
    Logger.add(winston.transports.Console, {
        timestamp: true,
        colorize: true,
        level: level
    });

    Logger.info('Log level now set to ::', level);
    return callback(null, {
        status: 'ok',
        msg: 'Updated Log Level: ' + level
    });
}

// when running tests, we don't need the Logger, so let us be able to kill it
Logger.killLoggingForTests = function killLogging() {
    Logger.remove(winston.transports.Console);
}

function checkLogLevel(logLevel) {
    return (['info', 'warn', 'error', 'silly'].indexOf(logLevel) !== -1);
}

// add console logger support
Logger.add(winston.transports.Console, {
    timestamp: true,
    colorize: true,
    level: defaultLogLevel
});
Logger.info('Log level:', defaultLogLevel);

// export what's useful
module.exports = Logger;