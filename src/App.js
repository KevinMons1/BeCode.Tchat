import './Styles/app.scss';
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import SignIn from "./Pages/Connexion/SignIn"
import SignUp from "./Pages/Connexion/SignUp"
import Home from "./Pages/Home/Home"
import Users from "./Pages/Users/Users"
import Account from "./Pages/Account/Account"
import Message from "./Pages/Message/Message"

function App() {
  return (
    <Routes>
      <Route path="/" element={ <ProtectedRoute connexion={true} component={SignIn} /> } />
      <Route path="/signup" element={ <ProtectedRoute connexion={true} component={SignUp} /> } />
      <Route path="/home" element={ <ProtectedRoute component={Home} /> } />
      <Route path="/users" element={ <ProtectedRoute component={Users} /> } />
      <Route path="/account/:id" element={ <ProtectedRoute component={Account} /> } />
      <Route path="/message/:name" element={ <ProtectedRoute component={Message} /> } />
    </Routes>
  );
}

export default App;
