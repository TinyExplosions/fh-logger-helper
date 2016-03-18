fh-logger-helper
========================

This module provides some sensible defaults for the Winston logger
If will set the level to 'error' by default, but this can be changed
by setting `process.env.DEBUG_LEVEL` to a valid logging level, or with
the `Logger.setLoggerLevel` method.

Valid log levels are: 'error', 'warn', 'info', 'silly'

Use `require('fh-logger-helper')` to use this module.  The following methods are provided:

## Logger.setLoggerLevel(level[, callback])

Change the current log level and immediately apply it

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

A simple request timer middleware for express apps that logs request time to the
Red Hat Mobile Application Platform, as well as adding an optional `x-fh-timer` header to
each response.