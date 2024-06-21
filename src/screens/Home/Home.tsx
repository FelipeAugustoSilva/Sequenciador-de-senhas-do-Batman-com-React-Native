import React from 'react';
import  { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './Style';

import { Logo } from '../../components/Logo/Logo';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';

export default function Home(){
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>

            <View >
                <BatTextInput />
            </View>
            
            
            <StatusBar style="auto" />
        </View>
    )       
}



  