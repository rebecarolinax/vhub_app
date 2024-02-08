// components
import { Button } from "../../components/Button/style"
import { Contain, ContainIcons, ContentSubtitle } from "../../components/Contain/style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { ButtonTitle, Subtitle, Title } from "../../components/Title/style"
// vector-icons @expo
import { AntDesign } from "@expo/vector-icons"

export const PasswordReset = ({ navigation }) => {
    return (
        <Contain>

            {/* container que recebe os ícones e os posiciona */}
            <ContainIcons>
                {/* utilizando AntDesign para criação dos botões de retorno */}
                <AntDesign onPress={() => navigation.navigate('Login')} name="closecircle" size={30} color="#49B3BA" />
            </ContainIcons>

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