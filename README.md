# setup nodejs

Link para o vídeo do autor Bruno Germano https://youtu.be/UYwezJUhaps

Projeto de demonstração de inicialização e configuração com nodejs

## Comandos usados desde o começo
- git init (Inicializar git)
- git checkout -b main (Create a new branch named *new_branch* and start it at *start_point*)
- git add README.md (adiciona arquivo ao index do git)
- git commit -am "descricao do commit" (grava registro para o repositorio: -a/--all prepara automaticamente arquivos modificados e deletados; -m mensagem do commit)
- git checkout -b develop (Cria nova branch chamada *develop*)

> acessa na conta do github.com e cria um novo repositório e executa o resto dos comandos

1. git branch -M main
2. git remote add origin https://github.com/aliton-os/setup-nodejs.git
3. git push -u origin main

- git branch (saber qual a branch atual)
- git checkout -b develop (Cria nova branch chamada *develop*)

> Após configurado o git, foi necessário configurar o projeto, com os seguintes comandos:

1. npm init
2. npm i express

Após ininializado o projeto nodejs e instalado o pacote `express`, foi criada uma imagem docker com o comando:

- docker-compose up --build

Uma vez criada a imagem, foi instalado o pacote jest, para realização de testes, com o comando:

- npm i jest -D

Finalizado os primeiros testes, deu-se início a automatização dos testes com `Github Actions`

**Cada arquivo yml é uma ação que será executada pelo github**

- Criar pasta: .github/workflows
- Dentro das pasta, criar os arquivos:
-- test.yml
-- deployment.yml
- Criar uma nova branch para...: `git checkout -b feature/github-actions`
- git add .
- git commit -am "add workflows"