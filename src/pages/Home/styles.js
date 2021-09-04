import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Container = styled.aside`
    background-color: ${props => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`

export const Search = styled.section`
     display: flex;
     flex-direction: column;
     justify-content: center;
     background-color: #ffffff;
     padding: 26px;
`

export const Image = styled.img`
    padding: 30px;
`

export const Map = styled.div`
    background-color: red;
    width: 500px;
`

export const CarrouselTitle = styled.h1`
    font-family: ${props => props.theme.fonts.fontFamily};
    color: ${props => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 20px 10px 0 0;
`