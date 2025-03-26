import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import HomePage from '../pages/HomePage';
import VerificationCodePage from '../pages/VerificationCodePage';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/VerificationCode" element={<VerificationCodePage />} />
                <Route path="/HomePage" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;