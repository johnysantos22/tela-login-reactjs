import Login from "./login/Login.jsx"
import Register from "./registro/Registro.jsx";
import React from "react-router-dom"

function App() {
  
  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  )
}

export default App
