const chaveAPI = require('./chave.js');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: chaveAPI,
});
const openai = new OpenAIApi(configuration);

async function main() {
  let response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "por que o ceu e azul? ?",
    temperature: 0.5,
    max_tokens: 300,
  });
  console.log(response);
}
main();