import { View } from "react-native";
import * as React from 'react';

import styles from "../config/styles";
import { Appbar } from 'react-native-paper';
import { Card, Text } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import { TransacaoRepository } from "../repository/TransacaoRepository";
import { Transacao, TransacaoTipo } from "../domain/transacao";

export default function HomeScreen() {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    4
  );
  const repository = new TransacaoRepository();
  const [items, setItems] = React.useState([]);
  
  const [saldoAtual, setSaldoAtual] = React.useState(0);
  const [totalGastos, setTotalGastos] = React.useState(0);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    repository.getTransacoes().then((result) => {
      setItems(result);
      
      const gastos = result.filter(t=> t.tipo == TransacaoTipo.DESPESA).map(t => parseInt(t.quantia)).reduce((partialSum, a) => partialSum + a, 0);
      const entradas = result.filter(t=> t.tipo == TransacaoTipo.ENTRADA).map(t => parseInt(t.quantia)).reduce((partialSum, a) => partialSum + a, 0);

      setTotalGastos(gastos);

      setSaldoAtual(entradas - gastos);
    });
  }, [])
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <View styles={styles.container}>

      <Appbar.Header style={styles.appBar}>

        <Appbar.Content title="Bem vindo!" />
        <Appbar.Action icon="magnify" onPress={() => { }} />
      </Appbar.Header>
      <Card style={styles.cardSaldo}>
        <Card.Content >
          <Text variant="titleLarge">Saldo Atual</Text>
          <Text variant="bodyMedium">{saldoAtual}</Text>
        </Card.Content>
      </Card>
      <Card style={styles.cardGasto}>
        <Card.Content>
          <Text variant="titleLarge">Total de Gastos</Text>
          <Text variant="bodyMedium">{totalGastos}</Text>
        </Card.Content>
      </Card>

      <DataTable style={styles.dataTable}>
        <DataTable.Header>
          <DataTable.Title >Tipo</DataTable.Title>
          <DataTable.Title>Categoria</DataTable.Title>
          <DataTable.Title numeric>Valor</DataTable.Title>

        </DataTable.Header>

        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.tipo}</DataTable.Cell>
            <DataTable.Cell>{item.categoria}</DataTable.Cell>
            <DataTable.Cell numeric>{item.quantia}</DataTable.Cell>

          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          showFastPaginationControls
        />
      </DataTable>
    </View>
  );
}
