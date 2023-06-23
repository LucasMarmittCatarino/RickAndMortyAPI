import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    loader: {
        paddingTop: 5,
        backgroundColor: 'transparent'
    },
    container:{
        backgroundColor: '#f0f0f0f0',
        flex: 1,
    },
    lista:{
        paddingTop: 20,
    },

    //Styles celula de personagem
    celula:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        width: 350,
        height: 105,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        elevation: 10
    },
    celulaInterna:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    text:{
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: 400,
    },
    textSign:{
        color: 'black',
        fontSize: 18,
        fontWeight: 400
    },
    //Fim Style Celula
    buttomContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 55,
        borderTopWidth: 2,
        borderTopColor: '#c1c1c1'

    },
    buttom:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        

    },
    buttomText:{
        color: 'black',
        fontSize: 17,
        paddingHorizontal: 10,
        fontWeight: 600
    },
    mirrorText: {
        transform: [{ scaleX: -1 }],
    },
})

export default styles;