import React from 'react';
import  { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './Style';

import { Logo } from '../../components/Logo/Logo';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';
import { BatButton } from '../../components/BatButton/BatButton';

export default function Home(){
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>

            <View style={styles.inputContainer}>
                <BatTextInput />
                <BatButton/>
            </View>

           
            

            
            <StatusBar style="light" />
        </View>
    )       
}



  