import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --app-height: 100vh;
        --primary-rest--color: #ffdd2d;
        --primary-hover--color: #fcc521;
        --link-rest--color: #336fee;
        --link-hover--color: #1f50ba;
        --app-font--color: rgba(0,0,0,.8);
        --color-secondary: #ECF1F7;
        --color-secondary-hover: #E4EBF3;
        --color-secondary-active: #DDE4ED;
        --color-black: #000000;
        --color-error: #f52222;
        --color-error-button: #a00707;
        --color-shadow: rgba(0, 0, 0, 0.12);
    }
    
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }
    
    button {
        cursor: pointer;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    .root-modal {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        text-decoration:none;
        color: var(--link-rest--color);
        transition: color 0.05s linear;

        &:hover {
            color: var(--link-hover--color);
        }
    }

    a.active {
        color: var(--link-hover--color);
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
