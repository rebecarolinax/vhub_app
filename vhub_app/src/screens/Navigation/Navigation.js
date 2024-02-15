import { Button, View } from "react-native"

export const Navigation = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Recuperar Senha"
                onPress={() => navigation.navigate("PasswordRecover")}
            />
            <Button
                title="Redefinir Senha"
                onPress={() => navigation.navigate("PasswordReset")}
            />
            <Button
                title="Criar Conta"
                onPress={() => navigation.navigate("CreateAccount")}
            />
            <Button
                title="Verificar Email"
                onPress={() => navigation.navigate("EmailCheck")}
            />

            <Button
                title="Perfil do Usuário"
                onPress={() => navigation.navigate("UserProfile")}
            />

            <Button
                title="Prontuário do Usuário"
                onPress={() => navigation.navigate("Prontuary")}
            />

            <Button
                title="Página Home do Médico"
                onPress={() => navigation.navigate("DoctorHome")}
            />

        </View>
    )
}