import React from 'react';
import { View, Image, Text } from 'react-native';

import style from './style';

const APICharacterCell = ({item}) =>{

    return(

        <View style={style.celula}>

            <View style={style.celulaInterna}>
                <Image source={{uri:item.image}} style={style.image}></Image>
                <Text style={style.text}>{item.name}</Text>
            </View>
            
            <Text style={style.textSign}>{'>'}</Text>

        </View>

    );
}

export default APICharacterCell;