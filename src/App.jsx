// App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// コンポーネントのインポート
import Header from './components/Header';
import Footer from './components/Footer';
import Rule from './components/Rule';
import Access from './components/Access';
import Main from './components/Main';
import Contact from './components/Contact'








function App() {
    return (
        <Router>
            <Header />  {/* ヘッダーコンポーネントの配置 */}
            
            {/* 本文のコンテンツの配置 */}
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/rule" element={<Rule />} />
                    <Route path="/access" element={<Access />} />
                </Routes>
            </div>
            
            <Footer />  {/* フッターコンポーネントの配置 */}
        </Router>
    );
}

export default App;
