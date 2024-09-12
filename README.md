# Country - Single Page App

## Descrição

> Este projeto é uma aplicação web full-stack desenvolvida com **Angular** no frontend e **Spring Boot** no backend. A aplicação permite a gestão de cidades e pontos turísticos, incluindo autenticação de usuários e um painel administrativo para a gestão de conteúdo, a página foi feita com foco no **Japão**.

---

## Índice

- [Tecnologias Usadas](#tecnologias-usadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Frontend (Angular)](#frontend-angular)
- [Backend (Spring Boot)](#backend-spring-boot)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Iniciando o projeto](#iniciando-o-projeto)
- [Licença](#licença)

---

## Tecnologias Usadas

- **Frontend**: [Angular](https://angular.io/), [Angular Material](https://material.angular.io/)
- **Backend**: [Spring Boot](https://spring.io/projects/spring-boot)
- **Banco de Dados**: [PostgreSQL](https://www.postgresql.org/)
- **Autenticação**: JWT (JSON Web Tokens)

---

## Instalação e Configuração

### Pré-requisitos

- Node.js e npm (para o frontend Angular)
- JDK 17+ (para o backend Spring Boot)
- PostgreSQL (para o banco de dados)

### Passos para Instalação

1. **Clonar o Repositório**

   ```bash
   git clone https://github.com/kingabreel/japan-spa.git
   cd japan-spa
   ```
2. **Configuração do backend**

    1. Navegue até o diretório do backend e configure o banco de dados:
    ```bash
    cd backend
    ```
    2. Edite o arquivo application.properties para configurar as credenciais do banco de dados:
    ```bash
    spring.datasource.url=jdbc:postgresql://localhost:5432/**nome_do_banco**
    spring.datasource.username=**usuario**
    spring.datasource.password=**senha**
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
    ```
    3. Instale as dependências
    ```bash
    mvn clean install
    ```

3. **Configuração do frontend**
    1. Navegue até o diretório do frontend e instale as dependências
    ```bash
    cd frontend
    ```
    2. Installe as dependências do projeto:
    ```bash
    npm install
    ```
    
4. **Configuração do Banco de Dados**
    No PostgreSQL, crie o banco de dados necessário:
    ```bash
    create database nome_do_banco;
    ```
## Estrutura do Projeto
```bash
nome-do-projeto/
├── backend/              # Código fonte do backend (Spring Boot)
│   ├── src/              # Código-fonte do backend
│   ├── pom.xml           # Arquivo Maven com dependências do projeto
├── frontend/             # Código fonte do frontend (Angular)
│   ├── src/              # Código-fonte do frontend
│   ├── angular.json      # Configurações do Angular CLI
│   ├── package.json      # Dependências do projeto Angular
└── README.md             # Documentação do projeto
```

## Frontend (Angular)
O frontend foi desenvolvido usando Angular e utiliza Angular Material para os componentes de UI. O código fonte do frontend está localizado na pasta country_spa - front/src
### Principais Componentes:
- app.component: Componente raiz da aplicação.
- auth-form.component: Componente de autenticação.
- admin-card.component: Componente para gestão de cidades e atrações turísticas.

## Backend (Spring boot)
O backend foi desenvolvido usando Spring Boot com um banco de dados PostgreSQL. O código fonte do backend está na pasta backend/src.

### Principais Controladores
- CityController: Controla a lógica relacionada às cidades.
- TouristAttractionController: Gerencia os pontos turísticos.

### Configurações de Segurança
O backend utiliza JWT para autenticação. O token JWT deve ser incluído no cabeçalho das requisições HTTP do frontend.

## Scripts Disponíveis

### Frontend
- ng serve: Inicia a aplicação Angular em localhost:4200.
- ng build: Compila o projeto Angular.

### Backend
- mvn spring-boot:run: Inicia o servidor backend Spring Boot em localhost:8080.
- mvn clean install: Compila e empacota o projeto backend.

## Iniciando o projeto
1. **Rodando o Backend**
Navegue até o diretório do backend e execute o seguinte comando:
    ```bash
    mvn spring-boot:run
    ```
2. **Rodando o Frontend**
Em uma nova janela do terminal, vá para o diretório do frontend e execute o seguinte comando:
    ```bash
    ng serve
    ```

3. **Acessar a Aplicação**
Após rodar os dois serviços, acesse a aplicação em http://localhost:4200.

## Licença

Este projeto está licenciado nos termos da licença MIT.
