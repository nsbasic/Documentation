// Sample inspired by this doc:
https://ai.google.dev/tutorials/rest_quickstart

// cURL command converted to fetch format using this utility
https://www.scrapingbee.com/curl-converter/javascript-fetch/

// Get API key here: https://ai.google.dev/tutorials/setup
const GOOGLE_API = 'AIzaSyDRbS-C9288T-nCKBDoq1SHGViwDqxmslU';

butAsk.onclick = async function () {
  labAnswer.text = "Retrieving...";
  res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GOOGLE_API}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: '{"contents": [{"parts":[{"text": "Write a story about a magic backpack."}]}]}',
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: "Write a story about a magic backpack.",
              },
            ],
          },
        ],
      }),
    }
  );

  data = await res.json();
  console.log(data);
  labAnswer.text = data.candidates[0].content.parts[0].text;
};
