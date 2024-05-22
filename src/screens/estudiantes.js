// screens/Estudiantes.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Modal, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Estudiantes = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [modalV, setModalV] = useState(false);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [carnet, setCarnet] = useState('');
    const [materiaFav, setMateriaFav] = useState('');

    useEffect(() => {
        cargarEstudiantes();
    }, []);

    const cargarEstudiantes = async () => {
        try {
            const datosEstudiantes = await AsyncStorage.getItem('estudiantes');
            if (datosEstudiantes) {
                setEstudiantes(JSON.parse(datosEstudiantes));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const AgregarEstudiante = async () => {
        if (nombre && edad && carnet && materiaFav) {
            const NuevoEstudiante = { id: Date.now().toString(), nombre, edad, carnet, materiaFav };
            const CargarEstudiantes = [...estudiantes, NuevoEstudiante];
            setEstudiantes(CargarEstudiantes);
            await AsyncStorage.setItem('estudiantes', JSON.stringify(CargarEstudiantes));
            setNombre('');
            setEdad('');
            setCarnet('');
            setMateriaFav('');
            setModalV(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.Titulo}>Formulario de registros para alumnos</Text>
            <Button title="Agregar Estudiantes" onPress={() => setModalV(true)} />
            <FlatList
                data={estudiantes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.Campos}>
                        <Text>Nombre: {item.nombre}</Text>
                        <Text>Edad: {item.edad}</Text>
                        <Text>Carnet: {item.carnet}</Text>
                        <Text>Materia favorita: {item.materiaFav}</Text>
                    </View>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalV}
                onRequestClose={() => setModalV(false)}
            >
                <View style={styles.VerModal}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa un nombre"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa la edad"
                        value={edad}
                        onChangeText={setEdad}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Número de carnet"
                        value={carnet}
                        onChangeText={setCarnet}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="¿Cual es tu materia favorita? :p"
                        value={materiaFav}
                        onChangeText={setMateriaFav}
                    />
                    <TouchableOpacity style={styles.button} onPress={AgregarEstudiante}>
                        <Text style={styles.buttonText}>Agregar estudiante</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={() => setModalV(false)}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    Campos: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    VerModal: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        width: 200,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginBottom: 10,
    },
    buttonClose: {
        backgroundColor: '#f44336',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    Titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center'
    },
});

export default Estudiantes;
