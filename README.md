# 🧪 E2E Test Automation Framework - Clean Architecture PoC

![Cypress](https://img.shields.io/badge/-cypress-%2317202C?style=for-the-badge&logo=cypress&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Cucumber](https://img.shields.io/badge/Cucumber-43B02A?style=for-the-badge&logo=cucumber&logoColor=white)

> **Prova de Conceito (PoC) e Template Arquitetural** focado em testes End-to-End (E2E) utilizando Cypress com princípios de Clean Architecture e BDD.

## 🎯 Objetivo do Projeto
Este projeto serve como um modelo base de alta manutenibilidade, escalabilidade e baixo acoplamento para automação de testes E2E. Utilizando o ambiente de sandbox público **[SauceDemo](https://www.saucedemo.com/)**, a arquitetura foi desenhada para separar claramente:
- Lógica de Negócios e Comportamento (BDD/Gherkin)
- Mapeamento de Elementos e Ações (Page Object Model)
- Massa de Dados (Fixtures/Env)
- Configurações do Framework

## ⚙️ Pré-requisitos
Antes de começar, garanta que você tem as seguintes ferramentas instaladas em sua máquina:
* [Node.js](https://nodejs.org/) (Versão 18 ou superior - *Recomendado v20 LTS*)
* [Git](https://git-scm.com/)

## 🚀 Instalação e Configuração

1. Clone o repositório:
`bash
git clone https://github.com/WillianMPfeifer/Automation-E2E-Web-with-Cypress.git
`

2. Acesse a pasta do projeto:
`bash
cd Automation-E2E-Web-with-Cypress
`

3. Instale as dependências do projeto:
`bash
npm install
`

4. Crie o arquivo de variáveis de ambiente local (opcional, caso utilize dados sensíveis):
Crie um arquivo `cypress.env.json` na raiz do projeto (este arquivo é ignorado pelo Git).
`json
{
  "users": {
    "valid": { "username": "standard_user", "password": "secret_sauce" },
    "locked": { "username": "locked_out_user", "password": "secret_sauce" }
  }
}
`

## 💻 Como Executar os Testes

O projeto conta com scripts customizados no `package.json` para facilitar a execução.

**Para abrir a interface interativa do Cypress (Modo Visual):**
`bash
npm run cy:open
`

**Para rodar todos os testes em background (Modo Headless - Ideal para CI/CD):**
`bash
npm run cy:run
`

**Para rodar os testes, limpar logs antigos e gerar um relatório HTML:**
`bash
npm run test
`

## 📁 Estrutura da Arquitetura (Clean Architecture)

A estrutura de pastas foi pensada para isolar responsabilidades:

`text
📦 cypress/
 ┣ 📂 e2e/
 ┃ ┗ 📂 features/          # Arquivos .feature escritos em Gherkin (A Lógica de Negócio)
 ┣ 📂 support/
 ┃ ┣ 📂 ui/
 ┃ ┃ ┣ 📂 elements/        # Mapeamento estrito de seletores web (CSS/XPath)
 ┃ ┃ ┣ 📂 page-objects/    # Ações da página (clicar, preencher, validar) abstraindo os elementos
 ┃ ┃ ┗ 📂 steps/           # Step Definitions (Tradução do Gherkin para código JS)
 ┃ ┗ 📜 e2e.js             # Configurações globais e imports que rodam antes dos testes
 ┣ 📂 fixtures/            # Massa de dados estática (JSON, Imagens, etc.)
 ┗ 📜 cypress.config.js    # Configurações centrais do framework, plugins e base URLs
`

## 🧪 Escopo de Testes (SauceDemo)
Para esta PoC, mapeamos os fluxos críticos da aplicação:
- **Caminho Feliz (Positivos):**
  - Login com credenciais válidas.
  - Fluxo completo de compra (Checkout).
- **Exceções (Negativos):**
  - Tentativa de login com usuário bloqueado.
  - Tentativa de login com senha incorreta.

---
*Desenvolvido com ☕ e foco em Qualidade por WillianMP*