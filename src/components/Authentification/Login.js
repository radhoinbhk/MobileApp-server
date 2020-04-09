import React, { useState } from "react";
import { View } from 'react-native';
import { TextInput } from "react-native-paper";


export default function Login(props) {
    const [text, setText] = useState("")


    return (
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
            <TextInput
                style={{ width: 300 }}
                label='Email'
                value={text}
                onChangeText={text => setText({ text })}
            />
        </View>
    );
}

