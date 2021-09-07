
import { Link } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DefaultTheme, HelperText, TextInput, Provider as PaperProvider, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../fire';

export default function login() {
    const [text, setText] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [email, setEmail] = React.useState('');
    const navigation = useNavigation();

    const onChangeText = text => setText(text);

    const hasErrors = () => {
        return !text.includes('@');
    };

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

    function sign() {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {

                var user = userCredential.user;
                //navigation.navigate('home');
                alert('Acesso válido!');
                navigation.navigate('home');

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);

            });

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

                    <TextInput style={{ color: colors.accent }} label="Email" value={email}
                    onChangeText={email => setEmail(email)} />
                    <HelperText type="error" visible={hasErrors()}>
                        Email address is invalid!
                    </HelperText>


                    <TextInput
                        label="Password"
                        secureTextEntry
                        right={<TextInput.Icon name="eye" />}
                        onChangeText={pass => setPass(pass)}
                        value={pass}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => sign()}>
                        <Text style={styles.login}>Login</Text>
                    </TouchableOpacity>

                    <Link style={styles.textRegister} to={{ screen: 'register' }}>
                        Don't have an account,
                        <Text style={{ color: '#F39C12' }}> Sign up
                        </Text>
                    </Link>

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