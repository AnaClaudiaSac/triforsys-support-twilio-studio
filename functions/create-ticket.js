const axios = require('axios');
const { customAlphabet } = require('nanoid');

exports.handler = async function(context, event, callback) {

  const nanoid = customAlphabet('1234567890', 6)

  let ticket = {
    data: {
      code: nanoid(),
      description: event.description,
      images: event.images ? JSON.parse(event.images) : JSON.stringify({}),
      employee: {
        connect: [event.employee_id]       
      }
    }
  }

  const apiUrl = 'https://triforsys-support-api-jgch4.ondigitalocean.app/api/tickets';

  try {
    const response = await axios.post(apiUrl, ticket);

    return callback(null, {
      text: ticket.data.code,
    });
  } catch (error) {

    if (error.response && error.response.status === 404) {
      return callback(null, {
        text: `Desculpe, não foi possível criar o chamado, tente novamente mais tarde!`,
      });
    }

    return callback(error);
  }
};