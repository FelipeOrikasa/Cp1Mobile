import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Resultado({ resultado }) {
    return (
        <View style={styles.resultado}>
            <Text>Valor Inicial: R$ {resultado.valorOriginal}</Text>
            <Text>Percentual de Aumento: {resultado.percentualAumento}%</Text>
            <Text>Valor do Aumento: R$ {resultado.aumento}</Text>
            <Text>Novo Valor: R$ {resultado.novoValor}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    resultado: {
        marginTop: 10,
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '200%',
        alignItems: 'center',
    },
});