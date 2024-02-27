import { Container, ContainerScrollView } from "../../components/Contain/style"
import { LabelText } from "../../components/Label/style"
import { Title, SubTitle } from "../../components/Title/style"
import {
    UserProfileInput,
    UserProfileInputAddress,
    UserProfileInputContainer,
    UserProfileInputContainerAddress,
    UserProfileInputContainerRow
} from "../../components/UserProfileInput/style"
import { UserProfilePhoto } from "../../components/UserProfilePhoto/style"
import { Button, ButtonTitle } from "../../components/Button/style"


export const PatientProfile = () => {
    return (
        <ContainerScrollView>
            <Container>
                <UserProfilePhoto source={{ uri: "https://radiocidade.fm/uploads/2021/12/Lana-Del-Rey-4.png" }} />

                <Title>Lana Del Rey</Title>

                <SubTitle>lizzy@gmail.com</SubTitle>

                <UserProfileInputContainer>
                    <LabelText>Data de Nascimento: </LabelText>
                    <UserProfileInput placeholder={'21/06/1985'} />
                </UserProfileInputContainer>

                <UserProfileInputContainer>
                    <LabelText>CPF: </LabelText>
                    <UserProfileInput placeholder={'859********'} />
                </UserProfileInputContainer>

                <UserProfileInputContainer>
                    <LabelText>Endereço: </LabelText>
                    <UserProfileInput placeholder={'Malibu, 987'} />
                </UserProfileInputContainer>

                <UserProfileInputContainerRow>
                    <UserProfileInputContainerAddress>
                        <LabelText>CEP: </LabelText>
                        <UserProfileInputAddress placeholder={'90263'} />
                    </UserProfileInputContainerAddress>

                    <UserProfileInputContainerAddress>
                        <LabelText>Cidade: </LabelText>
                        <UserProfileInputAddress placeholder={'Califórnia'} />
                    </UserProfileInputContainerAddress>
                </UserProfileInputContainerRow>

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <Button>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>

                <Button style={{ width: 200, backgroundColor: '#ACABB7', margin: 20 }}>
                    <ButtonTitle>Sair do APP</ButtonTitle>
                </Button>
            </Container>
        </ContainerScrollView>
    )
}
