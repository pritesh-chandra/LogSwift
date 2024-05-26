const LogSwift = require("../lib/LogSwift");

const log = new LogSwift();

function checkLogger() {
  log.generic("This is a generic log");
  log.debug("This is a debug message");
  log.info("This is an info message");
  log.warn("This is a warning message");
  log.error("This is an error message");
  log.fatal("This is a fatal message");
}

checkLogger();