# 🔐 Gerador de Senhas em React

Este é um gerador de senhas simples, desenvolvido com [React](https://react.dev/) e [Vite](https://vitejs.dev/). A aplicação cria senhas aleatórias de 12 caracteres, combinando letras, números e símbolos, e permite copiá-las para a área de transferência com um clique.

## ✅ Requisitos

- Node.js (versão LTS recomendada)  
- npm

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## ▶️ Uso

Execute o servidor de desenvolvimento com o comando:

```bash
npm run dev
```

A aplicação estará disponível em: [http://localhost:5173](http://localhost:5173)

## 🔁 Geração de Senhas

A lógica de geração está localizada em `src/App.jsx`:

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

## 🛠 Scripts disponíveis

No `package.json`, os seguintes scripts estão disponíveis:

```json
"dev": "vite",
"build": "vite build",
"lint": "eslint .",
"preview": "vite preview"
```

- `npm run dev`: inicia o ambiente de desenvolvimento
- `npm run build`: gera a versão de produção
- `npm run preview`: visualiza a build localmente
- `npm run lint`: executa a verificação de linting
