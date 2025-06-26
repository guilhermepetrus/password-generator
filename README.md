# Gerador de Senhas em React

Este projeto é um gerador de senhas simples construído com [React](https://react.dev/) e [Vite](https://vitejs.dev/). A aplicação cria senhas aleatórias de 12 caracteres misturando letras, números e símbolos, além de permitir copiá-las para a área de transferência.

## Requisitos

- Node.js (versão LTS recomendada)
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## Uso

Execute o servidor de desenvolvimento com:

```bash
npm run dev
```

A aplicação será inicializada normalmente em `http://localhost:5173/`.

### Geração de senhas

O código de geração se encontra em `src/App.jsx`:

```javascript
function passwordGenerator() {
  let caracters = "1234567890-=\\[];',./~!@#$%^&*()_+|{}:<>?`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let passLenght = 12;
  let newPassword = null;
  let randomNum = null;

  for (let i = 1; i < passLenght; i++) {
    randomNum = Math.floor(Math.random() * caracters.length);
    newPassword += caracters[randomNum];
  }

  setPassword(newPassword);
  setCopy("Copiar");
}

function copyToClipboard() {
  window.navigator.clipboard.writeText(password);
  setCopy("Copiado");
}
```

## Scripts disponíveis

No `package.json` existem alguns scripts úteis:

```json
"dev": "vite",
"build": "vite build",
"lint": "eslint .",
"preview": "vite preview"
```

Use `npm run build` para gerar a versão de produção e `npm run preview` para visualizá-la localmente.

## Licença

Este projeto foi disponibilizado sem uma licença específica.
