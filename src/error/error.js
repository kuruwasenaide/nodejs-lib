export default function trataErros(error) {
    if (error.code === 'ENOENT'){
        throw new Error('NO ENTITY')
    } else {
        return 'UNKNOWN ERROR'
    }
}