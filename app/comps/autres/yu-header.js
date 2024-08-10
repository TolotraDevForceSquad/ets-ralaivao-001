import { View, Image, Text, Pressable } from "react-native";

const YuHeader = ({ titre, close }) => {
    return (
        <View style={{
            padding: 5, 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            paddingLeft: 11,
            paddingRight: 11,
            backgroundColor: '#0f5223',
            width: '100%',
        }}>
            <View style={{flexDirection: 'row'}}>
                <Pressable onPress={() => close()}>
                    <Image source={require('../../assets/images/ic_back.png')} style={{width: 25, height: 25, tintColor: '#ffffff'}}/>
                </Pressable>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>{titre}</Text>
            </View>
            <Pressable onPress={() => setShowMenu(false)}>
                <Image source={require('../../assets/images/hun.png')} style={{width: 100, height: 30, tintColor: '#ffffff'}}/>
            </Pressable>
        </View>
    )
}

export default YuHeader;