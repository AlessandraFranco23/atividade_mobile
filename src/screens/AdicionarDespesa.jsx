import { Text, View } from "react-native";
import { useState } from "react";
import { Appbar, Button, TextInput as TextInputNP } from "react-native-paper";
import styles from "../config/styles";
import { TransacaoRepository } from "../repository/TransacaoRepository";


export default function AdicionarDespesa({navigation}) {
    const [valor, setValor] = useState({
        quantia: "",
        categoria: "",
    });
    const repository = new TransacaoRepository();

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.appBar}>

                <Appbar.Content title="Bem vindo!" />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>
            <Text
                style={{
                    ...styles.h1,
                    ...styles.corDestaque,
                }}
            >
                Adicione a sua despesa
            </Text>
            <Text
                style={{
                    ...styles.h2,
                    ...styles.espacamentoDelicado,
                }}
            >
            </Text>
            <TextInputNP
                onChangeText={(e) => { setValor({ ...valor, quantia: e }) }}
                style={styles.espacamentoDelicado}
                value={valor.quantia}
                placeholder="Digite o valor da despesa"
            />

            <TextInputNP
                onChangeText={(e) => { setValor({ ...valor, categoria: e }) }}
                style={styles.espacamentoDelicado}
                value={valor.categoria}
                placeholder="Digite a categoria"
            />
            <Button style={styles.button}
                onPress={async () => {
                    repository.saveDespesa(valor).then(navigation.navigate("HomeScreen"));
                    
                }}>
                Salvar
            </Button>
            <Button
                style={styles.button}
                onPress={() => navigation.navigate("HomeScreen")}>
                Cancelar
            </Button>

        </View>
    );
}