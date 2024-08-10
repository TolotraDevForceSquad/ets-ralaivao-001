import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Bienvenu from "./ecrans/bienvenu";
import Vehicule from "./ecrans/vehicule";
import Preventif from "./ecrans/preventif";
import Suivi from "./ecrans/suivi";
import Rep from "./ecrans/reparation";


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='reparation'>
        {/* <Stack.Screen name="bienvenu" component={Bienvenu} /> */}
        <Stack.Screen name="vehicule" component={Vehicule}/>
        <Stack.Screen name="preventif" component={Preventif}/>
        <Stack.Screen name="suivi" component={Suivi}/>
        <Stack.Screen name="reparation" component={Rep} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;