import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Resultado from '../components/Resultado';
export default function TelaInicial() {
    const [nomeProduto, setNomeProduto] = useState('');
    const [valorOriginal, setValorOriginal] = useState('');
    const [percentualAumento, setPercentualAumento] = useState('');
    const [resultado, setResultado] = useState(null);
    const calcularAumento = () => {
        if (!nomeProduto || !valorOriginal || !percentualAumento) {
            alert('Preencha todos os campos');
            return;
        }
        const valor = parseFloat(valorOriginal);
        const percentual = parseFloat(percentualAumento);
        if (isNaN(valor) || isNaN(percentual)) {
            alert('Digite valores válidos');
            return;
        }
        const aumento = (valor * percentual) / 100;
        const novoValor = valor + aumento;
        setResultado({
            valorOriginal: valor.toFixed(2),
            percentualAumento: percentual.toFixed(2),
            aumento: aumento.toFixed(2),
            novoValor: novoValor.toFixed(2),
        });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculadora de Aumento do Preço</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira o nome do produto"
                value={nomeProduto}
                onChangeText={setNomeProduto}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor Inicial"
                keyboardType="numeric"
                value={valorOriginal}
                onChangeText={setValorOriginal}
            />
            <TextInput
                style={styles.input}
                placeholder="Percentual de Aumento (%)"
                keyboardType="numeric"
                value={percentualAumento}
                onChangeText={setPercentualAumento}
            />
            <TouchableOpacity style={styles.botao} onPress={calcularAumento}>
                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
            {resultado && <Resultado resultado={resultado} />}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#455A8EFF',
        padding: 400,
    },
    titulo: {
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 2,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 20,
        borderColor: '#ccc',
    },
    botao: {
        backgroundColor: '#282EA7FF',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        width: '20%',
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});