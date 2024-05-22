// Menu.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RNPickerSelect from 'react-native-picker-select';

const Menu = ({ navigation }) => {

    const opciones = (opcion) => {
        switch (opcion) {
            case 1:
                navigation.navigate('Inicio');
                break;
            case 2:
                navigation.navigate('Estudiantes');
                break;
            case 3:
                navigation.navigate('ComidasFavoritas');
                break;
            default:
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menú Principal</Text>
            <View style={styles.menuContainer}>
                <RNPickerSelect
                    onValueChange={(value) => opciones(value)}
                    placeholder={{ label: 'Selecciona una pantalla...', value: null }}
                    items={[
                        { label: 'Regresar a Inicio', value: 1 },
                        { label: 'Estudiantes', value: 2 },
                        { label: 'Ver comidas favoritas', value: 3 },
                    ]}
                    style={pickerSelectStyles}
                />
            </View>
        </View>
    );
};

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    menuContainer: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
