import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { routes } from './config/routes';
import Platform from './pages/chapter5/Platform';
import Total from './pages/chapter5/Total';
import Sale from './pages/chapter5/Sale';
import Inventory from './pages/chapter5/Inventory';
import User from './pages/chapter5/User';

function App() {
    return (
        <Routes>
            <Route index element={<Home />} />
            {routes.map((route) => (
                <Route
                    key={route.link}
                    path={route.link}
                    element={route.element}
                />
            ))}
            <Route path="cpt-5" element={<Platform />}>
                <Route path="total" element={<Total />} />
                <Route path="sale" element={<Sale />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="user" element={<User />} />
                <Route index element={<Navigate to="/cpt-5/total" />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default App;
