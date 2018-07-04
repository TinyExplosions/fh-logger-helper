fh-logger-helper
========================

This module provides some sensible defaults for the Winston logger
If will set the level to 'error' by default, but this can be changed
by setting `process.env.DEBUG_LEVEL` to a valid logging level, or with
the `Logger.setLoggerLevel` method.

Valid log levels are: 'sys', 'error', 'warn', 'info', 'silly'

Use `require('fh-logger-helper')` to use this module. 

Example:

```js
var Logger = require('fh-logger-helper');

Logger.sys("I'm an sys level log");
Logger.log("sys", "I'm also a sys level log");

Logger.error("I'm an error level log");
Logger.log("error", "I'm also an error level log");

Logger.warn("I'm an warn level log");
Logger.log("warn", "I'm also an warn level log");

Logger.info("I'm an info level log");
Logger.log("info", "I'm also an info level log");

Logger.silly("I'm an silly level log");
Logger.log("silly", "I'm also an silly level log");

```

The following methods are provided:

## Logger.setLoggerLevel(level [, callback])

Change the current log level and immediately apply it, then fire a callback, if
supplied.

Example:

```js
Logger.setLoggerLevel('silly');

Logger.setLoggerLevel('info', function levelChanged(){
  //log level has been changed
});
```

## Logger.killLoggingForTests()

Remove the logger to avoid it polluting the terminal while you run automated tests etc

Example:

```js
Logger.killLoggingForTests();
```