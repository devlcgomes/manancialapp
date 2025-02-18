import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #8B5CF6;
    --primary-dark: #7C3AED;
    --background: #F3F4F6;
    --text: #374151;
    --text-secondary: #6B7280;
    --border: #E5E7EB;
    --white: #ffffff;
    --box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }

  body {
    background-color: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`; 