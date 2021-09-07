import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/home';


const Stack = createNativeStackNavigator();

export default function router() {
    return (

        <NavigationContainer  >

            <Stack.Navigator>

                <Stack.Screen name='login'
                    component={Login}


                    options={{

                        headerStyle: {
                            backgroundColor: '#000',
                            color: '#FFF'
                        },
                        title: '',
                        color: '#000',


                    }}
                />


                <Stack.Screen name='register'
                    component={Register}


                    options={{

                        headerStyle: {
                            backgroundColor: '#000',
                            color: '#FFF'
                        },
                        title: '',
                        color: '#000',


                    }}
                />

                <Stack.Screen name='home'
                    component={Home}


                    options={{

                        headerStyle: {
                            backgroundColor: '#000',
                            color: '#FFF'
                        },
                        title: '',
                        color: '#000',


                    }}
                />



            </Stack.Navigator>


        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

    stackBack: {
        backgroundColor: '#000',
    }
})