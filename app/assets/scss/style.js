import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window")
export default StyleSheet.create({
    bg_main: {
        backgroundColor: '#0f5223',
        flex: 1,
        height: height,
    },
    titre_1: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 25,
    },
    titre_2: {
        color: '#ffffff',
        fontSize: 20,
    },
    yu_input: {
        marginTop: 15,
        height: 45,
        width: '100%',
        backgroundColor: '#198639',
        borderRadius: 10,
        color: '#c4eed0',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
    },
    two_tri: {
        paddingTop: 10,
        paddingBottom: 20,
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    yu_list: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        backgroundColor: '#198639',
        marginBottom: 15,
    },
    yu_add: {
        position: 'absolute', 
        bottom: 11,
        right: 11,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#ffffff'
    },

    yu_btn1: {
        marginTop: 15,
        height: 45,
        width: '100%',
        backgroundColor: '#198639',
        borderRadius: 10,
        color: '#c4eed0',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#1EA446'
    },
    yu_ctn1: {
        backgroundColor: '#0f5223',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, 
        width: '100%',
    },
    yu_lign: {
        width:'50%',
        padding: 1,
        backgroundColor: 'white',
        marginTop: 15,
    },
    yu_scroll: {
        backgroundColor: '#0f5223',
        minHeight: '100%',
        paddingHorizontal: 10,
    },
    // Menu
    m_presse: {
        borderWidth: 1,
        padding: 5,
        borderColor: 'white',
        paddingHorizontal: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    m_text: {color: 'white', fontSize: 20,},
    
})