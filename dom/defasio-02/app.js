new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Alerta do botão')
        },
        pegavalor(e) {
            v = e.target.value
            this.valor =  v
        }
    },

})