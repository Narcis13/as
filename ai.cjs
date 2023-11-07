//console.log('AI')

/*import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-MMPWRNetj6p7OliDabSjZye3",
    apiKey: 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,
});*/
const OpenAI = require("openai")



const openai = new OpenAI({
    apiKey: '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',
})

async function main(){

    
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "Tell me a really nice joke please!" }],
        model: "gpt-4-1106-preview",
      });
    
      console.log(completion.choices[0].message.content);
  
}


main()
