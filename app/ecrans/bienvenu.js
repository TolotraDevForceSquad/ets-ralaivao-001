import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";

const Bienvenu = ({ navigation }) => {
    return (
        <ImageBackground style={{
            backgroundColor: '#0f5223',
            flex: 1,
        }}>
            <View style={{ 
                flex: 1,
                // backgroundColor: 'red',
            }}></View>

            <View style={{ 
                flex: 3,
            }}></View>

            <View style={{
                flex: 1,
                // backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Pressable style={{
                    backgroundColor: '#1ea446',
                    padding: 10,
                    borderRadius: 10,
                    width: '80%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                    onPress={() => navigation.navigate('vehicule')}
                >
                    <Text style={{ color: '#ffffff', fontSize: 30, fontWeight: 'bold'}}>C'est parti</Text>
                </Pressable>
            </View>
            
        </ImageBackground>
    )
}
export default Bienvenu;