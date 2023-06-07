# Teste Econverse: Vaga Desenvolvedor Front-End Jr

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/nbc7/teste-front-end-jr/blob/main/README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/nbc7/teste-front-end-jr/blob/main/README.en.md)

## 📕 Instruções

- Clone o projeto com o método que preferir
- Você deve ter um diretório `/app` e esse arquivo `README.md`, prossiga navegando para o diretório `/app`

```bash
cd app
```

- Instale as dependências

```bash
npm install
```

## 💻 Compilar

- Você pode compilar o projeto com:

```bash
npm run build
```

- Depois disso, você vai ver um diretório `/dist` com o resultado

## 🚀 Rodar

- Depois de compilar, você pode rodar o projeto compilado ou como desenvolvimento

- Projeto compilado:

```bash
npm run preview
```

- Você pode acessar o projeto no endereço padrão [localhost:4173](http://localhost:4173/)

- Como desenvolvimento:

```bash
npm run dev
```

- Você pode acessar o projeto no endereço padrão [localhost:5173](http://localhost:5173/)

## ⚡ Teste

- Tenha certeza que você está rodando o projeto compilado
- O único teste disponível consiste em mover o carrosel, abrir um modal com as informações do produto ao clicar no card do produto e fechar
- Inicie o teste com:

```bash
npm run cy:run
```

- Uma nova janela vai abrir e você pode ver os resultados do teste ao lado esquerdo, eles devem estar todos verdes
