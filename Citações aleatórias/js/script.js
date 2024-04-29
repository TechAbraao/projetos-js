document.getElementById("botao").addEventListener("click", () => {
       //
       var quotes = {
            "- Bob Marley" : "Não ganhe o mundo e perca sua alma; sabedoria é melhor que prata e ouro.",
            "- Bob Marley" : "Às vezes construímos sonhos em cima de grandes pessoas. O tempo passa e descobrimos que grandes mesmo eram os sonhos e as pessoas pequenas demais para torná-los reais!",
            "- Racionais" : "Vamos brindar o dia de hoje, pois amanhã só pertence a Deus.",
            "- Racionais" : "Não espere o futuro mudar tua vida, porque o futuro será a consequência do presente.",
            "- Machado de Assis" : "A vida sem luta é um mar morto no centro do organismo universal.",
            "- Machado de Assis" : "Não tive filhos, não transmiti a nenhuma criatura o legado de nossa miséria.",
            "- Friedrich Nietzsche" : "A vida vai ficando cada vez mais dura perto do topo.",
            "- Friedrich Nietzsche" : "É mais fácil lidar com uma má consciência do que com uma má reputação.",
            "- Oscar Wilde" : "A ambição é o último recurso do fracassado.",
            "- Oscar Wilde" : "A vida é muito importante para ser levada a sério.",
       }
       var authors = Object.keys(quotes);
       var author = authors[Math.floor(Math.random() * authors.length)];
       //
       var quote = quotes[author];
       document.getElementById("quote").innerHTML = quote;
       document.getElementById("author").innerHTML = author;

})