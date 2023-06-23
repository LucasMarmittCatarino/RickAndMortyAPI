import React from "react";
import { Text, View, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const image = require("../../assets/images/homeBackground.jpg");
import style from './style'


const Header = () => {

    return (
        <View style={style.headercontainer}>

            <ImageBackground source={image} resizeMode="cover" style={style.image}>

                <View style={style.opacidade} />
                <Text style={style.headerTittle}>The Rick and Morty API</Text>
                <Text style={style.headerSubTittle}>by Lucas Marmitt Catarino</Text>
                
                <LinearGradient
                colors={["rgba(0, 0, 0, 0)", "#272323"]}
                style={style.gradient}
                />

            </ImageBackground>

        </View>
    )
}

export default Header;