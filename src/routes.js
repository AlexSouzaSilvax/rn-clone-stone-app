import React from "react";

import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import Inicio from "./pages/Inicio";
import Extrato from "./pages/Extrato";
import Perfil from "./pages/Perfil";

import colors from "./styles/colors";

const Routes = createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Inicio: {
        screen: Inicio,
        navigationOptions: {
          title: "Início",
          tabBarIcon: ({ focused }) => (
            <IconSimpleLineIcons
              name="home"
              size={focused ? 25 : 22}
              color={focused ? colors.primaryColor : colors.cinzaDark}
            />
          ),
        },
      },
      Extrato: {
        screen: Extrato,
        navigationOptions: {
          title: "Extrato",
          tabBarIcon: ({ focused }) => (
            <IconIonicons
              name="md-paper"
              size={focused ? 25 : 22}
              color={focused ? colors.primaryColor : colors.cinzaDark}
            />
          ),
        },
      },
      Perfil: {
        screen: Perfil,
        navigationOptions: {
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <IconSimpleLineIcons
              name="user"
              size={focused ? 24 : 22}
              color={focused ? colors.primaryColor : colors.cinzaDark}
            />
          ),
        },
      },
    },
    {
      initialRouteName: "Inicio",
      barStyle: {
        backgroundColor: colors.white,
      },
      shifting: false,
      activeColor: colors.primaryColor,
      inactiveColor: colors.cinzaDark,
    }
  )
);

export default Routes;
