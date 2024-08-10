import React, { useEffect } from "react";
import { View, Text, Pressable, TextInput, Image, ScrollView } from "react-native";
import MyHeader from "../comps/autres/my-header";
import AddVehicule from "../comps/vehicules/add-vehicule";
import { useAuto } from "../contexts/ctx-vehicules";
import style from "../assets/scss/style";
import { useGlb } from "../contexts/ctx-globals";
import MyOption from "../comps/autres/my-option";

const Vehicule = ({ navigation }) => {
    useEffect(()=> {
        setNav(navigation);
    }, []);

    const {
        showAddAuto, setShowAddAuto,
    } = useAuto();

    const {  
        nav, setNav,
        showOption, setShowOption,
    } = useGlb();
    
    return (
        <View style={[style.bg_main]}>
            <MyHeader />
            <View style={{padding: 10, paddingTop: 0 , flex: 1}}>
                <Text style={style.titre_1}>Véhicules</Text>
                <Text style={style.titre_2}>Gérer vos véhicules</Text>
                <TextInput style={style.yu_input}
                    placeholder="Rechercher un véhicules"
                />
                <View style={style.two_tri}>
                    <Text style={{ fontSize: 15, color: '#ffffff', }}>Liste des véhicules</Text>
                    <Text style={{ fontSize: 15, color: '#4c8df6', }}>Trier</Text>
                </View>
                <ScrollView style={{height: 0}} showsVerticalScrollIndicator={false}>
                    {[...Array(50).keys()].map((i) => (
                    <Pressable key={i} style={style.yu_list} onPress={() => setShowOption(true)}>
                        <Text style={{color: '#FB6806', fontWeight: 'bold', fontSize: 20}}>2001 ABC</Text>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>
                            Marque : <Text style={{color: '#FB6806'}}>Nissan</Text>, 
                            <Text> Modèle : </Text><Text style={{color: '#FB6806'}}>405</Text>
                            <Text> Année : </Text><Text style={{color: '#FB6806'}}>2010</Text>
                        </Text>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>
                            Carburant : <Text style={{color: '#FB6806'}}>Diesel</Text>, 
                            <Text> Kolometrage : </Text><Text style={{color: '#FB6806'}}>7500</Text>
                        </Text>
                    </Pressable>
                    ))}
                </ScrollView>
            </View>
            <Pressable style={style.yu_add}
                onPress={() => setShowAddAuto(true)}
            >
                <Image source={require('../assets/images/ic_add.png')} style={{width: 50, height: 50, tintColor: '#ffffff'}}/>
            </Pressable>
            <MyOption />
            <AddVehicule />
        </View>
    )
}
export default Vehicule;