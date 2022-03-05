import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from '../screems/Account'

const Stack = createStackNavigator()
export default function AccountStack(){
    return(
       <Stack.Navigator>
           <Stack.Screen 
           name="Account"
           component={Account}
           options={{title:"Cuenta"}}
           />
       </Stack.Navigator>
    )
}