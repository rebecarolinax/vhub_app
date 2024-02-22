import styled from "styled-components";

export const ModalView = styled.View`
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    align-self: center;
    justify-content: center;
`

export const ModalContainer = styled.View`
    background-color: white;
    height: 310px;
    width: 334px;

    border-radius: 10px;
    padding: 10px;

    justify-content: space-evenly;
    align-items: center;
    align-self: center;
`
export const ModalMedicalRecordView = styled(ModalView)`
    margin-top: 0;
`

export const ModalMedicalRecordContainer = styled(ModalContainer)`
    height: 436px;
    width: 334px;
    padding: 20px;
`

export const ModalScheduleView = styled(ModalView)`
    justify-content: flex-end;
`

export const ModalScheduleContainer = styled(ModalMedicalRecordContainer)`
    width: 360px;
    height: 50%;
    border-radius: 10px 10px 0px 0px;
    justify-content: space-evenly;
`

export const ModalScheduleAppointmentFormContainer = styled.View`
    width: 100%;
`
