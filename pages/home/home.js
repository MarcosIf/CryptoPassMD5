
import { Link } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DefaultTheme, HelperText, TextInput, Provider as PaperProvider, useTheme } from 'react-native-paper';
import md5 from 'md5';

import firebase from '../../fire';

export default function home() {
    const [text, setText] = React.useState('');



    const { colors } = useTheme();
    const theme = {
        ...DefaultTheme,
        roundness: 4,
        colors: {
            ...DefaultTheme.colors,
            background: '#000',
            primary: '#F39C12',
            accent: '#FFF',
            text: '#FFF',

            placeholder: '#F39C12'
        },
    };

    function encryptmd5() {

        const encod = md5(text);
        setText(encod);
    }



    return (
        <View style={styles.back}>
            <View style={styles.logo}>
                <Image source={require('../../assets/logo.jpg')} />
                <Image source={require('../../assets/Md5.png')} />
                <Image style={{ marginTop: 10 }} source={require('../../assets/sub.png')} />

            </View>


            <PaperProvider theme={theme}>
                <View style={styles.contInputs}>



                    <TextInput style={{ color: colors.accent }}
                        label="Enter the password to encrypt"
                        onChangeText={text => setText(text)} />

                    <Text style={{marginLeft: '2%', marginTop: '10%', color:'#F39C12' }}  >Your key is: </Text>

                    <TextInput style={{ color: colors.accent }} 
                    >{text}</TextInput>

                    <TouchableOpacity style={styles.button} onPress={() => encryptmd5()}>
                        <Text style={styles.login}>Generate</Text>
                    </TouchableOpacity>



                </View>


            </PaperProvider>


        </View>

    )
}

const styles = StyleSheet.create({
    back: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%'
    },
    contInputs: {
        width: '80%',
        height: '80%',
        marginLeft: '10%',
        marginTop: '55%'
    },
    button: {
        backgroundColor: '#F39C12',
        width: '100%',
        height: 40,
        marginTop: '20%',
        borderRadius: 15,
        alignItems: 'center'
    },
    login: {

        marginTop: '3%',
        color: '#000',

    },
    textRegister: {
        marginTop: '10%',
        color: '#FFF',
        fontSize: 15,
        marginLeft: '16%'
    },
    logo: {
        width: 110,
        height: 80,
        marginLeft: '35%',
        alignItems: 'center'
    }
})