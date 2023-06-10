// Comandos salvos em um arquivo js
const commandList = [
    {
      command: 'ls',
      description: 'Lista arquivos e diretórios',
      options: '-l: exibe em formato de lista detalhada',
      use: '$ ls [opções] [caminho]'
    },
    {
      command: 'cd',
      description: 'Muda o diretório atual',
      options: 'n/a',
      use: '$ cd [diretório]'
    },
    {
      command: 'pwd',
      description: 'Exibe o diretório atual',
      options: 'n/a',
      use: '$ pwd'
    },
    {
      command: 'mkdir',
      description: 'Cria um diretório',
      options: 'n/a',
      use: '$ mkdir [opções] [diretório]'
    },
    {
      command: 'rm',
      description: 'Remove arquivos e diretórios',
      options: '-r: remove diretórios recursivamente',
      use: '$ rm [opções] [arquivo/diretório]'
    },
    {
      command: 'cp',
      description: 'Copia arquivos e diretórios',
      options: '-r: copia diretórios recursivamente',
      use: '$ cp [opções] [origem] [destino]'
    },
    {
      command: 'mv',
      description: 'Move ou renomeia arquivos e diretórios',
      options: 'n/a',
      use: '$ mv [opções] [origem] [destino]'
    },
    {
      command: 'cat',
      description: 'Concatena arquivos e imprime na saída padrão',
      options: '-n: enumera as linhas de saída',
      use: '$ cat [opções] [arquivo]'
    },
    {
      command: 'less',
      description: 'Visualiza arquivos de texto de forma paginada',
      options: 'n/a',
      use: '$ less [arquivo]'
    },
    {
      command: 'grep',
      description: 'Pesquisa por padrões em arquivos',
      options: '-i: ignora diferenças entre maiúsculas e minúsculas',
      use: '$ grep [opções] [padrão] [arquivo]'
    },
    {
      command: 'find',
      description: 'Encontrar arquivos e diretórios',
      options: '-name: buscar por nome específico',
      use: '$ find [caminho] [opções] [expressão]'
    },
    {
      command: 'chmod',
      description: 'Alterar permissões de arquivos e diretórios',
      options: '-R: modificar recursivamente',
      use: '$ chmod [opções] [permissões] [arquivo/diretório]'
    },
    {
      command: 'chown',
      description: 'Alterar o proprietário de arquivos e diretórios',
      options: '-R: modificar recursivamente',
      use: '$ chown [opções] [usuário:grupo] [arquivo/diretório]'
    },
    {
      command: 'chgrp',
      description: 'Alterar o grupo de arquivos e diretórios',
      options: '-R: modificar recursivamente',
      use: '$ chgrp [opções] [grupo] [arquivo/diretório]'
    },
    {
      command: 'man',
      description: 'Exibir manual de um comando',
      options: '',
      use: '$ man [comando]'
    },
    {
      command: 'ssh',
      description: 'Acesso remoto seguro',
      options: '-p: especificar a porta',
      use: '$ ssh [opções] [usuário@]host'
    },
    {
      command: 'tar',
      description: 'Manipular arquivos compactados (tarball)',
      options: '-c: criar um arquivo compactado',
      use: '$ tar [opções] [arquivo.tar]'
    },
    {
      command: 'gzip',
      description: 'Comprimir arquivos',
      options: '-d: descomprimir arquivos',
      use: '$ gzip [opções] [arquivo]'
    },
    {
      command: 'ping',
      description: 'Verificar a conectividade de rede',
      options: '',
      use: '$> ping [opções] [host]'
    },
    {
      command: 'ifconfig',
      description: 'Configurar interfaces de rede',
      options: '',
      use: '$> ifconfig [interface] [opções]'
    },
    {
    command: 'wget',
    description: 'Baixar arquivos da web',
    options: '',
    use: '$> wget [opções] [URL]'
    },
    {
      command: 'top',
      description: 'Exibir os processos em execução',
      options: '',
      use: '$> top'
    },
    {
      command: 'ps',
      description: 'Exibir os processos em execução',
      options: '',
      use: '$> ps [opções]'
    },
    {
      command: 'kill',
      description: 'Finalizar processos',
      options: '',
      use: '$> kill [opções] [PID]'
    },
    {
      command: 'du',
      description: 'Exibir o uso de espaço em disco',
      options: '',
      use: '$> du [opções] [diretório]'
    },
    {
      command: 'df',
      description: 'Exibir o uso de espaço em disco das partições',
      options: '',
      use: '$> df [opções]'
    },
    {
      command: 'apt-get',
      description: 'Gerenciador de pacotes Debian (Ubuntu)',
      options: '',
      use: '$> apt-get [opções] [comando]'
    },
    {
      command: 'systemctl',
      description: 'Gerenciar serviços do sistema',
      options: '',
      use: '$> systemctl [opções] [comando]'
    },
    {
      command: 'passwd',
      description: 'Alterar senha de usuário',
      options: '',
      use: '$> passwd [usuário]'
    },
    {
      command: 'su',
      description: 'Trocar de usuário ou se tornar superusuário',
      options: '',
      use: '$> su [usuário]'
    },
    {
      command: 'sudo',
      description: 'Executar comando com privilégios de superusuário',
      options: '',
      use: '$> sudo [comando]'
    },
    {
      command: 'useradd',
      description: 'Criar um novo usuário',
      options: '',
      use: '$> useradd [opções] [usuário]'
    },
    {
      command: 'userdel',
      description: 'Remover um usuário',
      options: '',
      use: '$> userdel [opções] [usuário]'
    },
    {
      command: 'groupadd',
      description: 'Criar um novo grupo',
      options: '',
      use: '$> groupadd [opções] [grupo]'
    },
    {
      command: 'groupdel',
      description: 'Remover um grupo',
      options: '',
      use: '$> groupdel [opções] [grupo]'
    },
    {
      command: 'shutdown',
      description: 'Desligar ou reiniciar o sistema.',
      options: '-h: desligar o sistema, -r: reiniciar o sistema',
      use: '$> shutdown [opção] [tempo] [mensagem]'
    },
    {
      command: 'reboot',
      description: 'Reiniciar o sistema.',
      options: '',
      use: '$> reboot'
    },
    {
      command: 'date',
      description: 'Exibir ou configurar a data e hora do sistema.',
      options: '',
      use: '$> date [opções]'
    },
    {
      command: 'history',
      description: 'Exibir histórico de comandos digitados.',
      options: '',
      use: '$> history'
    },
    {
      command: 'echo',
      description: 'Exibir uma mensagem na tela.',
      options: '',
      use: '$> echo [mensagem]'
    },
    {
      command: 'uname',
      description: 'Exibir informações do sistema.',
      options: '',
      use: '$> uname [opções]'
    },
    {
      command: 'clear',
      description: 'Limpar a tela.',
      options: '',
      use: '$> clear'
    },
    {
      command: 'head',
      description: 'Exibir as primeiras linhas de um arquivo.',
      options: '',
      use: '$> head [opções] [arquivo]'
    },
    {
      command: 'wc',
      description: 'Contar linhas, palavras e caracteres em um arquivo.',
      options: '',
      use: '$> wc [opções] [arquivo]'
    },
    {
      command: 'sort',
      description: 'Ordenar linhas de um arquivo.',
      options: '',
      use: '$> sort [opções] [arquivo]'
    },
    {
      command: 'uniq',
      description: 'Exibir linhas únicas em um arquivo.',
      options: '',
      use: '$> uniq [opções] [arquivo]'
    },
    {
      command: 'cut',
      description: 'Extrair seções de linhas de um arquivo.',
      options: '',
      use: '$> cut [opções] [arquivo]'
    },
    {
      command: 'gzip',
      description: 'Comprimir arquivos.',
      options: '',
      use: '$> gzip [opções] [arquivo]'
    },
    {
      command: 'zcat',
      description: 'Exibir o conteúdo de arquivos compactados.',
      options: '',
      use: '$> zcat [arquivo.gz]'
    },
    {
      command: 'zcat',
      description: 'Exibir o conteúdo de arquivos compactados.',
      options: '',
      use: '$> zcat [arquivo.gz]'
    },  
    {
      command: 'locate',
      description: 'Localizar arquivos no sistema.',
      options: '',
      use: '$ locate [opções] [padrão]'
    },
    {
      command: 'which',
      description: 'Localizar o caminho de um executável.',
      options: '',
      use: '$ which [programa]'
    },
    {
      command: 'pkill',
      description: 'Finalizar processos com base em seu nome.',
      options: '',
      use: '$ pkill [opções] [nome do processo]'
    },
    {
      command: 'jobs',
      description: 'Listar trabalhos em execução em segundo plano.',
      options: '',
      use: '$ jobs'
    },
    {
      command: 'at',
      description: 'Executar um comando em um horário específico.',
      options: '',
      use: '$ at [hora]'
    },
    {
      command: 'free',
      description: 'Exibir informações sobre o uso da memória.',
      options: '',
      use: '$ free [opções]'
    },
];

//pesquisa
function searchCommand() {
    const searchInput = document.getElementById('search-input');
    const commandName = searchInput.value.trim();
  
    if (commandName === '') {
      clearCommandDetails();
      return;
    }
  
    const command = commandList.find(cmd => cmd.command === commandName);
  
    if (command) {
      displayCommandDetails(command);
    } else {
      clearCommandDetails();
      alert('Comando não encontrado. Tente novamente.');
    }
}

//mostra resultado
function displayCommandDetails(command) {
    const commandDetails = document.getElementById('command-details');
    commandDetails.innerHTML = `<h3>${command.command}</h3><p id="details">${command.use}</p><p id="meaning">${command.description}</p><p id="options">Opções: ${command.options}</p>`;
}

//limpar
function clearCommandDetails() {
    const commandDetails = document.getElementById('command-details');
    commandDetails.innerHTML = '';
}

//enter precionado
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchCommand();
  }
});
  