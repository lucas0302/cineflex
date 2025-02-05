import styled from "styled-components";

export const SeatItem = styled.div`
border: 2px solid ${(props) => {
        if (props.status === "selected") {
            return "green";
        } else if (props.status === "available") {
            return "#808F9D";
        } else if (props.status === "unavailable") {
            return "#F7C52B";
        }
    }};
    background-color: ${(props) => {
        if (props.status === "Selected") {
            return "green";
        } else if (props.status === "available") {
            return "#C3CFD9";
        } else if (props.status === "unavailable") {
            return "#FBE192";
        }
    }};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`