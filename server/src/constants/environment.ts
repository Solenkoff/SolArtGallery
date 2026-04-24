import { Environment, EnvironmentConfigs } from '../types/Constants';

const configs: EnvironmentConfigs = {
  development: {
    DB_CONNECTION_STRING: 'mongodb://localhost:27017/sol-art-gallery',
    SECRET_TOKEN: 'Briaaah',
    HASH_ROUNDS: 8,
  },
  production: {
    DB_CONNECTION_STRING:
      process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/sol-art-gallery',
    SECRET_TOKEN: process.env.SECRET_TOKEN || 'Briaaaah',
    HASH_ROUNDS: Number(process.env.HASH_ROUNDS) || 8,
  },
};
const environment: Environment =
  (process.env.NODE_ENV as Environment) || 'development';

export default configs[environment];
