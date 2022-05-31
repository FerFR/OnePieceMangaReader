import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Image = styled.img`
    display: ${(props) => (props.active ? 'block' : 'none')};
    object-fit: contain;
    cursor: pointer;
    width: 100%;
`;

const Reader = () => {
    const hideImage = (e) => {
        e.target.style.display = 'none';
    };

    const checkIfExistsNextImage = (e) => {
        return Boolean(e.target.nextElementSibling);
    };
    const showNextImage = (e) => {
        e.target.nextElementSibling.style.display = 'block';
    };
    const showFirstImage = (e) => {
        document.getElementById('first').style.display = 'block';
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
    return (
        <Container>
            <Image
                id="first"
                onClick={handleClick}
                src="manga/01.jpg"
                active={true}
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
        </Container>
    );
};

export default Reader;
