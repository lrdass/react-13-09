import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import PropTypes from 'prop-types';

import './App.css'


function Login (props) {
  /**
   * 
   * Comentario que eu nao quero no commit anterior!
   */
  

  const [fieldState, setFieldState] = useState('')
  console.log('current fieldstate ',fieldState)

  return (
    <>  
    {props.nomeField}
    <input aria-label={props.nomeField} onChange={e => setFieldState(e.target.value)} />

  </>
  )

}

Login.propTypes = {
  nomeField: PropTypes.string,
  aoDigitar: PropTypes.func
}

function Formulario() {

  let printarOqueDigita =(event) => {
    console.log(event.target.value)
  }

  return (
    <>

    <Login nomeField="E-mail" aoDigitar={printarOqueDigita} />
    <>
    senha
    </>
</>
  )
}



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Formulario/> 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> 
  )
}

export default App
