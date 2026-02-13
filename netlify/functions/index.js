import awsLambdaFastify from '@fastify/aws-lambda';
import { App } from '../../src/server.js'; // Ensure your server.js exports the Fastify instance

// We import the app logic. 
// Note: You may need to modify your src/server.js to export 'app' 
// instead of just calling app.listen()
const proxy = awsLambdaFastify(App);

export const handler = async (event, context) => {
  return proxy(event, context);
};
