import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Poppins', sans-serif;
	}
	body{
		background-color: #222;
	}
	h1,h2,h3,h4,h5,h6,p,span,button,label{
		color: #fff;
	}
`;
export default GlobalStyle;
