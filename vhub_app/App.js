import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login/Login";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';

const Stack = createNativeStackNavigator();

export default function App() {

  // hook para uso das fontes 
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium
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
          name="Navigation"
          component={Navigation}
          options={{ title: 'Navegação' }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

