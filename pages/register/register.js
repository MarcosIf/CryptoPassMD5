
import { Link } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DefaultTheme, HelperText, TextInput, Provider as PaperProvider, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../fire';

export default function register() {

    const { colors } = useTheme();
    const [text, setText] = React.useState('');
    const onChangeText = text => setText(text);
    const [email, setMail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const navigation = useNavigation();

    const hasErrors = () => {
        return !text.includes('@');
    };



    function singup() {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                alert('Usuário cadastrado com sucesso!')
                navigation.navigate('login')
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                // ..
            });

    }


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
                        label="Email"
                         />

                    <TextInput style={{ color: colors.accent }}
                        label="Repeat your email" value={email}
                        onChangeText={email => setMail(email)}

                    />

                    <HelperText type="error" visible={hasErrors()}>
                        Email address is invalid!
                    </HelperText>


                    <TextInput
                        label="Crete password"
                        style={{ color: colors.accent }}
                        secureTextEntry
                        value={pass}
                        onChangeText={pass => setPass(pass)}
                        right={<TextInput.Icon name="eye"

                        />}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => singup()}>
                        <Text style={styles.login} >Sing Up</Text>
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
        marginTop: '10%',
        borderRadius: 15,
        alignItems: 'center'
    },
    login: {

        marginTop: '3%',
        color: '#000'
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