import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EstateForSale from './pages/EstateForSale';
import EstateForRent from './pages/EstateForRent';
import DetailedProperty from './pages/DetailedProperty';
import News from './pages/News';
import DetailedNews from './pages/DetailedNews';
import AnalysisPage from './pages/AnalysisPage';
import AdminPage from './pages/AdminPage';
import WishList from './pages/WishList';
import AccountManegement from './pages/AccountManagement';
import AuthorViewer from './pages/AuthorViewer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


import { AuthProvider } from './AuthContext';
import { ActiveProvider } from './ActiveButton';

function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthProvider>
        <ActiveProvider>
            <Navbar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />} />
                <Route path="/estate-for-sale" element={<EstateForSale />} />
                <Route path="/estate-for-rent" element={<EstateForRent />} />              
                <Route path="/detailed-property/sale/:propertyId/:kind" element={<DetailedProperty />}>
                  </Route>
                <Route path="/detailed-property/rent/:propertyId/:kind" element={<DetailedProperty />}>
                  </Route>
                <Route path="/analysis-page" element={<AnalysisPage />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/detailed-new/:newId" element={<DetailedNews />} />
                <Route path="/admin-page" element={<AdminPage />} />
                <Route path="/wish-list" element={<WishList />}></Route>
                <Route path="/account-management" element={<AccountManegement />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup"  element={<Signup />} />
                <Route path="/author-viewer/:authorId" element={<AuthorViewer />} />
              </Routes>
            <Footer />
        </ActiveProvider>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
