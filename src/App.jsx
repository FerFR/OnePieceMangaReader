import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Reader from './components/Reader';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 0;
`;
const Logo = styled.img`
    width: 400px;
    @media (max-width: 450px) {
        width: 250px;
    }
`;
const Text = styled.h1`
    margin-bottom: 50px;
    @media (max-width: 450px) {
        font-size: 25px;
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Logo src="logo.png" />
                <Text>One Piece - Capítulo 1000</Text>
                <Reader />
            </Container>
        </>
    );
};

export default App;
