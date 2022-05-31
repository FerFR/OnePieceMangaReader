import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img.current {
        display: block;
    }
`;
const Image = styled.img`
    display: none;
    object-fit: contain;
    cursor: pointer;
    width: 100%;
`;

const BackButton = styled.button`
    margin-right: auto;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: large;
    background-color: #da2d58;
    border: none;
    cursor: pointer;
    transition: 100ms;
    :hover {
        background-color: #ac3754;
    }
`;
const Reader = () => {
    const hideImage = (e) => {
        e.target.classList.remove('current');
    };

    const checkIfExistsNextImage = (e) => {
        return Boolean(e.target.nextElementSibling);
    };
    const showNextImage = (e) => {
        e.target.nextElementSibling.classList.add('current');
    };
    const showFirstImage = (e) => {
        document.getElementById('first').classList.add('current');
    };
    const scrollTop = () => {
        window.scroll(0, 0);
    };

    const handleClick = (e) => {
        hideImage(e);
        if (checkIfExistsNextImage(e)) {
            showNextImage(e);
        } else {
            alert('Capítulo chegou ao fim!');
            showFirstImage(e);
        }

        scrollTop();
    };

    const backImage = () => {
        const actualImage = document.getElementsByClassName('current')[0];
        if (!actualImage.previousElementSibling) {
            return;
        }
        actualImage.classList.remove('current');
        actualImage.previousElementSibling.classList.add('current');
    };
    return (
        <Container>
            <BackButton onClick={backImage}>Voltar</BackButton>
            <Content>
                <Image
                    id="first"
                    onClick={handleClick}
                    src="manga/01.jpg"
                    active={true}
                    className="current"
                />
                <Image onClick={handleClick} src="manga/02.webp" />
                <Image onClick={handleClick} src="manga/03.webp" />
                <Image onClick={handleClick} src="manga/04.webp" />
                <Image onClick={handleClick} src="manga/05.webp" />
                <Image onClick={handleClick} src="manga/06.webp" />
                <Image onClick={handleClick} src="manga/07.webp" />
                <Image onClick={handleClick} src="manga/08.webp" />
                <Image onClick={handleClick} src="manga/09.webp" />
                <Image onClick={handleClick} src="manga/10.webp" />
                <Image onClick={handleClick} src="manga/11.webp" />
                <Image onClick={handleClick} src="manga/12.webp" />
                <Image onClick={handleClick} src="manga/13.webp" />
                <Image onClick={handleClick} src="manga/14.webp" />
                <Image onClick={handleClick} src="manga/15.webp" />
            </Content>
        </Container>
    );
};

export default Reader;
