import { Modal } from "react-native"
import { ButtonTitle, Title } from "../Title/Style"

import { CancelText } from "../Link/Style"
import { ModalButton, ModalContent, ModalText, ModalTextBig, ModalTextMini, PatientModal } from "../NotificationModal/Style"

export const SchedulingModal = ({
    visible,
    setShowModalScheduling,
    ...rest
}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
        <PatientModal   >
            <ModalContent>

                <Title>Agendar consulta</Title>
                <ModalText>Consulte os dados selecionados para a sua consulta</ModalText>
                

                <ModalTextBig style={{ marginTop: 30 }}>Data da consulta</ModalTextBig>
                <ModalTextMini>1 de Novembro de 2023</ModalTextMini>

                <ModalTextBig>Médico(a) da consulta</ModalTextBig>
                <ModalTextMini>Dra Alessandra</ModalTextMini>
                <ModalTextMini>Demartologa, Esteticista</ModalTextMini>

                <ModalTextBig>Local da consulta</ModalTextBig>
                <ModalTextMini>São Paulo, SP</ModalTextMini>


                <ModalTextBig>Tipo da consulta</ModalTextBig>
                <ModalTextMini>Rotina</ModalTextMini>

                <ModalButton>
                    <ButtonTitle>Confirmar</ButtonTitle>
                </ModalButton>

                <CancelText onPress={() => setShowModalScheduling(false)}>Cancelar</CancelText>
            </ModalContent>
        </PatientModal>
    </Modal> 
    )
}