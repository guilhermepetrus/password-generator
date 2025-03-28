import { useState } from 'react'

function App() {

  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copiar");

  function passwordGenerator() {
    let caracters = "1234567890-=\[];',./~!@#$%^&*()_+|{}:<>?`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let passLenght = 12
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

  return (
      <div className='app'>
        <h1>Gerador de sehas</h1>
          <button onClick={passwordGenerator}>Gerar!</button>
          <button onClick={copyToClipboard}>{copy}</button>
          <div>{password}</div>
      </div>
  )
}

export default App
