
import { Store } from "../util/store";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from '../config/firebase';
import { Transacao, TransacaoTipo } from "../domain/transacao";

export class TransacaoRepository {
    constructor() {
        this.transacoesRef = collection(db, "transacoes");
    }

    async saveDespesa({quantia, categoria}) {
        this._saveTransacao({quantia, categoria, tipo: TransacaoTipo.DESPESA});
    }

    async saveEntrada({quantia, categoria}) {
        this._saveTransacao({quantia, categoria, tipo: TransacaoTipo.ENTRADA});
    }

    async _saveTransacao({quantia, categoria, tipo}) {
        try {
            const user = await Store.getUser();

            const transacao = new Transacao({
                quantia, 
                categoria,
                tipo,
                usuario: user
            });
            console.log(this.transacoesRef, transacao.toData());
            await addDoc(this.transacoesRef, transacao.toData());

        } catch (e) {
            console.error(e);
        }
    }

    async getTransacoes() {
        const user = await Store.getUser();
        try {
            const q = query(this.transacoesRef, where("usuario", "==", user));
            const results = await getDocs(q);
            const transacoes = [];
            results.forEach((doc) => transacoes.push(Transacao.fromData(doc)));
            return transacoes;
        } catch(e) {
            console.error(e);
        }
    }
}