import { BrowserRouter as Router } from "react-router-dom"; // Importar Router, Routes e Route
import Home from "./pages"; // Certifique-se de que o caminho esteja correto
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {

  return (

      
    <Router>
      
      <Home></Home>
    </Router>
  );
};

export default App;
