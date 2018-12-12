import {
  APIGatewayProxyHandler,
  Context,
  APIGatewayProxyResult,
  APIGatewayProxyEvent
} from 'aws-lambda';

const hello: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Hello World!',
    input: event,
  }),
})

export default hello;