import React from "react";
import { View, Text, Pressable, TextInput, Image, Modal, ScrollView } from "react-native";
import { useAuto } from "../../contexts/ctx-vehicules";
import MyHeader from "../autres/my-header";
import MyModal from "../autres/my-modal";
import style from '../../assets/scss/style';

const AddVehicule = () => {
    const {
        showAddAuto, setShowAddAuto,
    } = useAuto();

    return (
        <MyModal show={showAddAuto} hide={() => setShowAddAuto(false)} anim={'fade'}>
            <View style={style.yu_ctn1}>
                <ScrollView style={{width: '100%'}} contentContainerStyle={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../assets/images/hun.png')} style={{width: 200, height: 60, tintColor: '#ffffff'}}/>
                    <Text style={style.titre_1}>Nouveau vehicule</Text>
                    <TextInput style={style.yu_input}
                        placeholder="Marque"
                    />
                    <TextInput style={style.yu_input}
                        placeholder="Modèle "
                    />
                    <TextInput style={style.yu_input}
                        placeholder="Immatricule"
                    />
                    <TextInput style={style.yu_input}
                        placeholder="Carburant"
                    />
                    <TextInput style={style.yu_input}
                        placeholder="Année"
                    />
                    <TextInput style={style.yu_input}
                        placeholder="Kilométrage"
                    />
                    <View style={style.yu_lign}></View>
                    <Pressable style={[style.yu_btn1]}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Enregistrer</Text>
                    </Pressable>
                    <Pressable style={[style.yu_input, {justifyContent: 'center', alignItems: 'center',backgroundColor: 'none', borderWidth: 1, borderColor: 'white'}]}
                        onPress={() => {
                            setShowAddAuto(false)
                        }}
                    >
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Annuler</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </MyModal>
    )
}

export default AddVehicule;