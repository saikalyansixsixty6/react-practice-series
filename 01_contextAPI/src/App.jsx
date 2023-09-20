import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/userContextProvider"

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with vite || ContextApi</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
