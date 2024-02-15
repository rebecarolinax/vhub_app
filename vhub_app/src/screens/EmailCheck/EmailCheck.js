import { Contain, ContainIcons, ContentAccount } from "../../components/Contain/style"
import { Title, ButtonTitle } from "../../components/Title/style"
import { Button } from "../../components/Button/style"
import { InputVerify } from "../../components/Input/style"
import { TextResend } from "../../components/Link/style"
import { Logo } from "../../components/Logo/style"
import { TextQuickSB } from "../../components/Text/style"
import { AntDesign } from "@expo/vector-icons"

export const EmailCheck = () => {
    return (
        <Contain>

            <ContainIcons>
                {/* utilizando AntDesign para criação dos botões de retorno */}
                <AntDesign onPress={() => navigation.navigate('PasswordRecover')} name="closecircle" size={30} color="#49B3BA" />
            </ContainIcons>

            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Verifique seu e-mail</Title>

            <TextQuickSB>Digite o código de 4 dígitos enviado para <TextResend> username@email.com</TextResend></TextQuickSB>

            <ContentAccount>
                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold' }}
                    placeholder="0"
                    placeholderTextColor="#34898F"
                />

                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold' }}
                    placeholder="0"
                    placeholderTextColor="#34898F"
                />

                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold' }}
                    placeholder="0"
                    placeholderTextColor="#34898F"
                />

                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold' }}
                    placeholder="0"
                    placeholderTextColor="#34898F"
                />
            </ContentAccount>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <TextResend>Reenviar Código</TextResend>
        </Contain>
    );
}