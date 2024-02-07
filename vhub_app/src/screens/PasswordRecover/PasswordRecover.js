import { Contain, ContentSubtitle } from "../../components/Contain/style"
import { Logo } from "../../components/Logo/style"
import { ButtonTitle, Subtitle, Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { Button } from "../../components/Button/style"
export const PasswordRecover = () => {
    return (
        <Contain>

            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Recuperar Senha</Title>

            <ContentSubtitle>
                <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>
            </ContentSubtitle>

            <Input placeholder="Usuário ou E-mail" />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

        </Contain>
    )
}
