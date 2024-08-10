import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { useGlb } from "../../contexts/ctx-globals";
import MyModal from "./my-modal";

const MyOption = ({ mod, sup }) => {
    const {
        showOption, setShowOption,
    } = useGlb(); 

    return (
        <MyModal show={showOption} hide={() => setShowOption(false)}>
            <View style={styles.ctn_choix}> 
                <Pressable style={[styles.btn_action, {
                    borderBottomWidth: 1,
                    borderBottomColor: 'white',
                }]} onPress={() => mod()}>
                    <Text style={styles.btn_text}>Modifier</Text>
                </Pressable>
                <Pressable style={styles.btn_action} onPress={() => sup()}>
                    <Text style={styles.btn_text}>Supprimer</Text>
                </Pressable>                    
            </View>
        </MyModal>
    )
}

const styles = StyleSheet.create({
    btn_action: {
        padding: 10,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ctn_choix: {
        backgroundColor: '#198639', 
        padding: 10, 
        width: '70%', 
        borderRadius: 10, 
        alignItems: "center",
        alignSelf: 'center',
    },
    btn_text: {
        color: 'white', fontWeight: 'bold',
    }
})

export default MyOption;