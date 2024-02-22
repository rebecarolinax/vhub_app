import { Container, ContainerIcons } from "../../components/Contain/style"
import { Title, SubTitle } from "../../components/Title/style"
import { Logo } from "../../components/Logo/style"
import { Input } from "../../components/Input/style"
import { Button, ButtonTitle } from "../../components/Button/style"
import { AntDesign } from '@expo/vector-icons';


export const PasswordReset = ({ navigation }) => {
    return (
        <Container>
            <ContainerIcons>
                <AntDesign onPress={() => navigation.navigate('Login')} name="closecircle" size={30} color="#49B3BA" />
            </ContainerIcons>
            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Redefinir Senha</Title>

            <SubTitle>Insira e confirme a sua nova senha</SubTitle>

            <Input placeholder={'Nova Senha'} secureTextEntry />

            <Input placeholder={'Confirme nova senha'} secureTextEntry />

            <Button onPress={() => navigation.navigate('Login')}>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Button>
        </Container>
    )
}