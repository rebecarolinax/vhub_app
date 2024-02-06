import { Button, Text } from "react-native"
import { Contain } from "../../components/Contain/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { Link } from "../../components/Link/style"



export const Login = () => {
    return (
        <Contain>
            <Logo source={require("../../assets/images/vhub_logo.png")} />
            <Title>Entrar ou criar conta</Title>
            <Input placeholder="Usuário ou E-mail" />
            <Input placeholder="Senha" />
            <Link>Esqueceu sua senha?</Link>
        </Contain>
    )
}