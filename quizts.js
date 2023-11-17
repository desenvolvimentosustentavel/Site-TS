const espacoquestao = document.getElementById('quiz-container');
const questao = document.getElementById('questao');
const imagemPergunta = document.getElementById('imagem-pergunta');
const resp = document.querySelectorAll('.btn');
let cont = 0;

const questoes = [
    {
        questao: "Qual é o número total de Objetivos de Desenvolvimento Sustentável (ODS)?",
        respostas: ["10", "15", "17", "20"],
        certa: 2,
        imagem: "imagem1.jfif"
    },
    {
        questao: "Qual é o ODS que se concentra em acabar com a pobreza em todas as suas formas em todo o mundo?",
        respostas: ["ODS 1", "ODS 3", "ODS 5", "ODS 10"],
        certa: 0,
        imagem: "imagem2.jfif"
    },
        {
        questao: "Qual ODS visa garantir uma educação inclusiva e equitativa de qualidade e promover oportunidades de aprendizado ao longo da vida para todos?",
        respostas: ["ODS 2", "ODS 3", "ODS 4", "ODS 5"],
        certa: 2,
        imagem: "imagem3.jfif"
    },
    {
        questao: "O ODS 13 aborda qual questão importante relacionada ao meio ambiente?",
        respostas: ["Proteção da biodiversidade", "Acesso à água potável", "Ação climática", "Agricultura sustentável"],
        certa: 2,
        imagem: "imagem4.jfif"
    },
    {
        questao: "Qual ODS visa alcançar a igualdade de gênero e capacitar todas as mulheres e meninas?",
        respostas: ["ODS 2", "ODS 5", "ODS 8", "ODS 10"],
        certa: 1,
        imagem: "imagem5.jfif"
    },
    {
        questao: "Qual ODS busca garantir o acesso a água potável e saneamento básico para todos?",
        respostas: ["ODS 2", "ODS 4", "ODS 6", "ODS 8"],
        certa: 2,
        imagem: "imagem6.jfif"
    },
    {
        questao: "O ODS 16 está relacionado a qual aspecto do desenvolvimento sustentável?",
        respostas: ["Saúde", "Educação", "Paz, justiça e instituições eficazes", "Igualdade de gênero"],
        certa: 2,
        imagem: "imagem7.jfif"
    },
    {
        questao: "Qual ODS se concentra em promover o crescimento econômico sustentado, inclusivo e sustentável, o pleno emprego e o trabalho decente para todos?",
        respostas: ["ODS 7", "ODS 8", "ODS 9", "ODS 10"],
        certa: 1,
        imagem: "imagem8.jfif"
    },
    {
        questao: "O ODS 3 está relacionado a qual tópico específico de saúde?",
        respostas: ["Saúde materna", "Malária", "AIDS", "Saúde global"],
        certa: 2,
        imagem: "imagem9.jfif"
    },
    {
        questao: "Qual ODS tem como objetivo reduzir a desigualdade dentro e entre os países?",
        respostas: ["ODS 1", "ODS 5", "ODS 9", "ODS 10"],
        certa: 3,
        imagem: "imagem10.jfif"
    },
    {
        questao: "O ODS 7 busca garantir o acesso a quais fontes de energia limpa e acessível?",
        respostas: ["Carvão e petróleo", "Energia solar e eólica", "Energia nuclear", "Gás natural"],
        certa: 1,
        imagem: "imagem11.jfif"
    },
    {
        questao: "Qual ODS visa a conservação e uso sustentável dos oceanos, mares e recursos marinhos?",
        respostas: ["ODS 11", "ODS 13", "ODS 14", "ODS 15"],
        certa: 2,
        imagem: "imagem12.jfif"
    },
    {
        questao: "O ODS 9 está relacionado a qual aspecto da infraestrutura e inovação?",
        respostas: ["Tecnologia da informação", "Transporte sustentável", "Energia renovável", "Educação"],
        certa: 1,
        imagem: "imagem13.jfif"
    },
    {
        questao: "Qual ODS busca a promoção da paz, justiça e instituições eficazes?",
        respostas: ["ODS 12", "ODS 14", "ODS 15", "ODS 16"],
        certa: 3,
        imagem: "imagem14.jfif"
    },
    {
        questao: "O ODS 11 está relacionado a qual aspecto do desenvolvimento urbano?",
        respostas: ["Energia limpa", "Transporte público", "Cidades e comunidades sustentáveis", "Agricultura urbana"],
        certa: 2,
        imagem: "imagem15.jfif"}
];

let qestaoindex = 0;

const tempoTotal = 40;
let tempoRestante = tempoTotal;
let tempoMinutos, tempoSegundos;

function atualizarTemporizador() {
    tempoMinutos = Math.floor(tempoRestante / 60);
    tempoSegundos = tempoRestante % 60;

    const temporizadorElement = document.getElementById('timer');
    temporizadorElement.textContent = `${tempoMinutos}:${tempoSegundos < 10 ? '0' : ''}${tempoSegundos}`;

    if (tempoRestante === 0) {
        clearInterval(temporizadorInterval);
        salvarPontuacaoLocalStorage();
        espacoquestao.innerHTML = `<h2>Fim do Quiz. Pontuação: ${cont} / ${questoes.length}</h2>`;
    } else {
        tempoRestante--;
    }
}

const temporizadorInterval = setInterval(atualizarTemporizador, 1000);

function mostrarquest(quest) {
    questao.innerText = quest.questao;
    imagemPergunta.innerHTML = `<img src="${quest.imagem}" alt="Imagem da Pergunta">`;

    quest.respostas.forEach((resposta, index) => {
        resp[index].innerText = resposta;
        resp[index].onclick = () => selecquest(index);
    });
}

function selecquest(selecindex) {
    const certaindex = questoes[qestaoindex].certa;
    const botaoselec = resp[selecindex];

    if (selecindex === certaindex) {
        botaoselec.style.backgroundColor = '#4caf50';
        cont++;
    } else {
        botaoselec.style.backgroundColor = '#f44336';
        resp[certaindex].style.backgroundColor = '#4caf50';
    }

    desativarbotoesresp();

    setTimeout(() => {
        botaoselec.style.backgroundColor = '#007bff';
        resp[certaindex].style.backgroundColor = '#007bff';
        qestaoindex++;

        if (qestaoindex < questoes.length) {
            ativarbotoesresp();
            mostrarquest(questoes[qestaoindex]);
        } else {
            espacoquestao.innerHTML = `<h2>Fim do Quiz. Pontuação: ${cont} / ${questoes.length}</h2>`;
            salvarPontuacaoLocalStorage();
            finalizarQuiz();
        }
    }, 1000);
}

function ativarbotoesresp() {
    resp.forEach(button => {
        button.style.backgroundColor = '#007bff';
        button.disabled = false;
    });
}

function desativarbotoesresp() {
    resp.forEach(button => {
        button.disabled = true;
    });
}

function salvarPontuacaoLocalStorage() {
    const pontuacaoAtual = parseInt(localStorage.getItem('pontuacao')) || 0;
    localStorage.setItem('pontuacao', pontuacaoAtual + cont);
}

function finalizarQuiz() {
    exibirTelaDeCarregamento();
}

function exibirTelaDeCarregamento() {
    setTimeout(function () {
        window.location.href = 'rankingts.html';
    }, 3000);
}

// Inicialização
mostrarquest(questoes[qestaoindex]);
