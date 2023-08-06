import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function ChatList({ data, deleteRoom, userStatus }) {
    const navigation = useNavigation();

    function openChat() {
        userStatus ?  navigation.navigate("Messages", { thread: data }) : navigation.navigate("SingIn")       
    }

    return (
        <TouchableOpacity onPress={openChat} onLongPress={() => deleteRoom && deleteRoom()}>
            <View style={styles.row}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.nameText} numberOfLines={1}>{data.name}</Text>
                    </View>

                    <Text style={styles.contentTExt} numberOfLines={1}>
                        {data.lastMessage.text}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(241,240,245,0.5)',
        marginVertical: 4
    },
    content: {
        flexShrink: 1
    },
    header: {
        flexDirection: 'row'
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    contentTExt: {
        color: '#C1C1C1',
        fontSize: 16,
        marginTop: 2,
    },
})