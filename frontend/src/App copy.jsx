// import Navigation from "./routes/Navigation"
// import { Navegacion } from "./routes"
// import {ClientLayout} from "./layouts"
import { ToastContainer } from "react-toastify"
import { Navegacion } from "./routes"
import { AuthProvider } from "./context"
function App() {

  return (
    <AuthProvider>
      <Navegacion/>

      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthProvider>
  )
}

export default App
