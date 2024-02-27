import { Image } from "react-native";
import { Button } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { ArrowIcon, Logo } from "../../components/Logo/Style";
import { TextQuick } from "../../components/Text/Text";
import { ButtonTitle, Title } from "../../components/Title/Style";

export const RedefinirSenha = ({ navigation }) => {
    return(
        <Container>
            <ArrowIcon onPress={() => navigation.navigate("Login")}>
            <Image
             source={require('../../assets/Back.png')}
            />
           </ArrowIcon>
        <Logo
        source={require('../../assets/VitalHub_Logo.png')}
        />

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
        </Container>
    );
}