import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { bookStore } from '../data/books';
import { Button, Card } from '@rneui/themed';



export default function About({ navigation }) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("Started")
        setData(bookStore);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to the dashboard!</Text>
            <Button
                title="Show data"
                type="outline"
                onPress={() => addingData()}
                buttonStyle={{
                    borderColor: '#222A68',
                    borderWidth: 1,
                    borderRadius: 5
                }} />
            {
                data && data.books.map((b, index) => {
                    if (b.category.toLowerCase() == 'java') {
                        return (
                            <View key={index}>
                                <Card>
                                    <Text style={styles.title}>{b.title}</Text>
                                    <Card.Divider style={styles.divi} />
                                    {
                                        b.authors && b.authors.map((a, ind) => {
                                            return (
                                                <View key={ind} >
                                                    <Text style={styles.writer}>{a}</Text>
                                                </View >
                                            )
                                        })
                                    }
                                </Card>
                            </View >
                        )
                    }
                })
            }
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 45,
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic'
    },
    card: {
        display: 'flex',
        width: 5,
        height: 10,
        borderColor: '#222A68',
        borderRadius: 10
    },
    header: {
        display: 'flex',
        color: '#222A68',
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 20,
    },
    writer: {
        marginTop: 5
    },
    divi: {
        height: 10,
        color: '#222A68'
    }
});