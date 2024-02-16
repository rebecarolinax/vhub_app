import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';

import { Login } from "./src/screens/Login/Login";
import { PasswordRecover } from "./src/screens/PasswordRecover/PasswordRecover";
import { PasswordReset } from "./src/screens/PasswordReset/PasswordReset";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";
import { EmailCheck } from "./src/screens/EmailCheck/EmailCheck";
import { UserProfile } from "./src/screens/UserProfile/UserProfile";
import { Prontuary } from "./src/screens/Prontuary/Prontuary";
import { DoctorHome } from "./src/screens/DoctorHome/DoctorHome";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {

  // hook para uso das fontes 
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold
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
          name='EmailCheck'
          component={EmailCheck}
          options={{ title: 'Verificar E-mail' }}
        />

        <Stack.Screen
          name='UserProfile'
          component={UserProfile}
          options={{ title: 'Perfil do Usuário' }}
        />

        <Stack.Screen
          name='Prontuary'
          component={Prontuary}
          options={{ title: 'Prontuário do Usuário' }}
        />

        <Stack.Screen
          name='DoctorHome'
          component={DoctorHome}
          options={{ title: 'Página Home do Médico' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

