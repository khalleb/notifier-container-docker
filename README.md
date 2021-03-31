<h1 align="center">
  🚀 Notifier Container Docker
</h1>

<p align="center">
  <br>
  <img alt="Language count" src="https://img.shields.io/github/repo-size/khalleb/notifier-container-docker"/>

  <a href="https://www.linkedin.com/in/khalleb/">
    <img alt="Made by Khalleb" src="https://img.shields.io/badge/made%20by-khalleb-%237519C1">
  </a>

  <a href="https://github.com/khalleb/ignews/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/khalleb/notifier-container-docker">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/khalleb/notifier-container-docker">
</p>


<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requisito">Requisito</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-configuração">Configuração</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; &#xa0; | &#xa0;
  <a href="#framed_picture-imagens">Imagens</a> &#xa0; &#xa0;
</p>

<br>

## :dart: Sobre ##
O projeto tem como intuito obter os status de containers do docker e notificar através do telegram.
## :white_check_mark: Requisito ##

- [Node](https://nodejs.org/en/) >= 12.0
- [Yarn](https://yarnpkg.com/lang/en/)


## :checkered_flag: Configuração .env##
Crie o arquivo '.env' e informe:
* `token`: Token de autorização do Telegram.
* `to`:  Identificador único para o chat.
```env
  DRIVER_MESSAGE=telegram

  # TELEGRAM
  TELEGRAM_BOT_TOKEN=
  TELEGRAM_CHAT_ID=
```
## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/khalleb/ignews

# Access
$ cd ignews

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```
## :framed_picture: Imagens ##

<h1 align="center">
    <img alt = "Web app" src = "./.github/image-01.png" width = "500px" />
    <img alt = "Web app" src = "./.github/image-02.png" width = "500px" />
    <img alt = "Web app" src = "./.github/image-03.png" width = "500px" />
    <img alt = "Web app" src = "./.github/image-04.png" width = "500px" />
</h1>



