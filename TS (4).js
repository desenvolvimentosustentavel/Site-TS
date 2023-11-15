  let boxBuscar = document.querySelector('.buscar-box');
  let lupa = document.querySelector('.lupa-buscar');
  let fechar = document.querySelector('.btn-fechar');

  lupa.addEventListener('click', ()=>{
    boxBuscar.classList.add('ativar')
  })

  fechar.addEventListener('click', ()=>{
    boxBuscar.classList.remove('ativar')
  })