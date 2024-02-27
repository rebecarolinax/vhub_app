import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "./src/screens/Navigation/Navigation";

import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold
} from '@expo-google-fonts/montserrat-alternates';

import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_400Regular
} from '@expo-google-fonts/quicksand';

import { Login } from "./src/screens/Login/Login";
import { PasswordRecover } from "./src/screens/PasswordRecover/PasswordRecover";
import { PasswordReset } from "./src/screens/PasswordReset/PasswordReset";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";
import { EmailCode } from "./src/screens/EmailCode/EmailCode";
import { ProntuaryMedical } from "./src/screens/ProntuaryMedical/ProntuaryMedical";
import { DoctorHome } from "./src/screens/DoctorHome/DoctorHome";
import { PatientHome } from "./src/screens/PatientHome/PatientHome";
import { ConsultationLocation } from "./src/screens/ConsultationLocation/ConsultationLocation";
import { ClinicSelect } from "./src/screens/ClinicSelect/ClinicSelect";
import { PatientProfile } from "./src/screens/PatientProfile/PatientProfile";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import { DoctorSelect } from "./src/screens/DoctorSelect/DoctorSelect";


const Stack = createNativeStackNavigator();

export default function App() {

  // hook para uso das fontes 
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    //  container - envolve toda estrutura de navegação
    // navigator - componente para a navegação
    // screen - tela
    // name: nome da tela
    // component: componente que será chamado
    // options(title): título da tela

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ title: 'Navegação' }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name="PasswordRecover"
          component={PasswordRecover}
          options={{ title: 'Recuperar Senha' }}
        />

        <Stack.Screen
          name="PasswordReset"
          component={PasswordReset}
          options={{ title: 'Redefinir Senha' }}
        />

        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: 'Criar conta' }}
        />

        <Stack.Screen
          name='EmailCode'
          component={EmailCode}
          options={{ title: 'Verificar E-mail' }}
        />

        <Stack.Screen
          name='PatientProfile'
          component={PatientProfile}
          options={{ title: 'Perfil do Paciente' }}
        />

        <Stack.Screen
          name='ProntuaryMedical'
          component={ProntuaryMedical}
          options={{ title: 'Prontuário do Paciente' }}
        />

        <Stack.Screen
          name='DoctorHome'
          component={DoctorHome}
          options={{ title: 'Página Home do Médico' }}
        />

        <Stack.Screen
          name='PatientHome'
          component={PatientHome}
          options={{ title: 'Página Home do Paciente' }}
        />

        <Stack.Screen
          name='ConsultationLocation'
          component={ConsultationLocation}
          options={{ title: 'Local da Consulta' }}
        />

        <Stack.Screen
          name='ClinicSelect'
          component={ClinicSelect}
          options={{ title: 'Selecionar Clínica' }}
        />

        <Stack.Screen
          name='DoctorSelect'
          component={DoctorSelect}
          options={{ title: 'Selecionar Médico' }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}