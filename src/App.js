import logo from './logo.svg';
import './App.css';
import AppRouter from './routes';
import { BrowserRouter } from "react-router-dom"
import { ProSidebarProvider } from 'react-pro-sidebar';
import './';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProSidebarProvider>
          <AppRouter />
        </ProSidebarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
