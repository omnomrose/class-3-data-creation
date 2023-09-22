import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Home({ navigation }) {
    const [number, setNumber] = useState(1);

    const check = () => {
        if (number == 1) {
            console.log("ONE");
        } else if (number == 2) {
            console.log("TWO");
        } else if (number == 3) {
            navigation.push('About');
        }
        setNumber(number + 1);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => check()}
                style={number === 1 ? styles.btnBlue : number === 2 ? styles.btnRed : styles.btnGreen}>
                <Text style={styles.txt}>Click me!</Text>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#ACBED8',
        borderColor: '#ACBED8',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10
    },
    btnRed: {
        alignItems: 'center',
        backgroundColor: '#800000',
        borderColor: '#800000',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10
    },
    btnGreen: {
        alignItems: 'center',
        backgroundColor: '#4E6E5D',
        borderColor: '#4E6E5D',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10
    },
    txt: {
        color: '#E8EBF7'
    }
});
