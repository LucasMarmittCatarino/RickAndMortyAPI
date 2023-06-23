import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tabBarStyle:{
        backgroundColor: '#282424',
        borderTopWidth: 0,
        height: 60,
    },
    icons: {
        height: 30,
        width: 30,
    },
    tabHomeOptions: {
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {
        fontSize: 12,
        paddingBottom: 4,
        fontWeight: '600',
        },
    },
    tabCharactersOptions: {
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {
        fontSize: 12,
        paddingBottom: 4,
        fontWeight: '600',
        },
    },
});

export default styles;
