import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import VerificationCodePage from '../pages/VerificationCodePage';
import SelectPlan from '../pages/SelectPlan';
import HomePage from '../pages/HomePage';
import ClientPage from '../pages/ClientPage';
import CampaignPage from '../pages/CampaignPage';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/VerificationCode" element={<VerificationCodePage />} />
                <Route path="/SeleccionarPlan" element={<SelectPlan />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/ClientPage" element={<ClientPage />} />
                <Route path="/CampaignPage" element={<CampaignPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;