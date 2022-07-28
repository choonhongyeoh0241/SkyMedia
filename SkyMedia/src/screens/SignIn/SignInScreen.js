import React, {useState} from 'react';
import { View, ScrollView, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/SkyMedia.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import GoogleAPI from '../../components/GoogleSignIn';

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignIn = () => 
    {
        console.warn("Sign In");
    }
    
    const onForgotPass = () =>
    {
        console.warn("Forgot Password");
    }

    const onFacebook = () =>
    {
        console.warn("Sign in with Facebook");
    }

    const onGoogle = () =>
    {
        console.warn("Sign in with Google");
    }

    const onRegister = () =>
    {
        console.warn("Register");
    }

    return (
        
        <View style={[styles.root, {height: height*1.2}]}>
            <Image 
                source={Logo} 
                style={styles.logo}
                resizeMode='contain'
                />

            <CustomInput value={userName} 
                        setValue={setUserName} 
                        placeholder="Enter Your Name" 
                        secureTextEntry={false} />

            <CustomInput value={password} 
                        setValue={setPassword} 
                        placeholder="Enter Your Password" 
                        secureTextEntry={true}/>

            <CustomButton onPress={onSignIn} text="Sign In" type='PRIMARY'/>
            <CustomButton onPress={onForgotPass} text="Forgot Password" type='SECONDARY'/>

            {/* <CustomButton onPress={onGoogle} text="Sign In with Google" bgColor='#FAE9EA' fontColor='#DD4D44'/> */}
            <GoogleAPI />
            <CustomButton onPress={onFacebook} text="Sign In with Facebook" bgColor='#E7EAF4' fontColor='#4765A9'/>

            <CustomButton onPress={onRegister} text="Register New Account" type='SECONDARY'/>

        </View>
       
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        paddingTop: 80,

        marginVertical: 20
    },

    logo:{
        maxWidth: 500,
        width:300,
        height: 350,
        maxHeight:500
    },
});

export default SignIn