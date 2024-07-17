import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EstateForSale from './pages/EstateForSale';
import EstateForRent from './pages/EstateForRent';
import DetailedProperty from './pages/DetailedProperty';
import News from './pages/News';
import AnalysisPage from './pages/AnalysisPage';
import Forum from './pages/Forum';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />} />
            <Route path="/estate-for-sale" element={<EstateForSale />} />
            <Route path="/estate-for-rent" element={<EstateForRent />} />
            <Route path="/detailed-property" element={<DetailedProperty />}></Route>
            <Route path="/analysis-page" element={<AnalysisPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup"  element={<Signup />} />
          </Routes>
        <Footer />
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
