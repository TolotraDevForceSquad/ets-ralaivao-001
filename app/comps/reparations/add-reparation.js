import React from "react";
import { View, Text, Pressable, TextInput, Image, Modal, ScrollView } from "react-native";
import { useRep } from "../../contexts/ctx-reparations";
import MyHeader from "../autres/my-header";
import MyModal from "../autres/my-modal";
import style from '../../assets/scss/style';

const AddRep = () => {
    const {
        showAddRep, setShowAddRep,
    } = useRep();

    return (
        <MyModal show={showAddRep} hide={() => setShowAddRep(false)} anim={'fade'}>
            <View style={style.yu_ctn1}>
                <ScrollView style={{width: '100%'}} contentContainerStyle={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../assets/images/hun.png')} style={{width: 200, height: 60, tintColor: '#ffffff'}}/>
                    <Text style={style.titre_1}>Nouveau suivi d'entretien</Text>
                    <TextInput style={style.yu_input}
                        placeholder="Entretien Préventifs"
                    />
                    <TextInput style={style.yu_input}
                        placeholder="date de l'entretien"
                    />
                    <TextInput style={style.yu_input}
                        placeholder="kilométrage"
                    />
                    <TextInput style={style.yu_input}
                        placeholder="Coût de l’entretien"
                    />
                    <View style={style.yu_lign}></View>
                    <Pressable style={[style.yu_btn1]}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Enregistrer</Text>
                    </Pressable>
                    <Pressable style={[style.yu_input, {justifyContent: 'center', alignItems: 'center',backgroundColor: 'none', borderWidth: 1, borderColor: 'white'}]}
                        onPress={() => {
                            setShowAddRep(false)
                        }}
                    >
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Annuler</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </MyModal>
    )
}

export default AddRep;