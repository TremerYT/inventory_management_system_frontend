import "./index.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageLayout from "./components/layout.jsx";
import Dashboard from "./pages/dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App
