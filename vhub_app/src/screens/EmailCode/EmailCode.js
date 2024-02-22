import { Container, ContainerIcons } from "../../components/Contain/style"
import { Logo } from "../../components/Logo/style"
import { Title, SubTitle } from "../../components/Title/style"
import { EmailCodeInput, EmailCodeInputContainer } from "../../components/EmailCodeInput/style"
import { Button, ButtonTitle, SecondaryButton, SecondaryButtonText } from "../../components/Button/style"

import { AntDesign } from '@expo/vector-icons';

export const EmailCode = ({ navigation }) => {
    return (
        <Container>

            <ContainerIcons>
                <AntDesign onPress={() => navigation.navigate('Reset')} name="closecircle" size={30} color="#49B3BA" />
            </ContainerIcons>

            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Verifique seu e-mail</Title>

            <SubTitle>Digite o código de 4 dígitos enviado para
                username@email.com</SubTitle>

            <EmailCodeInputContainer>
                <EmailCodeInput placeholder={'0'} maxLength={1} keyboardType={'numeric'} />

                <EmailCodeInput placeholder={'0'} maxLength={1} keyboardType={'numeric'} />

                <EmailCodeInput placeholder={'0'} maxLength={1} keyboardType={'numeric'} />

                <EmailCodeInput placeholder={'0'} maxLength={1} keyboardType={'numeric'} />
            </EmailCodeInputContainer>

            <Button onPress={() => navigation.navigate('ResetPassword')}>
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Button>

            <SecondaryButton>
                <SecondaryButtonText>Reenviar Código</SecondaryButtonText>
            </SecondaryButton>
        </Container>
    )
}