import { Container, ContainerScrollView } from "../../components/Contain/style"
import { MapClinic } from "../../components/MapClinic/style"
import { SubTitle, Title } from "../../components/Title/style"
import { UserProfileInput, UserProfileInputAddress, UserProfileInputContainer, UserProfileInputContainerAddress, UserProfileInputContainerRow } from "../../components/UserProfileInput/style"
import { LabelText } from "../../components/Label/style"


export const ConsultationLocation = () => {
    return (
        <ContainerScrollView>
            <Container style={{ height: '100%' }}>
                <MapClinic source={require('../../assets/images/map-clinic.png')} />

                <Title style={{ margin: 30 }}>Clínica Natureh</Title>
                <SubTitle>São Paulo, SP</SubTitle>

                <UserProfileInputContainer>
                    <LabelText>Endereço</LabelText>
                    <UserProfileInput>Rua Vicenso Silva, 987</UserProfileInput>
                </UserProfileInputContainer>

                <UserProfileInputContainerRow>
                    <UserProfileInputContainerAddress>
                        <LabelText>Número</LabelText>
                        <UserProfileInputAddress>578</UserProfileInputAddress>
                    </UserProfileInputContainerAddress>

                    <UserProfileInputContainerAddress>
                        <LabelText>Bairro</LabelText>
                        <UserProfileInputAddress>Moema-SP</UserProfileInputAddress>
                    </UserProfileInputContainerAddress>
                </UserProfileInputContainerRow>

            </Container>
        </ContainerScrollView>
    )
}