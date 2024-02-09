import styled, { css } from "styled-components";

export const Button = styled.TouchableOpacity`
    background-color: #496BBA;
    width: 90%;
    height: 44px;
    align-items: center;
    border-radius: 5px;
    margin-top: 30px;
    padding: 10px;
`

export const ButtonUser = styled(Button)`
    margin-bottom: 30px;
`

export const ButtonEdit = styled(Button)`
    margin-bottom: 30px;
    margin-top: 0px;
    
    ${props => !props.editable && css`
    background-color: #ACABB7;`}
`

export const ButtonExit = styled(Button)`
   width: 50%;
   margin-bottom: 30px;
   margin-top: 0px;
   background-color: #ACABB7;

   
`


export const ButtonGoogle = styled.TouchableOpacity`
    background-color: #FAFAFA;
    border: 1px solid #496BBA;
    width: 90%;
    border-radius: 5px;
    margin-top: 20px;
    height: 44px;
    align-items: center;
    padding: 10px;
    flex-direction: row; 
    justify-content: center;
    gap: 20px;
`