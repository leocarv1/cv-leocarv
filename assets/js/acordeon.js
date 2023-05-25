const acordeonTrigger = document.querySelectorAll('.acordeon .trigger');
const content = document.querySelector('.content');

const arrow = document.querySelector('.icon');

acordeonTrigger.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')
        
        if (isOpen) {
            acordeon.classList.remove('open')
            arrow.classList.remove('fa-chevron-up');
            arrow.classList.add('fa-chevron-down');
        } else {
            acordeon.classList.add('open')
            arrow.classList.remove('fa-chevron-down');
            arrow.classList.add('fa-chevron-up');
        }
    })
})

// Repositórios
// Seleciona o elemento <ul> pelo seu seletor de classe
var ulElement = document.querySelector('.portfolio');
var titleGitHub = document.querySelector('.title-github');

// URL da API do GitHub para obter os repositórios (substitua "SEU_USUÁRIO" pelo seu nome de usuário)
var apiUrl = 'https://api.github.com/users/leocarv1/repos';

// Realiza uma requisição GET para a API do GitHub
async function fetchProfile () {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Ordena os repositórios por data de criação (do mais recente ao mais antigo)
        const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        // Pega apenas os 3 últimos repositórios
        const latestRepos = sortedRepos.slice(0, 3);
        
        // Itera sobre os 3 últimos repositórios
        latestRepos.forEach(function(repo) {
            // Cria o elemento <li>
            var liElement = document.createElement('li');
            
            // Cria o elemento <a> para o link do repositório
            var linkElement = document.createElement('a');
            linkElement.href = repo.html_url;
            linkElement.target = '_blank';
            linkElement.textContent = repo.name;

            // Cria o elemento <span> para o título do repositório
            var spanElement = document.createElement('span');
            spanElement.className = 'title-portfolio github';
            spanElement.innerHTML = `<i class="fa-brands fa-github"></i>`;

            var spanTitle = document.createElement('span');
            spanTitle.className = 'title-github';
            spanTitle.innerHTML = `${repo.name}`

            // Adiciona o span de título ao span pai
            spanElement.appendChild(spanTitle);

            // Adicona o elemento <span> ao elemento <li>
            liElement.appendChild(spanElement);

            // Adiciona o elemento <a> ao elemento <li>
            liElement.appendChild(linkElement);        
            
            // Adiciona o elemento <li> à <ul>
            ulElement.appendChild(liElement);
        });
    }

    catch (error) {
        // Trate o erro de alguma for ma adequada, exibindo uma mensagem de erro ao usuário, por exemplo.
        console.error(error);
    }
}

(async () => {
    const profileData = await fetchProfile()
})

document.addEventListener('DOMContentLoaded', fetchProfile);