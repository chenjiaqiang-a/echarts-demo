import { FC, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Platform: FC = () => {
    const location = useLocation();
    const [activePath, setActivePath] = useState<string>('');
    useEffect(() => {
        const path = location.pathname.split('/').pop();
        if (path) {
            setActivePath(path);
        }
    }, [location]);
    return (
        <div className="platform">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <div className="header">
                <div className="sysName">
                    <h1 className="tit">售货机大数据分析平台</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li className={activePath === 'total' ? 'on' : ''}>
                            <Link to="/cpt-5/total">总数据</Link>
                        </li>
                        <li className={activePath === 'sale' ? 'on' : ''}>
                            <Link to="/cpt-5/sale">销售分析</Link>
                        </li>
                        <li className="sysnameN"></li>
                        <li className={activePath === 'inventory' ? 'on' : ''}>
                            <Link to="/cpt-5/inventory">库存分析</Link>
                        </li>
                        <li className={activePath === 'user' ? 'on' : ''}>
                            <Link to="/cpt-5/user">用户分析</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Platform;
