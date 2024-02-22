import { Container } from "../../components/Contain/style"
import { Logo } from "../../components/Logo/style"
import { Title, SubTitle } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { Button, ButtonTitle, SecondaryButton, SecondaryButtonText } from "../../components/Button/style"

export const CreateAccount = ({ navigation }) => {
    return (
        <Container>
            <Logo source={require("../../assets/images/vhub_logo.png")} />
            <Title>Criar Conta</Title>

            <SubTitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTitle>

            <Input placeholder={'Insira seu Email'} />

            <Input placeholder={'Senha'} secureTextEntry />

            <Input placeholder={'Confirmar Senha'} secureTextEntry />

            <Button>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </Button>

            <SecondaryButton>
                <SecondaryButtonText onPress={() => navigation.navigate('Login')}>Cancelar</SecondaryButtonText>
            </SecondaryButton>
        </Container>
    )
}