import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    headercontainer:{
        height: 695,
    },
    headerTittle:{
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 800,
    },
    headerSubTittle:{
        color: 'white',
        textAlign: 'center',
        
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    opacidade:{
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 20,
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
      },
})

export default style;