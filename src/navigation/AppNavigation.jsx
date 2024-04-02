import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import RecuperarSenhaScreen from "../screens/RecuperarSenhaScreen";
import RegistroScreen from "../screens/RegistroScreen";
import AdicionarEntrada from "../screens/AdicionarEntrada";
import AdicionarDespesa from "../screens/AdicionarDespesa";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegistroScreen"
          component={RegistroScreen}
          options={{
            title: "Registrar-se",
          }}
        />
        <Stack.Screen
          name="RecuperarSenhaScreen"
          component={RecuperarSenhaScreen}
          options={{
            title: "Recuperar senha",
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Página Inicial",
            headerShown: false,
          }}
        /> 
        <Stack.Screen
        name="TabNavigator" // como se fosse um id da tela
        component={TabNavigator}
        options={{
          title: "Início",
          headerShown: false,
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Início",
          tabBarLabel: "Início",
          tabBarIcon: "home-variant-outline",
        }}
      />
      <Tab.Screen
        name="AdicionarEntrada"
        component={AdicionarEntrada}
        options={{
          title: "Adicionar Entrada",
          tabBarLabel: "Entrada",
          tabBarIcon: "cash-plus",
        }}
      />
      <Tab.Screen
        name="AdicionarDespesas"
        component={AdicionarDespesa}
        options={{
          title: "Adicionar Despesa",
          tabBarLabel: "Despesa",
          tabBarIcon: "cash-minus",
        }}
      />
    </Tab.Navigator>
  );
}