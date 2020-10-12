import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
        --blue: #202040;
        --pink: #ff6363;
        --yellow: #ffbd69;
        --grey: #f4f4f4;
    }
    html {
        font-size:10px;
    }
    body {
        font-size:2rem;
        background-color: var(--blue);
        color: var(--grey);
    }

`;

export default GlobalStyles;
