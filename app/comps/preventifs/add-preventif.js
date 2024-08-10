import React from "react";
import { View, Text, Pressable, TextInput, Image, Modal, ScrollView } from "react-native";
import { usePrev } from "../../contexts/ctx-preventifs";
import MyHeader from "../autres/my-header";
import MyModal from "../autres/my-modal";
import style from '../../assets/scss/style';

const AddPreventif = () => {
    const {
        showAddPrev, setShowAddPrev,
    } = usePrev();

    return (
        <MyModal show={showAddPrev} hide={() => setShowAddPrev(false)} anim={'fade'}>
            <View style={style.yu_ctn1}>
                <ScrollView style={{width: '100%'}} contentContainerStyle={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../assets/images/hun.png')} style={{width: 200, height: 60, tintColor: '#ffffff'}}/>
                    <Text style={style.titre_1}>Nouvelle entretien préventif</Text>
                    <TextInput style={style.yu_input}
                        placeholder="Véhicules"
                    />
                    <TextInput style={style.yu_input}
                        placeholder="Type d'entretien"
                    />
                    <TextInput style={style.yu_input}
                        placeholder="Intervalle kilométrage"
                    />
                    <TextInput style={style.yu_input}
                        placeholder="Intervalle temps"
                    />
                    <View style={style.yu_lign}></View>
                    <Pressable style={[style.yu_btn1]}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Enregistrer</Text>
                    </Pressable>
                    <Pressable style={[style.yu_input, {justifyContent: 'center', alignItems: 'center',backgroundColor: 'none', borderWidth: 1, borderColor: 'white'}]}
                        onPress={() => {
                            setShowAddPrev(false)
                        }}
                    >
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Annuler</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </MyModal>
    )
}

export default AddPreventif;