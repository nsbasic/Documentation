// You will need an account with ChatGPT to get an API key
// https://platform.openai.com/api-keys
// Keep this a secret!

const apiKey = "my-api-key"; // Replace with your actual API key

async function callChatGPT(prompt) {
  const url = "https://api.openai.com/v1/chat/completions";
  // Prepare the request body
  const data = {
    model: "gpt-4o", // or 'gpt-4' 
    messages: [{ role: "user", content: prompt }],
    // Optionally you can specify other parameters like temperature
    // See the API docs here: 
    // https://platform.openai.com/docs/api-reference/chat/create
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("ChatGPT response:", result.choices[0].message.content);
    return result.choices[0].message.content;

  } catch (error) {
    NSB.MegBox("Error calling ChatGPT:", error);
  }
}

Button1.onclick = async function(){
  lblResults.innerHTML = "Processing..."
  result = await callChatGPT(inpQuestion.value);
  lblResults.innerText = result;
}
