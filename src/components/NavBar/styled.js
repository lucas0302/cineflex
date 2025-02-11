import styled from "styled-components";

export const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    z-index: 10;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #E8833A;
        width: 100%; 
        justify-content: space-between; 
    }

    div {
        display: flex;
        align-items: center;
    }

    p {
        flex: 1;
        text-align: center;
        margin: 0;
    }

    svg {
        cursor: pointer;
        font-size: 30px;
    }
`;
