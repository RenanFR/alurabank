import { NegociacaoController } from './controllers/NegociacaoController';

const ctrl = new NegociacaoController();

$(".form")
    .submit(ctrl.adc.bind(ctrl));