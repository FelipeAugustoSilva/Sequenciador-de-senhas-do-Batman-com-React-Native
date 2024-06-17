import React from 'react';
import  { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './Style';

import { Logo } from '../../components/Logo/Logo';
export default function Home(){
    return(
        <View style={styles.container}>
            <Logo />
            <Text>Opeen up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )       
}



  