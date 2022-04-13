/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#F0F0F0',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    innerContainer: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#000',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    year: {
        marginLeft: 10,
        color: 'gray',
        fontSize: 12,
    },
    artist: {
        color: '#000',
    },
    soldoutContainer:{
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    soldoutTitle:{ color: 'red' },
    contentContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
});
