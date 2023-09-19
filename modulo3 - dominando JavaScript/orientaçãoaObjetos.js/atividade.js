/*
Nesta atividade, testaremos os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e transações disponíveis em cada uma.

Crie uma classe ContaBancaria, que possui as configurações agencia, numero, tipoe saldo;
Dentro de ContaBancaria, constrói o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacare depositar;
Crie uma classe-filha chamada ContaCorrenteque herda todas essas parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, constrói o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tiposeja ‘conta corrente’ por padrão;
Crie uma chamada de classe filha ContaPoupancaque herda todas as parâmetros de ContaBancaria;
Crie uma chamada de classe filha ContaUniversitariaque herda todas as parâmetros de ContaBancaria;
Faça com que o método saquede ContaUniversitariaapenas seja capaz de sacar valores menores que 500 reais .
*/

class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia; 
        this.numero = numero; 
        this.tipo = tipo; 
        this._saldo = saldo; 
    }

    get saldo() {
        return this_saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente {
    constructor(agencia, numero, tipo, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'corrente'
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartoCredito = valor;
    }
}

class ContaPoupanca {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'pousanca'
    }

}

class ContaUniversitaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'corrente'
    }
    secar(valor) {
        if(valor > 500) {
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;
    }
}