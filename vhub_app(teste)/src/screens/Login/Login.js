import { Logo } from "../../components/Logo/style"
import { Container } from "../../components/Contain/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { LinkAccount, LinkMedium } from "../../components/Link/style"
import { Button, ButtonTitle, ButtonTitleGoogle, GoogleButton } from "../../components/Button/style"
import { ContentAccount, TextAccount } from "../../components/ContentAccount/style"
import { AntDesign } from '@expo/vector-icons';

export const Login = ({ navigation }) => {
    return (
        <Container>

            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title >Entrar ou criar conta</Title>

            <Input placeholder={'Usuário ou E-mail'} />
            <Input placeholder={'Senha'}
                secureTextEntry
            />

            <LinkMedium onPress={() => navigation.navigate("Reset")}>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <GoogleButton>
                <AntDesign name="google" size={20} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com o Google</ButtonTitleGoogle>
            </GoogleButton>

            <ContentAccount>
                <TextAccount>Não tem conta? </TextAccount>
                <LinkAccount onPress={() => navigation.navigate("Register")}>Crie uma conta agora!</LinkAccount>
            </ContentAccount>

        </Container>
    )
}