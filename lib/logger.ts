type LogContext = Record<string, unknown>

function createEntry(
  level: "info" | "warn" | "error",
  message: string,
  context: LogContext = {}
) {
  return {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...context,
  }
}

export const logger = {
  info(message: string, context?: LogContext) {
    console.info(createEntry("info", message, context))
  },

  warn(message: string, context?: LogContext) {
    console.warn(createEntry("warn", message, context))
  },

  error(message: string, context?: LogContext) {
    console.error(createEntry("error", message, context))
  },
}
