import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ButtonPrimary from '../components/ButtonPrimary';

const Onboarding = NativeStack => {
    const goToSignIn = () => {
        NativeStack.navigation.navigate("SignIn")
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Define Yourself In Your Unique Way.
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://res.cloudinary.com/dokwcwo9t/image/upload/v1691248213/idat/onboarding_gxyvdw.png' }} />
            </View>
            <View style={styles.containerButton}>
                <ButtonPrimary
                    onPress={goToSignIn}
                    textButton="Get Started"
                />
            </View>
        </>
    )

}




var styles = StyleSheet.create({
    container: {
        marginLeft: 16,
        paddingTop: 15,

    },
    titleText: {
        fontSize: 50,
        width: '80%',
        color: '#000000',
        fontWeight: 'bold',
        lineHeight: 50
    },
    imageContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,

    },
    image: {
        width: 350,
        height: 600,
    },
    containerButton: {
        width: '100%',
        height: 80,
        backgroundColor: '#FFFFFF',
        borderTopColor: '#b3b3b3',
        borderTopWidth: 1,
        position: "absolute",
        bottom: 0,
        padding: 12
    }

});

export default Onboarding
