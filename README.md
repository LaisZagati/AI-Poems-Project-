# AI Joke Generator

A simple web app that generates short, funny, and creative jokes about any topic using the SheCodes AI API. Jokes are displayed with a typewriter effect for a dynamic experience.

## Languages Used

- HTML
- CSS
- JavaScript

## How it Works

1. User enters a topic into the input field.
2. Clicks **Submit**.
3. The app sends a request to the **SheCodes AI API** with the topic.
4. The API returns a short, funny joke.
5. The joke is displayed with a typewriter animation on the page.

## Features

- Generates unique jokes based on the user’s input.
- Displays jokes with typewriter animation.
- Shows a "Generating..." message while waiting for the response.
- Clears the input field after submission.
- Responsive and simple user interface.

## API

This app uses the **SheCodes AI API** to generate jokes.  

- API Endpoint: `https://api.shecodes.io/ai/v1/generate`  
- You need an **API key** from SheCodes.  
- The API is called using **Axios** in `script.js`.  
- Example usage in JavaScript:

```javascript
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(displayPoem);
