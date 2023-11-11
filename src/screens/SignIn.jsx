import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ButtonPrimary from '../components/ButtonPrimary'

const SignIn = NativeStack => {
    const goToSignIn = () => {
        NativeStack.navigation.navigate("BottonTab")
    }

    return (
        <View style={styles.container}>
            {/* Title Screen*/}
            <Text style={styles.textScreen}>Create an account</Text>
            {/* Subtitle Text*/}

            <Text
                style={styles.subtitle}
            >
                Let’s create your account
            </Text>
            {/* Container Input Name*/}
            <View style={styles.containerInput}>
                <Text style={styles.titleInput}>
                    Full Name
                </Text>
                <TextInput
                    placeholder='Enter your full name'
                    cursorColor={"black"}
                    style={styles.input}
                />
            </View>
            {/* Container Input Email*/}
            <View style={styles.containerInput}>
                <Text style={styles.titleInput}>
                    Email
                </Text>
                <TextInput
                    placeholder='Enter your email address'
                    cursorColor={"black"}
                    style={styles.input}
                    keyboardType='email-address'
                />
            </View>
            {/* Container Input Password*/}

            <View style={styles.containerInput}>
                <Text style={styles.titleInput}>
                    Password
                </Text>
                <TextInput
                    placeholder='Enter your password'
                    cursorColor={"black"}
                    style={styles.input}
                    secureTextEntry={true}
                />
            </View>

            {/* Button Sign In */}
            <ButtonPrimary
                textButton="Sign Up"
                stylesAdd={{
                    container: {
                        marginTop: 24
                    },
                }}
                onPress={() => { goToSignIn()}}
            />

            <View style={styles.containerSeparator}>
                <View 
                  style={styles.separtor}
                />
                <Text>OR</Text>
                <View 
               style={styles.separtor}
                />
            </View>

            <ButtonPrimary
                img="https://res.cloudinary.com/dokwcwo9t/image/upload/v1691253419/idat/google_ujqcap.png"
                textButton="Sign Up with Google"
                stylesAdd={{
                    container: {
                        marginTop: 24,
                        backgroundColor: '#ffffff',
                        borderColor: '#000000',
                        borderWidth: 1,
                        elevation: 0
                    },
                    textButton:{
                        marginLeft: 12,
                        color: '#000000'
                        
                    }
                }}
                onPress={() => { goToSignIn()}}
            />
             <ButtonPrimary
                img="https://res.cloudinary.com/dokwcwo9t/image/upload/v1691253509/idat/facebook_zqfbyf.png"
                textButton="Sign Up with Facebook"
                stylesAdd={{
                    container: {
                        marginTop: 16,
                        backgroundColor: '#1877F2',
                        elevation: 0
                    },
                    textButton:{
                        marginLeft: 12,
                        color: 'white'
                        
                    }
                }}
                onPress={() => { goToSignIn()}}
            />

            <View style={styles.containerLogin}>
                <Text  style={styles.textLoginDescription}>
                      Already a member?
                </Text>
                <TouchableOpacity >
                    <Text style={styles.textLogin}>
                        Log In
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: 'white'
    },
    textScreen: {
        fontSize: 28,
        color: '#000',
        fontWeight: "900",
        marginTop: 20
    },
    subtitle: {
        color: "#000",
        fontSize: 16,
        marginTop: 24
    },
    containerInput: {
        marginTop: 12
    },
    titleInput: {
        color: "#000",
        fontWeight: '800',
        fontSize: 16
    },
    input: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 4
    },
    separtor:{
        height: 1,
        width: '44%',
        
        backgroundColor: '#000',
    },
    containerSeparator:{
        marginTop:24,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    textLogin:{
        fontSize:16,
        marginLeft:8,
        fontWeight:'bold',
        color:'#000',
        textDecorationLine: 'underline'
    },
    containerLogin: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:64,
        fontSize: 16,
        fontWeight: '900',

    },
    textLoginDescription:{
        fontSize: 16,
        color: '#000',
    }
})

export default SignIn
