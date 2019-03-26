import { View } from './View';
export class MensagemView extends View<string> {

    templateString(mensagem: string): string {
        return `<p class="alert alert-info">${mensagem}</p><script>alert('Script interno');</script>`;
    }

}