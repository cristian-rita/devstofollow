import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
        --blue: #202040;
        --pink: #e94560;
        --yellow: #f0a500;
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

    a:visited {
        color: var(--grey);
    }
    a {text-decoration:none;}
`;

export default GlobalStyles;
