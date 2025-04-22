function filtraOcorrencias(data) {
    return Object.keys(data).filter(key => data[key] > 1)
}

function montaSaidaArquivo(lista) {
    let textoFinal = ''
    lista.forEach((paragrafo, i) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ')
        if (duplicadas){
            textoFinal += `palavras duplicadas no parágrafo ${i + 1}: ${duplicadas}\n`
        }
    });

    return textoFinal
}

export { montaSaidaArquivo }