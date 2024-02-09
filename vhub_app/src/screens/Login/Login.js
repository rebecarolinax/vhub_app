import { Button, ButtonGoogle } from '../../components/Button/style';
import { Contain, ContentAccount } from '../../components/Contain/style';
import { Input } from '../../components/Input/style';
import { LinkMedium, TextAccount, TextResend } from '../../components/Link/style';
import { Logo } from '../../components/Logo/style';
import { ButtonTitle, ButtonTitleGoogle, Title } from '../../components/Title/style';

export const Login = ({ navigation }) => {
    return (
        <Contain>
            <Logo source={require("../../assets/images/vhub_logo.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Usuário ou E-mail"
                placeholderTextColor="#34898F"
            />

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
                placeholder="Senha"
                placeholderTextColor="#34898F"
            />

            <LinkMedium onPress={() => navigation.navigate("PasswordRecover")}>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>

                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <TextResend onPress={() => navigation.navigate("CreateAccount")}>Crie uma conta agora!</TextResend></TextAccount>
            </ContentAccount>
        </Contain>
    );
}