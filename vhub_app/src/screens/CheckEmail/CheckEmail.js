// components
import { Button } from "../../components/Button/style";
import { Contain, ContainIcons, ContentSubtitle, InputContain } from "../../components/Contain/style";
import { VerificationInput } from "../../components/Input/style";
import { LinkAction } from "../../components/Link/style";
import { Logo } from "../../components/Logo/style";
import { ButtonTitle, Subtitle, SubtitleFocus, Title } from "../../components/Title/style";
// vector-icons @expo
import { AntDesign } from "@expo/vector-icons";

export const CheckEmail = ({ navigation }) => {
    return (
        <Contain>

            {/* container que recebe os ícones e os posiciona */}
            <ContainIcons>
                {/* utilizando AntDesign para criação dos botões de retorno */}
                <AntDesign onPress={() => navigation.navigate('PasswordRecover')} name="closecircle" size={30} color="#49B3BA" />
            </ContainIcons>

            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Verifique Seu E-mail</Title>

            <ContentSubtitle>
                <Subtitle>Digite o código de 4 dígitos enviado para <SubtitleFocus>username@email.com</SubtitleFocus></Subtitle>
            </ContentSubtitle>

            {/* InputContain = posiciona os Inputs de verificação em row e espaçados */}
            <InputContain>
                {/* o dito cujo */}
                <VerificationInput value={"0"} />
                <VerificationInput value={"0"} />
                <VerificationInput value={"0"} />
                <VerificationInput value={"0"} />
            </InputContain>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <LinkAction>Reenviar Código</LinkAction>

        </Contain>
    );
};