# LogSwift

[LogSwift](https://pritesh-chandra.github.io/log-swift-webapp/) is a simple and customizable logger for Node.js applications that logs messages to the console with timestamp, process ID, and location information (file, line number, and function name). It supports different log levels and colorized output.

## Features

- **Basic Logging Levels**: Log, Info, Debug, Warn, Error, Fatal.
- **Color-Coded Output**: Enhance readability with color-coded log levels.
- **Readability**: Logs messages with timestamp, process ID, file name, line number, and function name.

## Installation
To install LogSwift, you need to have Node.js and npm installed. You can then install it via npm or yarn:
Using NPM:
```
$ npm install log-swift
```

Using YARN:
```
$ yarn add log-swift
```

## Usage
First, require the `LogSwift` module in your application:
```js
const LogSwift = require('log-swift');
const logger = new LogSwift();
```

You can then use the logger to log messages at different levels:

```js
logger.generic('This is a generic log message.');
logger.debug('This is a debug message.');
logger.info('This is an info message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');
logger.fatal('This is a fatal error message.');
```

## Example
Here's a simple example demonstrating the usage of LogSwift:

```js
const LogSwift = require('log-swift');
const logger = new LogSwift();

logger.info('Application has started.');
```

Output:
```Shell
[05/26/2024, 12:47:00 GMT+5:30] [PID:28520] [INFO]
Message  : Application has started.
Location : example/logger-example.js: 4 (someFunctionName)
```

## Configuration
LogSwift relies on two additional modules for log levels and log colors:

- **`LogLevels`**: Define the log levels.
- **`LogColors`**: Define the colors for each log level.

## License
Licensed under [MIT](./LICENSE).
