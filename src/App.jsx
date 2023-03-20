import AppRouter from "./AppRouter.jsx";
import './assets/styles/common.scss'
import {GoogleOAuthProvider} from "@react-oauth/google";

function App() {
  return (
    <main className="App">
        <GoogleOAuthProvider clientId='792789015648-nsnptboa912bvuvujfsugeci6pj45k72.apps.googleusercontent.com'>
            <AppRouter/>
        </GoogleOAuthProvider>
    </main>
  )
}

export default App
