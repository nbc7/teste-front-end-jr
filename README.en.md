# Econverse Test: Vacancy Front-End Developer Jr

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/nbc7/teste-front-end-jr/blob/main/README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/nbc7/teste-front-end-jr/blob/main/README.en.md)

## 📕 Instructions

- Clone the project with the method you prefer
- You should have a `/app` directory and this `README.md` file, proceed by navigating to the `/app` directory

```bash
cd app
```

- Install the dependencies

```bash
npm install
```

## 💻 Build

- You can build the project with:

```bash
npm run build
```

- After that, you will see a `/dist` directory with the result

## 🚀 Run

- After build, you can run the built project or as development

- Built project:

```bash
npm run preview
```

- You can access the project on the default address [localhost:4173](http://localhost:4173/)

- As development:

```bash
npm run dev
```

- You can access the project on the default address [localhost:5173](http://localhost:5173/)

## ⚡ Test

- Make sure you are running the built project
- The only test available consists in move the carousel, open a modal with the product information whe the card is clicked and close
- Start the test with:

```bash
npm run cy:run
```

- A new window will open and you can see the test results on the left side, it should be all green
