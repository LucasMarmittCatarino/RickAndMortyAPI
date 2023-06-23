import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    
    container:{
        alignItems: "center"
    },

    //HEADER
    headerContainer:{
        flex: 1,
        height: 300,
        width: 395
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: 300,
        width: 395,
        position: 'absolute',
    },
    
    //INFOS
    idContainer:{
        flexDirection: "row",
        alignItems: "center",
    },
    textName:{
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: 'black'
    },
    textStatusDefault:{
        fontSize: 18,
        paddingTop: 2,
        color: 'gray'
    },
    aliveText:{
        fontSize: 18,
        paddingTop: 2,
        color: 'green'
    },
    deadText:{
        fontSize: 18,
        paddingTop: 2,
        color: 'red'
    },
    specieText:{
        marginTop: -15,
        fontSize: 15,
        color: 'black',
    },

    //ORIGIN
    defaultOrigin:{
        width:320,
        height: 60,
        borderRadius: 6,
        marginTop: 14,
        alignItems: "center",
        paddingVertical: 6,
        backgroundColor: '#7c7c84'
    },
    aliveOrigin:{
        width:320,
        height: 60,
        borderRadius: 4,
        marginTop: 14,
        alignItems: "center",
        paddingVertical: 6,
        fontWeight: "bold",
        fontSize: 20,
        color: 'white',
        backgroundColor: 'green',
    },
    deadOrigin:{
        width:320,
        height: 60,
        borderRadius: 4,
        marginTop: 14,
        alignItems: "center",
        paddingVertical: 6,
        fontWeight: "bold",
        fontSize: 20,
        color: 'white',
        backgroundColor: 'red',
    },
    originTittle:{
        fontSize: 14,
        color: 'white',
    },
    originText:{
        fontWeight: "bold",
        fontSize: 20,
        color: 'white',
    },

    //ORIGIN INSIDE
    containerOrigin:{
        backgroundColor: '#dfdcde',
        borderBottomStartRadius: 13,
        borderBottomEndRadius: 13,
        paddingTop: 8,
        paddingBottom: 8,
        
    },
    originInfoText:{
        textAlign: "center",
        fontSize: 15,
        color: 'black'
    },

    //EPISODES
    episodesListHeader:{
        marginTop: 12,
        width: 395,
        height: 50,
        paddingVertical: 10,
        paddingLeft: 20,
        backgroundColor: '#dfdcde',
        color: 'black',
        fontSize: 20,
        fontWeight: "bold",
    },
    episodeItem: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },


})

export default style;