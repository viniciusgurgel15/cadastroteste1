declare var require: any;

export const environment = {
  production: false,
  apiUrl: require('@root/.env.json').apiUrl || 'http://localhost:4000'
};
