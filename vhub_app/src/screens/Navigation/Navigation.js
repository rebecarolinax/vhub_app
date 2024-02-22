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
                onPress={() => navigation.navigate("EmailCode")}
            />
            
            <Button
                title="Prontuário do Paciente"
                onPress={() => navigation.navigate("ProntuaryMedical")}
            />

            <Button
                title="Página Home do Médico"
                onPress={() => navigation.navigate("DoctorHome")}
            />

            <Button
                title="Página Home do Paciente"
                onPress={() => navigation.navigate("PatientHome")}
            />

            <Button
                title="ClinicSelect"
                onPress={() => navigation.navigate("ClinicSelect")}
            />

            <Button
                title="PatientProfile"
                onPress={() => navigation.navigate("PatientProfile")}
            />

        </View>
    )
}