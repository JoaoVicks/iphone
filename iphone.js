const radioBtn = document.querySelectorAll('input[type=radio]');
const imgIphone = document.querySelector('#img-iphone');


const ativacaoTransicao = (valor) => {
    const transicaoCmc = 'transicao-iphone-entrada';
    const transicaoFim = 'transicao-iphone-saida';

    imgIphone.classList.add(transicaoCmc)
    imgIphone.setAttribute('src',`img/iphone_${valor}.jpg`)
    imgIphone.addEventListener('load', () => {
        imgIphone.classList.remove(transicaoCmc)
        imgIphone.classList.add(transicaoFim)
    })
    imgIphone.classList.remove(transicaoFim)
}



for (let btn of radioBtn) {
    btn.addEventListener('click', (e) => {
        let button = e.target
        ativacaoTransicao(button.value)
        
    }
    )


}
