new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        //Variavel computada
        resultado() {
              return  this.valor != 37 ? 'Valor Diferente' : "Valor Igual"
        }
    },
    watch: {
        //Variavel monitorada
        resultado(){
            setTimeout(() => {
              this.valor = 0 
            }, 5000);
        }
    }
});