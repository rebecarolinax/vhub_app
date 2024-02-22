import { ModalContainer, ModalScheduleView, ModalMedicalRecordContainer, ModalMedicalRecordView, ModalView, ModalScheduleContainer, ModalScheduleAppointmentFormContainer } from "./style";
import { UserProfilePhotoModal } from "../UserProfilePhoto/style";
import { AppointmentLevelButton } from "../StatusButton/index";
import { Button, ButtonTitle, ModalAppointmentButton, ModalButton, SecondaryButton, SecondaryButtonText } from "../Button/style";
import { Title, SubTitle, SubTitleContainerModal } from "../Title/style";
import { Modal } from "react-native";
import { LabelText } from "../Label/style";
import { useState } from "react";
import { AppointmentLevelButtonContainer } from "../StatusButton/style";
import { ScheduleAppointmentContainer, ScheduleAppointmentInput } from "../ModalAppointmentInput/style";


export const ModalAppointment = ({ animation, transparent, visible, onPress, img, name, age, email, situation }) => {
    return (
        <Modal
            animationType={animation}
            transparent={transparent}
            visible={visible}
        >
            {situation == 'pendente' ? (
                <ModalView>
                    <ModalContainer>
                        <Title>Cancelar Consulta</Title>
                        <SubTitleContainerModal>
                            <SubTitle>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</SubTitle>
                        </SubTitleContainerModal>
                        <Button>
                            <ButtonTitle>Confirmar</ButtonTitle>
                        </Button>
                        <SecondaryButton onPress={onPress}>
                            <SecondaryButtonText>Cancelar</SecondaryButtonText>
                        </SecondaryButton>
                    </ModalContainer>

                </ModalView>
            ) : (
                <ModalMedicalRecordView>
                    <ModalMedicalRecordContainer>
                        <UserProfilePhotoModal source={img} />
                        <Title>{name}</Title>
                        <SubTitle>{age}   <SubTitle>{email}</SubTitle></SubTitle>
                        <Button>
                            <ButtonTitle>Inserir Prontuário</ButtonTitle>
                        </Button>
                        <SecondaryButton onPress={onPress}>
                            <SecondaryButtonText>Cancelar</SecondaryButtonText>
                        </SecondaryButton>
                    </ModalMedicalRecordContainer>
                </ModalMedicalRecordView>
            )}
        </Modal>
    )
}

export const ModalScheduleAppointment = ({ animation, transparent, visible, onPress }) => {
    const [statusAppoinment, setStatusAppoinment] = useState("");
    return (
        <Modal
            animationType={animation}
            transparent={transparent}
            visible={visible}
        >
            <ModalScheduleView>
                <ModalScheduleContainer>
                    <Title>Agendar consulta</Title>

                    <ModalScheduleAppointmentFormContainer>

                        <ScheduleAppointmentContainer>
                            <LabelText>Qual o nível da consulta</LabelText>
                            <AppointmentLevelButtonContainer>
                                <AppointmentLevelButton
                                    textButton={'Rotina'}
                                    clickButton={statusAppoinment === "Rotina"}
                                    onPress={() => setStatusAppoinment("Rotina")}
                                />

                                <AppointmentLevelButton
                                    textButton={'Exame'}
                                    clickButton={statusAppoinment === "Exame"}
                                    onPress={() => setStatusAppoinment("Exame")}
                                />

                                <AppointmentLevelButton
                                    textButton={'Urgência'}
                                    clickButton={statusAppoinment === "Urgencia"}
                                    onPress={() => setStatusAppoinment("Urgencia")}
                                />
                            </AppointmentLevelButtonContainer>
                        </ScheduleAppointmentContainer>

                        <ScheduleAppointmentContainer>
                            <LabelText>informe a localização desejada</LabelText>
                            <ScheduleAppointmentInput
                                placeholder={'Informe a localização'}
                            />
                        </ScheduleAppointmentContainer>
                        <ModalAppointmentButton>
                            <ButtonTitle>Continuar</ButtonTitle>
                        </ModalAppointmentButton>
                    </ModalScheduleAppointmentFormContainer>


                    <SecondaryButton onPress={onPress}>
                        <SecondaryButtonText>Cancelar</SecondaryButtonText>
                    </SecondaryButton>
                </ModalScheduleContainer>
            </ModalScheduleView>
        </Modal>
    )
}
