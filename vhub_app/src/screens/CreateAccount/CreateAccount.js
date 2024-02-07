import { Button } from "../../components/Button/style"
import { Contain, ContentSubtitle } from "../../components/Contain/style"
import { Input } from "../../components/Input/style"
import { LinkBoldBold } from "../../components/Link/style"
import { Logo } from "../../components/Logo/style"
import { ButtonTitle, Subtitle, Title } from "../../components/Title/style"

export const CreateAccount = () => {
    return (
        <Contain>
            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Criar conta</Title>

            <ContentSubtitle>
                <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>
            </ContentSubtitle>

            <Input placeholder="Usuário ou E-mail" />

            <Input placeholder="Senha" />

            <Input placeholder="Confirmar Senha" />

            <Button>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <LinkBoldBold>Cancelar</LinkBoldBold>

        </Contain>
    )
}