import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from '../screens/Home/Home';
import CharacterStack from '../screens/CharacterStack/CharacterStack';
import iconPath from '../components/iconPath';
import style from './style'

const Tab = createBottomTabNavigator();

export default function Rotas() {

    return (

        <NavigationContainer>

            <Tab.Navigator
            screenOptions={{
                tabBarStyle: style.tabBarStyle
            }}>

                <Tab.Screen style={style.tabHome} name="Home" component={HomeScreen} options={{
                    ...style.tabHomeOptions,

                    tabBarIcon: ({focused}) => {
                        return(
                            <Image style={[style.icons, {tintColor: focused ? 'white' : 'gray'}]} 
                            source={iconPath.icHome}/>
                        )
                    }
                }}/>

                <Tab.Screen style={style.tabCharacters} name="Characters" component={CharacterStack} options={{
                    headerShown: false,
                    ...style.tabCharactersOptions,

                    tabBarIcon: ({focused}) => {
                        return(
                            <Image style={[style.icons, {tintColor: focused ? 'white' : 'gray'}]}
                            source={iconPath.icCharacter}/>
                        )
                    }
                }}/>

            </Tab.Navigator>
            
      </NavigationContainer>

    );
}