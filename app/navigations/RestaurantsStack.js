import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from "../screems/Restaurants";
const Stack = createStackNavigator()
export default function RestaurantsStack () {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Restaurants"
            component={Restaurants}
            options={{title:"Restaurantes"}}
            />
        </Stack.Navigator>
    )
}