    export function contaPalavras(text){

        const paragrafo = extraiParagrafos(text)
        const contagem = paragrafo.flatMap((p) => {
            if (!p) return[]
            return verificaPalavrasDuplicadas(p)
        })
        // .filter((paragrafo) => paragrafo)
        // .map((paragrafo) => {
        //     return verificaPalavrasDuplicadas(paragrafo)
        // })
        return contagem
    }

    function extraiParagrafos(text){
        return text.toLowerCase().split('\n')
    }

    function limpaPalavras(palavra) {
        return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_"~()]/g, '')
    }

    function verificaPalavrasDuplicadas(text) {
        const listaPalavras = text.split(' ')
        const resultado = {}
        listaPalavras.forEach(element => {
            if (element.length >= 3){
                const palavraLimpa = limpaPalavras(element)
                resultado[palavraLimpa] =   (resultado[palavraLimpa] || 0) + 1
            }
        });
        return resultado
    }