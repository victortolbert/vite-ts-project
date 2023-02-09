// exports.handler = async function () {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Hello, World!',
//     })
//   }
// }

import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World',
    }),
    headers: { 'x-hancock-header': 'Hancock Custom Header Value' },
    multiValueHeaders: {
      'multi-header-name-1': ['header-value-1', 'header-value-2'],
      'multi-header-name-2': ['header-value-3', 'header-value-4'],
    },
  };
};

export { handler };
