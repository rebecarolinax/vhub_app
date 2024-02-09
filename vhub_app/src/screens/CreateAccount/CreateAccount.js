import { Contain } from "../../components/Contain/style"
import { TextQuick, Title, ButtonTitle } from "../../components/Title/style"
import { Button, } from "../../components/Button/style"
import { Input } from "../../components/Input/style"
import { TextResend } from "../../components/Link/style"
import { Logo } from "../../components/Logo/style"

export const CreateAccount = ({ navigation }) => {
    return (
        <Contain>
            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Criar conta</Title>

            <TextQuick>Insira seu endereço de e-mail e senha para realizar seu cadastro.</TextQuick>

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Usuário ou E-mail"
                placeholderTextColor="#34898F"
            />

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Senha"
                placeholderTextColor="#34898F"
            />

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Confirmar Senha"
                placeholderTextColor="#34898F"
            />

            <Button>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <TextResend onPress={() => navigation.navigate("Login")}>Cancelar</TextResend>
        </Contain>
    );
}