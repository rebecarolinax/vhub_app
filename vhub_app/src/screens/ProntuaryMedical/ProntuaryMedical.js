import { Button, ButtonTitle, SecondaryButton, SecondaryButtonText } from "../../components/Button/style";
import { Container, ContainerScrollView } from "../../components/Contain/style";
import { LabelText } from "../../components/Label/style";
import { Title, SubTitle } from "../../components/Title/style";
import { UserProfileInputContainer, UserProfileInputEdition, UserProfileTextAreaEdition } from "../../components/UserProfileInput/style";
import { UserProfilePhoto } from "../../components/UserProfilePhoto/style";



export const ProntuaryMedical = ({ navigation }) => {
    return (
        <ContainerScrollView>
            <Container>

                <UserProfilePhoto source={require('../../assets/foto-de-perfil.png')} />
                <Title>Richard Kosta</Title>

                <SubTitle>22 Anos    <SubTitle>richard.kosta@gmail.com</SubTitle></SubTitle>

                <UserProfileInputContainer>
                    <LabelText>Descrição da Consulta</LabelText>
                    <UserProfileTextAreaEdition
                        placeholder={'Descrição'}
                        multiline
                        numberOfLines={5}
                        maxLength={200}
                    />
                </UserProfileInputContainer>

                <UserProfileInputContainer>
                    <LabelText>Diagnóstico do paciente</LabelText>
                    <UserProfileInputEdition
                        placeholder={'Diagnóstico do paciente'}
                    />
                </UserProfileInputContainer>

                <UserProfileInputContainer>
                    <LabelText>Prescrição Médica</LabelText>
                    <UserProfileTextAreaEdition
                        placeholder={'Prescrição Médica'}
                        multiline
                        numberOfLines={6}
                        maxLength={250}
                    />
                </UserProfileInputContainer>

                <Button onPress={() => navigation.navigate("MedicalRecord")}>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <SecondaryButton onPress={() => navigation.navigate("MedicalRecord")}>
                    <SecondaryButtonText>Cancelar</SecondaryButtonText>
                </SecondaryButton>

            </Container>
        </ContainerScrollView>
    );
}