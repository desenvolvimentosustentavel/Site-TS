const login = document.getElementById('login');
const nomeusuario = document.getElementById('nomeusuario');

login.addEventListener('submit', function (event) {
    event.preventDefault();
    const entnomeusuario = document.getElementById('nomeuser');
    const nomeuser = entnomeusuario.value;
    if (nomeuser.trim() !== '') {
        nomeusuario.textContent = `Olá, ${nomeuser}!`;
        localStorage.setItem('nomeUsuario', nomeuser);
    } else {
        alert('Por favor, insira um nome de usuário válido.');
    }
    entnomeusuario.value = '';
});

function playGame() {
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    if (nomeUsuario) {
        localStorage.removeItem('pontuacao'); 
        window.location.href = 'telacarreg.html';
    } else {
        alert('Por favor, insira um nome de usuário antes de jogar.');
    }
}
