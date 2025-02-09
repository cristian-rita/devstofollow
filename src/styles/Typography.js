import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    }
h1 {
    font-size: 6.2rem;
    @media(max-width:600px) {
        font-size:4.2rem;
    }
}

h2 {
    font-size: 2.4rem;
    @media(max-width:600px) {
        font-size:1.8rem;
    }
    font-weight: 300;
}
a:visited {
    color: var(--grey);
}
a {
    color: var(--grey);
}

a:hover {
    color: var(--pink);
    transition: color .3s;
}
`;

export default Typography;
