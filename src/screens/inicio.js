// screens/Inicio.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import data from '../data/informacion';

const inicio = () => {
    const informacion = data;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil 3 - integrantes</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={informacion}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.text}>{item.edad}</Text>
                            <Text style={styles.text}>{item.especialidad}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <Text style={styles.texto}>Pantalla 1: Crear una pantalla con información de los estudiantes, mostrar el nombre, carné y foto de los estudiantes. Mostrar la información de los estudiantes en forma de card.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    flatListContainer: {
        height: 200,
        marginHorizontal: 5
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginEnd: 10
    },
    texto: {
        marginHorizontal: 15
    }
});

export default inicio;
