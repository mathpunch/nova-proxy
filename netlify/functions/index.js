const serverless = require('serverless-http');
const { createServer } = require('http');
const { App } = require('../../src/index'); // Adjust this path if your main entry is elsewhere

// We initialize the app logic from the repo
const app = new App();

// Netlify Functions require a 'handler' exported via serverless-http
const handler = serverless(createServer((req, res) => {
  app.serve(req, res);
}));

module.exports.handler = async (event, context) => {
  // This ensures the function handles the request correctly
  return await handler(event, context);
};
