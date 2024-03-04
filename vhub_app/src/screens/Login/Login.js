import { Image } from "react-native";
import { Button, ButtonGoogle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinkMedium, TextAccount, TextReenviar } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../components/Title/Style";
import { ContentAccount } from "../../components/ContentAccount/Style";
import { AntDesign } from "@expo/vector-icons";

export const Login = ({ navigation }) => {
    return (
        <Container>
            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Entrar ou criar conta</Title>

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Usuário ou E-mail"
                placeholderTextColor="#34898F"
            />

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Senha"
                placeholderTextColor="#34898F"
            />

            <LinkMedium style={{ marginLeft: 20 }} onPress={() => navigation.navigate("RecuperarSenha")}>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={20} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <TextReenviar onPress={() => navigation.navigate("Cadastro")}>Crie uma conta agora!</TextReenviar></TextAccount>
            </ContentAccount>
        </Container>
    );
}