import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt2Demo01: FC<{}> = () => {
    return (
        <div className="demo-container cpt-2-01">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={900}
                height={600}
                option={{
                    grid: {
                        //配置网格组件
                        show: true, //设置网格组件是否显示
                        left: 15, //设置网格左上角的位置
                        top: 66,
                        width: '93%', //设置网格的宽度和高度
                        height: '80%',
                        borderWidth: 5, //设置网格边界线的宽度
                        borderColor: 'red', //设置网格的边界颜色
                        backgroundColor: '#f7f7f7', //设置背景整个网格的颜色
                    },
                    title: {
                        text: '未来一周气温变化',
                    },
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        data: ['最高气温', '最低气温'],
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: { show: true, readOnly: false },
                            magicType: { show: true, type: ['line', 'bar'] },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    xAxis: [
                        {
                            show: false,
                            type: 'category',
                            boundaryGap: false,
                            data: [
                                '周一',
                                '周二',
                                '周三',
                                '周四',
                                '周五',
                                '周六',
                                '周日',
                            ],
                        },
                    ],
                    yAxis: [
                        {
                            show: false,
                            type: 'value',
                            axisLabel: { formatter: '{value} °C' },
                        },
                    ],
                    series: [
                        {
                            name: '最高气温',
                            smooth: true,
                            type: 'line',
                            data: [11, 11, 15, 13, 12, 13, 10],
                            markPoint: {
                                data: [
                                    { type: 'max', name: '最大值' },
                                    { type: 'min', name: '最小值' },
                                ],
                            },
                            markLine: {
                                data: [{ type: 'average', name: '平均值' }],
                            },
                        },
                        {
                            name: '最低气温',
                            smooth: true,
                            type: 'line',
                            data: [1, -2, 2, 5, 3, 2, 0],
                            markPoint: {
                                data: [
                                    {
                                        name: '周最低',
                                        value: -2,
                                        xAxis: 1,
                                        yAxis: -1.5,
                                    },
                                ],
                            },
                            markLine: {
                                data: [{ type: 'average', name: '平均值' }],
                            },
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt2Demo01;
