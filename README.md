
# Seleção para Souv 🚀

Este é o projeto para o processo seletivo da **Souv**. Uma aplicação construída com **Next.js** e **TailwindCSS**. 

**Link para o Vercel com deploy**
[Vercel deploy](https://souv-selecao.vercel.app/)


## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para criação de aplicações web com renderização híbrida (SSR e SSG).
- **TailwindCSS**: Um framework CSS utilitário para estilizar componentes rapidamente.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática.
- **Docker**: Contêiner para rodar a aplicação em qualquer ambiente.


## Requisitos para rodar o projeto

É necessário para rodar o projeto: 

- [Node.js](https://nodejs.org/en/) (Versão 22.8 ou superior)
- [Docker](https://www.docker.com/) (opcional, mas necessário se quiser rodar via Docker)


### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd souv-selecao
```

### 2. Instalar dependências

Use o **npm** para instalar as dependências do projeto.

```bash
npm install
```

### 3. Rodar o projeto em desenvolvimento

Depois de instalar as dependências, você pode rodar o projeto no modo de desenvolvimento:

```bash
npm run dev
```

Isso vai iniciar o servidor localmente (localhost), e você pode acessar a aplicação em:

```
http://localhost:3000
```

### 4. Gerar a build de produção

Se você quiser criar uma build otimizada para produção, use o comando:

```bash
npm run build
```

Depois que o build for concluído, você pode rodar a aplicação em produção com:

```bash
npm run start
```

## Se quiser algo muito mais simples de rodar, bem vindo ao docker 🐳...


### 1. Baixar o Docker (caso já tenha instalado, próximo passo)

Ir no site Docker.com escrito no começo do readme e fazer o download do docker desktop (abrir ele quando instalar também)

### 2. Criar a imagem Docker

Dentro do diretório souv-selecao **(com s minúsculo)**

```bash
docker build .
```

### OBS IMPORTANTE
Caso sua porta 3000 já estiver sendo utilizada, tanto o docker quanto o docker-compose não irão rodar. Então certifique-se
de estar com a porta 3000 desligada.


### 3. Rodar o container Docker 

Depois que a imagem for criada, você pode rodar o container com o comando:


```bash
docker run -p 3000:3000 souv-selecao-app
```

Isso irá iniciar o servidor e expor a aplicação na porta:

```
http://localhost:3000
```


### 3. Usando `docker-compose` (opcional)

Se preferir usar o Docker Compose, só entrar no diretório souv-selecao e utilizar o comando:

```bash
docker compose up --build
```

Isso irá construir a imagem e rodar o container automaticamente.

O Docker-compose tem o intuito de gerenciar mais de um container, porém a fins institucionais também preferi deixa-lo 
com a imagem que criamos anteriormente.




