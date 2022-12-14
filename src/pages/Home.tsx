import { FC } from 'react';
import { Link } from 'react-router-dom';
import { cpt1Routes, cpt2Routes, cpt3Routes, cpt4Routes } from '../config/routes';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <div className="home">
            <h1>Web数据可视化（ECharts版）</h1>
            <h3>ECharts 常用图表</h3>
            <ul>
                {cpt1Routes.map(route => (
                    <li key={route.link}><Link to={`/${route.link}`}>{route.text}</Link></li>
                ))}
            </ul>
            <h3>ECharts 官方文档及常用组件</h3>
            <ul>
                {cpt2Routes.map(route => (
                    <li key={route.link}><Link to={`/${route.link}`}>{route.text}</Link></li>
                ))}
            </ul>
            <h3>ECharts 中的其它图表</h3>
            <ul>
                {cpt3Routes.map(route => (
                    <li key={route.link}><Link to={`/${route.link}`}>{route.text}</Link></li>
                ))}
            </ul>
            <h3>ECharts 的高级功能</h3>
            <ul>
                {cpt4Routes.map(route => (
                    <li key={route.link}><Link to={`/${route.link}`}>{route.text}</Link></li>
                ))}
            </ul>
            <h3>应用实战：无人售货机零售项目 ECharts 展现</h3>
            <ul>
                <li><Link to="/cpt-5/total">售货机大数据分析平台</Link></li>
            </ul>
        </div>
    );
};

export default Home;
