import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';
import * as echarts from 'echarts';

const Cpt4Demo03: FC<{}> = () => {
    const groupName = 'barGroup';
    useEffect(() => {
		echarts.connect(groupName);
    }, []);
    return (
        <div className="cpt-4-03">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                option={{
                    color: ['LimeGreen', 'DarkGreen', 'red', 'blue', 'Purple'],
                    backgroundColor: 'rgba(128, 128, 128, 0.1)',
                    title: {
                        text: '某学院2019年专业招生情况汇总表',
                        left: 40,
                        top: 5,
                    },
                    tooltip: { show: true },
                    legend: { data: ['2019年招生'], left: 422, top: 8 },
                    xAxis: [
                        {
                            data: [
                                '大数据',
                                '云计算',
                                'Oracle',
                                'ERP',
                                '人工智能',
                                '软件开发',
                                '移动开发',
                                '网络技术',
                            ],
                            axisLabel: { interval: 0 },
                        },
                    ],
                    yAxis: [{ type: 'value' }],
                    series: [
                        {
                            //配置第1个图表的数据系列
                            name: '2019年招生',
                            type: 'bar',
                            barWidth: 40, //设置柱状图中每个柱子的宽度
                            data: [125, 62, 45, 56, 123, 205, 108, 128],
                        },
                    ],
                }}
                group={groupName}
            />
            <Chart
                option={{
                    color: ['blue', 'LimeGreen', 'DarkGreen', 'red', 'Purple'],
                    backgroundColor: 'rgba(128, 128, 128, 0.1)',
                    title: {
                        text: '某学院2020年专业招生情况汇总表',
                        left: 40,
                        top: 8,
                    },
                    tooltip: { show: true },
                    legend: { data: ['2020年招生'], left: 422, top: 8 },
                    xAxis: [
                        {
                            data: [
                                '大数据',
                                '云计算',
                                'Oracle',
                                'ERP',
                                '人工智能',
                                '软件开发',
                                '移动开发',
                                '网络技术',
                            ],
                            axisLabel: { interval: 0 },
                        },
                    ],
                    yAxis: [{ type: 'value' }],
                    series: [
                        {
                            //配置第2个图表的数据系列
                            name: '2020年招生',
                            type: 'bar',
                            barWidth: 40, //设置柱状图中每个柱子的宽度
                            data: [325, 98, 53, 48, 222, 256, 123, 111],
                        },
                    ],
                }}
                group={groupName}
            />
        </div>
    );
};

export default Cpt4Demo03;
