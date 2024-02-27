import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    background-color: #496BBA;
    border-radius: 5px;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    padding: 8px 12px 8px 12px;
`

export const ButtonTitle = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    font-family: 'MontserratAlternates_700Bold';
    text-transform: uppercase;
`

export const GoogleButton = styled(Button)`
    background-color: #FAFAFA;
    border: 1px solid #496BBA;
    flex-direction: row;
    gap: 27px;
`
export const ButtonTitleGoogle = styled(ButtonTitle)`
    color: #496BBA;
`

export const ModalAppointmentButton = styled(Button)`
    width: 100%;
    margin-top: 30px;
`


export const SecondaryButton = styled.TouchableOpacity`
    margin-top: 30px;
`

export const SecondaryButtonText = styled.Text`
    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #344F8F;
    text-decoration: underline;
    text-decoration-color: #344F8F;
`