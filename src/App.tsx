import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { routes } from './config/routes';

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
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default App;
