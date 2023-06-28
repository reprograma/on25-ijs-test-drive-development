function allKeys(obj) {
    if (!isObject(obj)) { // verifica se é um objeto
        return []; // se não for retorna um array vazio
    }

    const keys = []; // cria um array de keys
    for (const key in obj){ // percorre o objeto colhendo as keys
        keys.push(key); // faz um push com as chaves na array keys
    }
    return keys;
}
function isObject(obj) { // testa se é um objeto, retorna true ou false
    const type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

module.exports = { allKeys, isObject }