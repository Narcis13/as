
const OpenAI = require("openai")



const openai = new OpenAI({
    apiKey: '',
})

async function main(){

    
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "Tell me a really nice joke please!" }],
        model: "gpt-4-1106-preview",
      });
    
      console.log(completion.choices[0].message.content);
  
}


main()
