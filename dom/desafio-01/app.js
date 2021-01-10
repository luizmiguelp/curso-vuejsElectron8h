   new Vue({
        el: "#desafio",
        data: {
            nome: "Luiz Miguel Princival",
            idade: "43",
            imagem:"https://image.freepik.com/fotos-gratis/conceito-rural-do-destino-do-curso-da-estrada-de-contry-da-paisagem_53876-14122.jpg",
        },
       methods: {
           idadeXTres: function()  {
             return (this.idade * 3)
            },
            numAleatorio: function() {
                return Math.random()
            }
            
        },
    });