import React from "react";
import { View, Text, ScrollView, Pressable, Image, StyleSheet } from "react-native";
import style from "./assets/scss/style";
import MyModal from "./comps/autres/my-modal";
import YuHeader from "./comps/autres/yu-header";
import { useGlb } from "./contexts/ctx-globals";

const NavMenu = () => {
    const {
        showMenu, setShowMenu,
        nav, setNav,
    } = useGlb()
    return (
        <MyModal show={showMenu} hide={() => setShowMenu(false)} anim={'slide'}>
            <YuHeader titre={'Menu'} close={() => setShowMenu(false)}/>
            <ScrollView style={{width: '100%'}} contentContainerStyle={style.yu_scroll} showsVerticalScrollIndicator={false}>
                <View style={s.contente}>
                    <Pressable style={s.item_press}
                        onPress={() => {
                            nav.navigate('vehicule')
                            setShowMenu(false)
                        }}
                    >
                        <Image source={require('./assets/images/gv.png')} style={{width: 100, height: 100, tintColor: '#ffffff'}}/>
                        <Text style={s.item_text}>GERER LES VEHICULES</Text>
                    </Pressable>
                    <Pressable style={s.item_press}
                        onPress={() => {
                            nav.navigate('preventif')
                            setShowMenu(false)
                        }}
                    >
                        <Image source={require('./assets/images/ent.png')} style={{width: 100, height: 100, tintColor: '#ffffff'}}/>
                        <Text style={s.item_text}>GERER LES ENTRETIENS</Text>
                    </Pressable>
                </View>
                <View style={s.contente}>
                    <Pressable style={s.item_press}
                        onPress={() => {
                            nav.navigate('suivi')
                            setShowMenu(false)
                        }}
                    >
                        <Image source={require('./assets/images/sui.png')} style={{width: 100, height: 100, tintColor: '#ffffff'}}/>
                        <Text style={s.item_text}>SUIVI D' ENTRETIENS</Text>
                    </Pressable>
                    <Pressable style={s.item_press}
                        onPress={() => {
                            nav.navigate('suivi')
                            setShowMenu(false)
                        }}
                    >
                        <Image source={require('./assets/images/rep.png')} style={{width: 100, height: 100, tintColor: '#ffffff'}}/>
                        <Text style={s.item_text}>REPARATIONS</Text>
                    </Pressable>
                </View>

                <View style={s.contente}>
                    <Pressable style={s.item_press}
                        onPress={() => {
                            nav.navigate('suivi')
                            setShowMenu(false)
                        }}
                    >
                        <Image source={require('./assets/images/frs.png')} style={{width: 100, height: 100, tintColor: '#ffffff'}}/>
                        <Text style={s.item_text}>FOURNISSEURS DE SERVICES</Text>
                    </Pressable>
                    <Pressable style={[s.item_press, {borderWidth: 0}]}></Pressable>
                </View>
            </ScrollView>
        </MyModal>
    )
}

const s = StyleSheet.create({
    contente : {
        height: 200,
        flexDirection: 'row',
        margin: 5
    },
    item_press : {
        flex: 1,
        padding: 5,
        borderWidth: 1,  
        borderColor: '#EEEEEE',
        margin: 5,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    item_text : { 
        color: '#EEEEEE',
        fontWeight: 'bold', 
        marginTop: 10,
        textAlign: 'center' 
    },
})

export default NavMenu;