import { Button, ButtonTitle } from "../../components/Button/style"
import { Container, ContainerIcons } from "../../components/Contain/style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { Title, SubTitle, SubTitleContainer } from "../../components/Title/style"
import { AntDesign } from '@expo/vector-icons';

export const PasswordRecover = ({ navigation }) => {
    return (
        <Container>

            <ContainerIcons>
                <AntDesign onPress={() => navigation.navigate('Login')} name="arrowleft" size={30} color="#49B3BA" />
            </ContainerIcons>

            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Recuperar senha</Title>

            <SubTitleContainer>
                <SubTitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</SubTitle>
            </SubTitleContainer>

            <Input placeholder={'Usuário ou E-mail'} />

            <Button onPress={() => navigation.navigate('EmailCode')}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Container>
    )
}