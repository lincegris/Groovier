import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthProvider from "./Context/AuthProvider";
export default function App() {
  return (
    <div className="App">
      <AuthProvider >
        <Router>
            <Public />
        </Router>
      </ AuthProvider>
    </div>
  );
};
