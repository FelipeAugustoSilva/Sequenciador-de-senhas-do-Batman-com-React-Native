//rnbc criar a estrutura do componente automatica

import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyle';

export function BatTextInput() {
    return(
        <>
            <TextInput style={styles.inputer} placeholder='senha'>
            
            </TextInput>
        </>
    )
}