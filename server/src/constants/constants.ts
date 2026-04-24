// *  PORT
const PORT = process.env.PORT || 3001;

// *  Authentication Header
export const authHeader = 'x-authorization';

// *  App Bootstrap 
export const bootstrapAppConst = {
  PORT,
  DB_SUCCESSFULLY: '✅ DB connected successfully...',
  APP_LISTEN: `🚀 Server is listening on http://localhost:${PORT}...`,
  DB_ERROR: (err: Error) => `❌ DB can NOT connect... : ${err}`,
  BOOTSTRAP_ERROR: '❌ Error during bootstrap:',
};

// *  Mongoose Schema
export const mongooseConst = {
  MIN_USERNAME_LENGTH: 3,
  MIN_EMAIL_LENGTH: 6,
  MIN_PASSWORD_LENGTH: 6,
  EXPIRES_AFTER_SECONDS: 365 * 24 * 60 * 60, // 1 year
};
