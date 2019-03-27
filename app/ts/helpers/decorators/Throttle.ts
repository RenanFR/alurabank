export function throttle(millisegundos: number = 500) {
    return function(alvo: any, nomeMetodo: string, metodo: PropertyDescriptor) {
        const metodoOriginal = metodo.value;
        let temporizador = 0;
        metodo.value = function(...args: any[]) {
            clearTimeout(temporizador);
            temporizador = setTimeout(() => metodoOriginal.apply(this, args), millisegundos);
        }
        return metodo;
    }
}