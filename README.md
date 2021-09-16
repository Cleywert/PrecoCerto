# Projeto Preço Certo

Instalação
=========
Realize o clone do projeto que encontra-se no repositório: [Git](https://github.com/Cleywert/PrecoCerto)

Pré requisitos
=========
A aplicação está feita em Vue.js na sua camada front-end e utiliza um arquivo json como mock, então antes de prosseguir certifique-se de ter instalado o framework e o json-server, para assistir o arquivo de mock.

Instalando o Vue
=========
Para instalar o Vue é necessário que tenhamos o pacote npm instalado na máquina, caso não possua o pacote, siga os passos [deste link](https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329).
<br>
Tendo o npm instalado, basta agora abrir o terminal de comando e executar os seguintes comandos:
```bash
npm install -g @vue/cli
npm install -g @vue/cli-service-global
```
Para garantir a instalação, execute o seguinte comando:
```bash
vue
```
Uma lista de comandos deve aparecer.

Instalando o Json Server
=========
Para instalar o json-server é necessário que tenhamos o pacote npm instalado na máquina, caso não possua o pacote, siga os passos [deste link](https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329).
Tendo o npm instalado, basta agora abrir o terminal de comando e executar o seguinte comando:
```bash
npm install -g json-server
```
Pronto, você está pronto para escutar um arquivo json e usá-lo como API

Instalando Dependências
=========
Tendo todos os pré requisitos instalados e o download do projeto realizado, abra o terminal de controle e navegue até a pasta do projeto, em seguida execute o comando:
```bash
npm i
```
Este comando ira instalar todas as dependências do projeto registradas no packege.json

Rodando a Aplicação
=========
Para executar a aplicação, abra duas guias do terminal de comando, uma para executar o json-server e a segunda para executar o Vue.js. Em ambas as guias, navegue até a pasta raiz do projeto.
Na primeira guia do terminal, execute o seguinte comando para assistir o arquivo json.
```bash
json-server --watch products.json
```
Uma lista de rotas deve aparecer em forma de links.

Na segunda aba do terminal, execute o seguinte comando para iniciar a aplicação:
```bash
npm run serve
```
Um link do seu localhost deve ser exibido, a partir deste link você consegue acessar e testar a aplicação. Divirta-se!
