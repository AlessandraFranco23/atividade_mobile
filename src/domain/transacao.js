export class TransacaoTipo {
    static DESPESA = "DESPESA";
    static ENTRADA = "ENTRADA";
}

export class Transacao {
    constructor(props) {
        this.id = props.id;
        this.categoria = props.categoria;
        this.quantia = props.quantia;
        this.usuario = props.usuario;
        this.tipo = props.tipo;
    }

    toData() {
        return {
            categoria: this.categoria,
            quantia: this.quantia,
            usuario: this.usuario,
            tipo: this.tipo
        };
    }

    static fromData(snapshot) {
        return new Transacao({...snapshot.data(), id: snapshot.id})
    }
}