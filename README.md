<h1 align="center">
  # Notifier Container Docker
</h1>

<p align="center">
  <br>
  <img alt="Language count" src="https://img.shields.io/github/repo-size/khalleb/notifier-container-docker"/>

  <a href="https://www.linkedin.com/in/khalleb/">
    <img alt="Made by Khalleb" src="https://img.shields.io/badge/made%20by-khalleb-%237519C1">
  </a>

  <a href="https://github.com/khalleb/ignews/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/khalleb/ignnotifier-container-dockerews">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/khalleb/notifier-container-docker">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; &#xa0; | &#xa0;
  <a href="#framed_picture-imagens">Imagens</a> &#xa0; &#xa0;
</p>

<br>

## :dart: Sobre ##

O projeto ig.news é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura.<br>
O blog possui um sistema de compra integrado com o STRIPE, e após o usuário realizar o pagamento, sua inscrição estará ativa e pronta para visualizar o conteúdo completo
de todo o blog. Caso o usuário não deseje optar pela assinatura, ele terá acesso limitado ao conteúdo das postagens. E todos os dados necessários para se fazer verificações
de assinaturas ou dados dos usuários, estão salvos no banco de dados FaunaDB.
<br>
<br>
Essa é uma aplicação Serverless, ou seja, todo o processo que dependeria de um backend foi integrado dentro do front e seguindo o padrão da JAMStack.
<br>
As postagens são feitas pelo painel do Prismic CMS e integradas diretamente pelo front.


## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)

## :white_check_mark: Requerimentos ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

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



