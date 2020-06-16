const CURRENT_LEVEL = 'DEBUG';

enum LEVELS {
    ERROR,
    WARN,
    DEBUG,
}

enum METHODS {
    ERROR = 'error',
    WARN = 'warn',
    DEBUG = 'debug',
}

const print = (level: keyof typeof LEVELS, method: METHODS, args: any) => {
  if (LEVELS[CURRENT_LEVEL] < LEVELS[level]) {
    return;
  }

  if (!args || args.length === 0 || !args[0]) {
    return;
  }

  const now = new Date();
  const formatted = `${now.toISOString()}:`;
  // eslint-disable-next-line no-console
  console[method](formatted, ...args);
};

const log = {
  debug(...args: any) {
    print('DEBUG', METHODS.DEBUG, args);
  },

  warn(...args: any) {
    print('WARN', METHODS.WARN, args);
  },

  error(...args: any) {
    print('ERROR', METHODS.ERROR, args);
  },
};

export default log;
