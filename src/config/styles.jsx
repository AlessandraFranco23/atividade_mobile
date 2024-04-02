import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    //justifyContent: "center",
  },
  innerContainer: {
    padding: 20,
  },
  selfCenter: {
    alignSelf: "center",
  },
  appBar: {
    backgroundColor: "#D0F1EB",
  },
  cardSaldo: {
    backgroundColor: "#81B2CA",
    marginTop: 22,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  cardGasto: {
    backgroundColor: "#32a88d",
    marginTop: 22,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  dataTable: {
    marginTop: 22,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 22,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
  },
  espacamentoDelicado: {
    marginVertical: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  corDestaque: {
    color: "#42ccc8",
  },
  button: {
    marginTop: 10,
    maxWidth: 260,
    alignSelf: "flex-end",
  }
});

export default styles;