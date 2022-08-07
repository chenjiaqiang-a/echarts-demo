import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';
import Select from '../../components/Select';
import { themes } from '../../config/themes';

const Cpt4Demo05: FC<{}> = () => {
    const [theme, setTheme] = useState(themes[0]);
    const handleThemeChange = (val: any) => {
        setTheme(val);
    }; 
    return (
        <div className="cpt-4-05">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Select value={theme} label="主题切换：" onChange={handleThemeChange} options={themes} />
            <Chart
                option={{
                    title: {
                        text: '某大学各专业招生情况分析',
                        left: 60,
                        top: 10,
                    },
                    tooltip: {},
                    legend: {
                        left: 320,
                        top: 10,
                        data: ['2018', '2019', '2020'],
                    }, //配置图例组件
                    xAxis: {
                        data: [
                            '大数据',
                            '云计算',
                            '人工智能',
                            '网络工程',
                            '移动开发',
                            '软件开发',
                        ],
                    },
                    grid: { show: true },
                    yAxis: {},
                    series: [
                        {
                            name: '2018',
                            type: 'bar',
                            data: [122, 55, 44, 56, 110, 222],
                        },
                        {
                            name: '2019',
                            type: 'bar',
                            data: [315, 98, 122, 96, 115, 278],
                        },
                        {
                            name: '2020',
                            type: 'bar',
                            data: [382, 123, 222, 94, 125, 369],
                        },
                    ],
                }}
                theme={theme}
            />
        </div>
    );
};

export default Cpt4Demo05;
