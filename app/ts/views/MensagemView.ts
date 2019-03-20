class MensagemView extends View<string> {

    templateString(mensagem: string): string {
        return `<p class="alert alert-info">${mensagem}</p>`;
    }

}