
import { Contain, ContentAccount, TextAccount } from "../../components/Contain/style"
import { Logo, LogoGoogle } from "../../components/Logo/style"
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { LinkBold, LinkMedium } from "../../components/Link/style"
import { Button, ButtonGoogle } from "../../components/Button/style"



export const Login = () => {
    return (
        <Contain>

            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" />
            <Input placeholder="Senha" />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <LogoGoogle source={require("../../assets/icons/logo_google.png")} />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <LinkBold>Crie uma conta agora!</LinkBold></TextAccount>
            </ContentAccount>

        </Contain>
    )
}