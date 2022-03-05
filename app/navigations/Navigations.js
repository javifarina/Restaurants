import react from "react";
import{ NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//
import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import AccountsStack from './AccountStack'
import SearchStack from './SearchStack'
import TopRestaurantsStack from './TopRestaurantStack'

const Tab = createBottomTabNavigator()
export default function Navigations(){
    return(
        <NavigationContainer>
            <Tab.Navigator> 
                
                <Tab.Screen 
                name="Restaurants" 
                component={RestaurantsStack}
                options={{title:"Restaurantes"}}
                />
            
                <Tab.Screen 
                name="Favorites" 
                component={FavoritesStack}
                options={{title:"Favoritos"}}
                />
    
                <Tab.Screen 
                name="Top-Restaurants" 
                component={TopRestaurantsStack}
                options={{title:"Top"}}
                />

                <Tab.Screen 
                name="Search" 
                component={SearchStack}
                options={{title:"Busqueda"}}
                />

                <Tab.Screen 
                name="Accaunts" 
                component={AccountsStack}
                options={{title:"Cuenta"}}
                />      
            </Tab.Navigator>
        </NavigationContainer>
    )
}