import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import Account from "./pages/Account"
import Login from "./pages/Login"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  )
}

export default App
