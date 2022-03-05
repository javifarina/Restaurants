import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../screems/Favorites";


const Stack = createStackNavigator()
export default function FavoritesStack(){
    return(
       <Stack.Navigator>
           <Stack.Screen 
           name="Favorites"
           component={Favorites}
           options={{title:"Favorito"}}
           />
       </Stack.Navigator>
    )
}