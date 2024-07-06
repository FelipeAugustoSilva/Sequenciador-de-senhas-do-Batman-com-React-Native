
import React, { useState } from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';

import generatePass from "../../services/passwordService";

export function BatButton() {

  const [pass, setPass] = useState('')

  function handleGenerateButton() {
    let genetateToken = generatePass()
    setPass(genetateToken)
  }

  function hnadleCopyButton(){
    Clipboard.setStringAsync(pass)
  }

  return (
    <View>
        <>
            <BatTextInput pass={pass} />

            <Pressable onPress={handleGenerateButton} style={styles.button}>
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>

            <Pressable onPress={hnadleCopyButton} style={styles.button}>
                <Text style={styles.text}>COPY</Text>
            </Pressable>
        </>   
    </View>
    
        

      
  );
}