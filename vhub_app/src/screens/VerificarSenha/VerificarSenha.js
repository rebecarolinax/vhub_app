import { Image } from "react-native";
import { Button } from "../../components/Button/Style";
import { Container, ContainerIcons } from "../../components/Container/Style";
import { ContentAccount } from "../../components/ContentAccount/Style";
import { InputVerify } from "../../components/Input/Style";
import { LinkMedium, TextReenviar } from "../../components/Link/Style";
import { ArrowIcon, Logo } from "../../components/Logo/Style";
import { TextQuick } from "../../components/Text/Text";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { AntDesign } from "@expo/vector-icons";

export const VerificarSenha = ({ navigation }) => {
    return (
        <Container>
            <ContainerIcons>
                <AntDesign onPress={() => navigation.navigate('Login')} name="closecircle" size={30} color="#49B3BA" />
            </ContainerIcons>
            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Verifique seu e-mail</Title>

            <TextQuick>Digite o código de 4 dígitos enviado para <TextReenviar style={{ fontSize: 16 }}> username@email.com</TextReenviar></TextQuick>

            <ContentAccount>
                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold' }}
                    placeholder="0"
                    placeholderTextColor="#34898F"
                    maxLength={1}
                />

                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold' }}
                    placeholder="0"
                    placeholderTextColor="#34898F"
                    maxLength={1}
                />

                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold' }}
                    placeholder="0"
                    placeholderTextColor="#34898F"
                    maxLength={1}
                />

                <InputVerify style={{ fontFamily: 'Quicksand_600SemiBold' }}
                    placeholder="0"
                    placeholderTextColor="#34898F"
                    maxLength={1}
                />
            </ContentAccount>


            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <TextReenviar>Reenviar Código</TextReenviar>
        </Container>
    );
}