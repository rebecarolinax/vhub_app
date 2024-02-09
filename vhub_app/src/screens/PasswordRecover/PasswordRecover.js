import { Contain, ContainIcons } from "../../components/Contain/style"
import { TextQuick, Title, ButtonTitle } from "../../components/Title/style"
import { Button, } from "../../components/Button/style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { AntDesign } from "@expo/vector-icons"

export const PasswordRecover = ({ navigation }) => {
    return (

        <Contain>

            <ContainIcons>
                {/* utilizando AntDesign para criação dos botões de retorno */}
                <AntDesign onPress={() => navigation.navigate('Login')} name="arrowleft" size={30} color="#49B3BA" />
            </ContainIcons>

            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Recuperar senha</Title>

            <TextQuick>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</TextQuick>

            <Input
                style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Usuário ou E-mail"
                placeholderTextColor="#34898F"
            />

            <Button onPress={() => navigation.navigate("EmailCheck")}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Contain>
    )

}