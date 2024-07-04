# Passos iniciais para se utilizar o ts em um projeto.

- [ ] Iniciar o npm no projeto
    ```bash
    npm init -y
    ```
- [ ] Instalar o typescript 
    ```bash
    npm i typescript --save-dev
    ```
- [ ] Gerar um arquivo de configuração do typeescript
    ```bash
    npx tsc --init
    ```
- [ ] Instalar biblioteca para nos permitir executar arquivos typescript, sem precisar compilar para js, em desenvolvimento
    ```bash
    npm i ts-node --save-dev
    ```
- Como executar uma arquivo utilizando ts-node
    ```bash
    npx ts-node caminhoDoArquivo
    ```
    Exemplo: npx ts-node ./src/index.ts