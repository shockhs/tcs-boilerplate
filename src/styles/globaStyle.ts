import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --app-height: 100vh;
    }
    
    html,
    body {
        margin: 0;
        padding: 0;
    }
    
    &,
    &::before,
    &::after {
        box-sizing: border-box;
    }
    
    input,
    textarea {
        margin: 0;
        padding: 0;
    }
    
    body {
        overflow: hidden;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: unset; /* disable kinetic scroll */
    }
    
    html {
        height: -webkit-fill-available;
    }
    
    ul,
    ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        padding: 0;
    }
    
    input,
    textarea,
    select {
        font-family: inherit;
    }
    
    a,
    button {
        outline: none !important;
    }
`;

export { GlobalStyle };
