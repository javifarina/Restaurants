import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestaurant from "../screems/TopRestaurants";

const Stack = createStackNavigator()
export default function TopRestauranStack(){
    return(
       <Stack.Navigator>
           <Stack.Screen 
           name="Top-Restaurants"
           component={TopRestaurant}
           options={{title:"Top 5 Mejores"}}
           />
       </Stack.Navigator>
    )
}