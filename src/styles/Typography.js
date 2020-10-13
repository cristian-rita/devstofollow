import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    }
h1 {
    font-size:6rem;
}

h2 {
    font-size: 2.4rem;
    font-weight: 300;
}
`;

export default Typography;
