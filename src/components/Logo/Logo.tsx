//rnbc  - com o R componenst que é p snippets que cria tudo automatico;
import React from 'react';
import { View, Text, Image} from 'react-native';

import { styles } from './LogoStyle';
import LogoImg from '../../../assets/cadeado.png';
export function Logo() {
    return(
        <View >
            <Text style={styles.title}>
                Strong Pass Generator
            </Text>
            <Image source={LogoImg}/>
            
        </View>
    )
}