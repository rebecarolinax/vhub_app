// components
import { Contain, ContainIcons, ContentSubtitle } from "../../components/Contain/style"
import { Logo } from "../../components/Logo/style"
import { ButtonTitle, Subtitle, Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { Button } from "../../components/Button/style"
// vector-icons @expo
import { AntDesign } from "@expo/vector-icons"

export const PasswordRecover = ({ navigation }) => {
    return (
        <Contain>

            {/* container que recebe os ícones e os posiciona */}
            <ContainIcons>
                {/* utilizando AntDesign para criação dos botões de retorno */}
                <AntDesign onPress={() => navigation.navigate('Login')} name="arrowleft" size={30} color="#49B3BA" />
            </ContainIcons>

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
