import { Contain, ContainIcons } from "../../components/Contain/style"
import { TextQuick, Title, ButtonTitle } from "../../components/Title/style"
import { Button } from "../../components/Button/style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { AntDesign } from "@expo/vector-icons"

export const PasswordReset = ({ navigation }) => {

    return (
        <Contain>

            <ContainIcons>
                {/* utilizando AntDesign para criação dos botões de retorno */}
                <AntDesign onPress={() => navigation.navigate('Login')} name="closecircle" size={30} color="#49B3BA" />
            </ContainIcons>

            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Redefinir Senha</Title>

            <TextQuick>Insira e confirme a sua nova senha</TextQuick>

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Nova Senha"
                placeholderTextColor="#34898F"
            />

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Confirmar nova senha"
                placeholderTextColor="#34898F"
            />

            <Button>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Button>
        </Contain>
    );
}