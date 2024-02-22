import styled from "styled-components";

export const ScheduleContainer = styled.View`
    background-color: #E8FCFD;
    flex-direction: row;
    width: 70%;
    padding: 4px; 
    border-radius: 5px;
    justify-content: center;
    gap: 6px;
    margin-top: 5px;
    align-items: center ;
`;

export const ScheduleTime = styled.Text`
    color: #49B3BA;
    font-size: 16px;
    font-family: 'Quicksand_600SemiBold';
    text-align: center;
    align-items: center;
    align-self: flex-start;
`
export const RealizedTimeContainer = styled(ScheduleContainer)`
    background-color: #F1F0F5;
    align-items: center;
`

export const RealizedScheduleTime = styled(ScheduleTime)`
    color: #4E4B59;
    background-color: #F1F0F5;
`