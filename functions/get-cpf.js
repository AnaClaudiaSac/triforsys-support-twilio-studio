const axios = require('axios');

exports.handler = async function(context, event, callback) {
  const apiUrl = `https://triforsys-support-api-jgch4.ondigitalocean.app/api/employees?populate=companies&filters[cpf][$eq]=${event.cpf.trim()}&filters[companies][id][$eq]=${event.company_id.trim()}`;

  try {
    const response = await axios.get(apiUrl);
 
    return callback(null, response.data);
  } catch (error) {

    return callback({
      text: 'Ops!... Houve uma falha ao validar o CPF, tente novamente mais tarde.',
    });
  }
};