// Define colors for log levels using ANSI escape codes
const LogColors = {
    LOG: '\x1b[37m',   // White
    DEBUG: '\x1b[34m', // Blue
    INFO: '\x1b[32m',  // Green
    WARN: '\x1b[33m',  // Yellow
    ERROR: '\x1b[31m', // Red
    FATAL: '\x1b[35m'  // Magenta
};

module.exports = LogColors;