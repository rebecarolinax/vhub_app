import { Button } from "../../components/Button/style"
import { Contain, ContentSubtitle } from "../../components/Contain/style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { ButtonTitle, Subtitle, Title } from "../../components/Title/style"

export const PasswordReset = () => {
    return (
        <Contain>

            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Redefinir Senha</Title>

            <ContentSubtitle>
                <Subtitle>Insira e confirme a sua nova senha</Subtitle>
            </ContentSubtitle>

            <Input placeholder="Nova Senha" />

            <Input placeholder="Confirmar nova senha" />

            <Button>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Button>
        </Contain>
    )
}