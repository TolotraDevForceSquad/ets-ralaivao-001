import { View, Image, Text, Pressable } from "react-native";
import { useGlb } from "../../contexts/ctx-globals";

const MyHeader = () => {
    const {
        showMenu, setShowMenu,
    } = useGlb()

    return (
        <View style={{
            padding: 5, 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            paddingLeft: 11,
            paddingRight: 11,
            backgroundColor: '#0f5223',
        }}>
            <View style={{flexDirection: 'row'}}>
                <Pressable>
                    <Image source={require('../../assets/images/ic_back.png')} style={{width: 25, height: 25, tintColor: '#ffffff'}}/>
                </Pressable>
                <Image source={require('../../assets/images/hun.png')} style={{width: 100, height: 30, tintColor: '#ffffff'}}/>
            </View>
            <Pressable onPress={() => setShowMenu(true)}>
                <Image source={require('../../assets/images/ic_menu.png')} style={{width: 25, height: 25, tintColor: '#ffffff'}}/>
            </Pressable>
        </View>
    )
}

export default MyHeader;