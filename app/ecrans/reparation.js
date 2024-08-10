import React, { useEffect } from "react";
import { View, Text, Pressable, TextInput, Image, ScrollView } from "react-native";
import MyHeader from "../comps/autres/my-header";
import style from "../assets/scss/style";
import { useGlb } from "../contexts/ctx-globals";
import { useRep } from "../contexts/ctx-reparations";
import MyOption from "../comps/autres/my-option";
import AddRep from "../comps/reparations/add-reparation";

const Rep = ({ navigation }) => {
    useEffect(()=> {
        setNav(navigation);
    }, []);

    const {
        showAddRep, setShowAddRep,
    } = useRep();

    const {  
        nav, setNav,
        showOption, setShowOption,
    } = useGlb();
    
    return (
        <View style={[style.bg_main]}>
            <MyHeader />
            <View style={{padding: 10, paddingTop: 0 , flex: 1}}>
                <Text style={style.titre_1}>Réparation</Text>
                <Text style={style.titre_2}>Gérer les réparation</Text>
                <TextInput style={style.yu_input}
                    placeholder="Rechercher un entretien préventif"
                />
                <View style={style.two_tri}>
                    <Text style={{ fontSize: 15, color: '#ffffff', }}>Liste des réparation</Text>
                    <Text style={{ fontSize: 15, color: '#4c8df6', }}>Trier</Text>
                </View>
                <ScrollView style={{height: 0}} showsVerticalScrollIndicator={false}>
                    {[...Array(50).keys()].map((i) => (
                    <Pressable key={i} style={style.yu_list} onPress={() => setShowOption(true)}>
                        <Text style={{color: '#FB6806', fontWeight: 'bold', fontSize: 20}}>2023-12-15</Text>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>
                            Voiture : <Text style={{color: '#FB6806'}}>2376 FR</Text>,
                            <Text> Description : </Text><Text style={{color: '#FB6806'}}>Changement de frein</Text>   
                        </Text>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>
                            <Text>kilometrage : </Text><Text style={{color: '#FB6806'}}>20000</Text>,
                            <Text> Cout de l'entretien : </Text><Text style={{color: '#FB6806'}}>600$</Text>
                            <Text> Fournisseur de service : </Text><Text style={{color: '#FB6806'}}>600$</Text>
                        </Text>
                    </Pressable>
                    ))}
                </ScrollView>
            </View>
            <Pressable style={style.yu_add}
                onPress={() => setShowAddRep(true)}
            >
                <Image source={require('../assets/images/ic_add.png')} style={{width: 50, height: 50, tintColor: '#ffffff'}}/>
            </Pressable>
            <MyOption />
            <AddRep />
        </View>
    )
}
export default Rep;