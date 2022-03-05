import react from "react";
import{ NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//
import Restaurants from '../screems/Restaurants'
import Favorites from '../screems/Favorites'
import Accounts from '../screems/Account'
import Search from '../screems/Search'
import TopRestaurants from '../screems/TopRestaurants'

const Tab = createBottomTabNavigator()
export default function Navigations(){
    return(
        <NavigationContainer>
            <Tab.Navigator> 
                
                <Tab.Screen 
                name="Restaurants" 
                component={Restaurants}
                options={{title:"Restaurantes"}}
                />
            
                <Tab.Screen 
                name="Favorites" 
                component={Favorites}
                options={{title:"Favoritos"}}
                />
    
                <Tab.Screen 
                name="Top-Restaurants" 
                component={TopRestaurants}
                options={{title:"5 Mejores"}}
                />

                <Tab.Screen 
                name="Search" 
                component={Search}
                options={{title:"Busqueda"}}
                />

                <Tab.Screen 
                name="Accaunts" 
                component={Accounts}
                options={{title:"Cuenta"}}
                />      
            </Tab.Navigator>
        </NavigationContainer>
    )
}