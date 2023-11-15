document.addEventListener('DOMContentLoaded', function () {
    const listausuarioelement = document.getElementById('user-list');
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    const pontuacao = localStorage.getItem('pontuacao');

    if (nomeUsuario) {
        const listItem = document.createElement('li');
        listItem.textContent = `${nomeUsuario} - Pontuação: ${pontuacao || 0}`;
        listausuarioelement.appendChild(listItem);
    }
});