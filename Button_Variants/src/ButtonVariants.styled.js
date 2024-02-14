import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
    background-color : ${(props)=>(props.filled ? props.bg : "#fff" )};
    color : ${(props)=>(props.filled ? props.color : "#000" )};
    border : ${(props)=>(props.filled ? "none" : "1px solid #000" )};
    width : 17%;
    height : 30%;
    text-transform : uppercase;
    font-size : 25px;
    font-weight : 600;
`;
