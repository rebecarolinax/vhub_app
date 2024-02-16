import styled from "styled-components";

export const Card = styled.View`
    width: 90%;
    height: 13%;
    flex-direction: row;
    border: 2px;
    border-color: #496BBA;
    flex-wrap: wrap;
    margin-top: 12px;
    border-radius: 5px;
    padding: 18px;
    align-items: center;
    justify-content: center;
`
export const CardDoc = styled(Card)`
    height: 15%;
`
export const DocImgCard = styled.Image`
    height: 80px;
    width: 80px;
`
export const CardColumn = styled.View`
    width: 50%;
    padding: 20px;
`
export const CardColumn2 = styled(CardColumn)`
    align-items: flex-end;
`
export const RateBox = styled.View`
    width: 42px;
    height: 20px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
`
export const RateIcon = styled.Image`
    width: 15px;
    height: 15px;
`
export const RateText = styled.Text`
    color: #F9A620;
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
`
export const AppointmentDates = styled.View`
    background-color: #E8FCFD;
    border-radius: 5px;
    width: 100px;
    height: 26px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const AppDatesIcon = styled.Image`
    width: 14px;
    height: 14px;
`
export const AppDatesText = styled.Text`
    color: #49B3BA;
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
`

export const CardPatient = styled.View`
    width: 90%;
    height: 13%;
    border: 2px;
    border-color: #496BBA;
    border-radius: 5px;
    margin-bottom: 20px;
`
export const CardPatientColumnImg = styled.View`
    width: 30%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
export const ImgCardPacient = styled.Image`
    width: 80%;
    height: 80%;
    border-radius: 5px;
`