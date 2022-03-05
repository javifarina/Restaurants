import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screems/Search";

const Stack = createStackNavigator()
export default function SearchStack(){
    return(
       <Stack.Navigator>
           <Stack.Screen 
           name="Search"
           component={Search}
           options={{title:"Busquedas"}}
           />
       </Stack.Navigator>
    )
}