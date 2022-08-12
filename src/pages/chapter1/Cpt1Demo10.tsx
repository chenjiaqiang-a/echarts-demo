import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt1Demo10: FC<{}> = () => {
    return (
        <div className="cpt-1-10 demo-container">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={900}
                height={600}
                option={{
                    title: {
                        backgroundColor: 'yellow',
                        text: '某大学三大学院的专业分布',
                        textStyle: {
                            color: 'green',
                            fontFamily: '黑体',
                            fontSize: 28,
                        },
                        left: 'center',
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a}<br/>{b} : {c} ({d}%)',
                    },
                    legend: {
                        orient: 'vertical',
                        left: 32,
                        top: 74,
                        data: [
                            '1-软件技术',
                            '1-移动应用开发',
                            '2-大数据技术与应用',
                            '2-移动互联应用技术',
                            '2-云计算技术与应用',
                            '3-投资与理财',
                            '3-财务管理',
                        ],
                    },
                    toolbox: {
                        show: true,
                        left: 555,
                        top: 74,
                        feature: {
                            dataView: { show: true, readOnly: false },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    series: [
                        {
                            name: '专业名称',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: ['10%', '30%'],

                            label: {
                                position: 'inner',
                            },
                            labelLine: {
                                show: false,
                            },
                            data: [
                                { value: 1200, name: '计算机学院' },
                                { value: 900, name: '大数据学院' },
                                {
                                    value: 600,
                                    name: '财金学院',
                                    selected: true,
                                }, //初始时为选中状态
                            ],
                        },
                        {
                            name: '专业名称',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: ['40%', '55%'],
                            data: [
                                { value: 800, name: '1-软件技术' },
                                { value: 400, name: '1-移动应用开发' },
                                { value: 500, name: '2-大数据技术与应用' },
                                { value: 200, name: '2-移动互联应用技术' },
                                { value: 200, name: '2-云计算技术与应用' },
                                { value: 400, name: '3-投资与理财' },
                                { value: 200, name: '3-财务管理' },
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt1Demo10;
