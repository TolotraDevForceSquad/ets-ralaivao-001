import React, { useEffect } from "react";
import { View, Text, Pressable, TextInput, Image, ScrollView } from "react-native";
import MyHeader from "../comps/autres/my-header";
import { usePrev } from "../contexts/ctx-preventifs";
import style from "../assets/scss/style";
import { useGlb } from "../contexts/ctx-globals";
import MyOption from "../comps/autres/my-option";
import AddPreventif from "../comps/preventifs/add-preventif";

const Preventif = ({ navigation }) => {
    useEffect(()=> {
        setNav(navigation);
    }, []);

    const {
        showAddPrev, setShowAddPrev,
    } = usePrev();

    const {  
        nav, setNav,
        showOption, setShowOption,
    } = useGlb();
    
    return (
        <View style={[style.bg_main]}>
            <MyHeader />
            <View style={{padding: 10, paddingTop: 0 , flex: 1}}>
                <Text style={style.titre_1}>Entretiens préventifs</Text>
                <Text style={style.titre_2}>Gérer vos entretiens préventifs</Text>
                <TextInput style={style.yu_input}
                    placeholder="Rechercher un entretien préventif"
                />
                <View style={style.two_tri}>
                    <Text style={{ fontSize: 15, color: '#ffffff', }}>Liste des entretiens préventifs</Text>
                    <Text style={{ fontSize: 15, color: '#4c8df6', }}>Trier</Text>
                </View>
                <ScrollView style={{height: 0}} showsVerticalScrollIndicator={false}>
                    {[...Array(50).keys()].map((i) => (
                    <Pressable key={i} style={style.yu_list} onPress={() => setShowOption(true)}>
                        <Text style={{color: '#FB6806', fontWeight: 'bold', fontSize: 20}}>2001 ABC</Text>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>
                            Type d'entretien : <Text style={{color: '#FB6806'}}>Changement de pneu</Text>, 
                            
                        </Text>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>
                            <Text>Intervalle kilometrage : </Text><Text style={{color: '#FB6806'}}>20000</Text>,
                            <Text> Intervalle Temps : </Text><Text style={{color: '#FB6806'}}>3 Mois</Text>
                        </Text>
                    </Pressable>
                    ))}
                </ScrollView>
            </View>
            <Pressable style={style.yu_add}
                onPress={() => setShowAddPrev(true)}
            >
                <Image source={require('../assets/images/ic_add.png')} style={{width: 50, height: 50, tintColor: '#ffffff'}}/>
            </Pressable>
            <MyOption />
            <AddPreventif />
        </View>
    )
}
export default Preventif;