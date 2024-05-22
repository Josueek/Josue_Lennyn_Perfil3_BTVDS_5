// ComidasFavoritas.js
import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import data from '../data/comidas';

const ComidasFavoritas = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comidas Favoritas</Text>
            <Text>Pantalla 2: Crear un arreglo de objetos con la información de sus comidas favoritas y mostrarlo en la pantalla.</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <Image source={item.src} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },
});

export default ComidasFavoritas;
