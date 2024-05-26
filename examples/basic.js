const LoggerSwift = require("../lib/log-swift");

const loggerSwift = new LoggerSwift();

function checkLogger() {
  loggerSwift.generic("This is a generic log");
  loggerSwift.debug("This is a debug message");
  loggerSwift.info("This is an info message");
  loggerSwift.warn("This is a warning message");
  loggerSwift.error("This is an error message");
  loggerSwift.fatal("This is a fatal message");
}

checkLogger();