const path = require('path');
const { getCurrentTimestamp } = require('../utils/format');
const LogLevel = require('./LogLevels');
const LogColors = require('./LogColors');

// Reset color
const ResetColor = '\x1b[0m';

// Function to get the call stack and extract file, line, and function name
function getStackTrace() {
    const error = new Error();
    const stack = error.stack.split('\n');
    const callerStack = stack.find((line, index) => index > 2 && !line.includes(__filename));
    const stackParts = callerStack.match(/at (.+?) \((.+?):(\d+):(\d+)\)/) || callerStack.match(/at (.+?):(\d+):(\d+)/);
    if (stackParts) {
        const fullPath = stackParts[2];
        const fileName = path.basename(fullPath);
        const dirName = path.basename(path.dirname(fullPath));
        return {
            functionName: stackParts[1] || 'anonymous',
            fileName: `${dirName}/${fileName}`,
            lineNumber: stackParts[3]
        };
    }
    return {};
}

// Logger class
class LogSwift {
    log(level, message) {
        const timestamp = getCurrentTimestamp();
        const pid = process.pid;
        const { functionName, fileName, lineNumber } = getStackTrace();
        const formattedMessage = `
[${timestamp}] [PID:${pid}] [${level}]
Message  : ${message}
Location : ${fileName}:${lineNumber} (${functionName})
        `;
        const colorizedMessage = `${LogColors[level]}${formattedMessage}${ResetColor}`;

        // Log to console with color
        console.log(colorizedMessage);
    }

    generic(message) {
        this.log(LogLevel.LOG, message);
    }

    debug(message) {
        this.log(LogLevel.DEBUG, message);
    }

    info(message) {
        this.log(LogLevel.INFO, message);
    }

    warn(message) {
        this.log(LogLevel.WARN, message);
    }

    error(message) {
        this.log(LogLevel.ERROR, message);
    }

    fatal(message) {
        this.log(LogLevel.FATAL, message);
    }
}

module.exports = LogSwift;