import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as echarts from 'echarts';
import Chart from '../../components/Chart';

const data = [
    [
        [28604, 77, 17096869, 'A', 1990],
        [31163, 77.4, 27662440, 'B', 1990],
        [1516, 68, 1154605773, 'C', 1990],
        [13670, 74.7, 10582082, 'D', 1990],
        [28599, 75, 4986705, 'E', 1990],
        [29476, 77.1, 56943299, 'F', 1990],
        [31476, 75.4, 78958237, 'G', 1990],
        [28666, 78.1, 254830, 'H', 1990],
        [1777, 57.7, 870601776, 'I', 1990],
        [29550, 79.1, 122249285, 'J', 1990],
        [2076, 67.9, 20194354, 'K', 1990],
        [12087, 72, 42972254, 'L', 1990],
        [24021, 75.4, 3397534, 'M', 1990],
        [43296, 76.8, 4240375, 'N', 1990],
        [10088, 70.8, 38195258, 'O', 1990],
        [19349, 69.6, 147568552, 'P', 1990],
        [10670, 67.3, 53994605, 'Q', 1990],
        [26424, 75.7, 57110117, 'R', 1990],
        [37062, 75.4, 252847810, 'S', 1990],
    ],
    [
        [44056, 81.8, 23968973, 'A', 2015],
        [43294, 81.7, 35939927, 'B', 2015],
        [13334, 76.9, 1376048943, 'C', 2015],
        [21291, 78.5, 11389562, 'D', 2015],
        [38923, 80.8, 5503457, 'E', 2015],
        [37599, 81.9, 64395345, 'F', 2015],
        [44053, 81.1, 80688545, 'G', 2015],
        [42182, 82.8, 329425, 'H', 2015],
        [5903, 66.8, 1311050527, 'I', 2015],
        [36162, 83.5, 126573481, 'J', 2015],
        [1390, 71.4, 25155317, 'K', 2015],
        [34644, 80.7, 50293439, 'L', 2015],
        [34186, 80.6, 4528526, 'M', 2015],
        [64304, 81.6, 5210967, 'N', 2015],
        [24787, 77.3, 38611794, 'O', 2015],
        [23038, 73.13, 143456918, 'P', 2015],
        [19360, 76.5, 78665830, 'Q', 2015],
        [38225, 81.4, 64715810, 'R', 2015],
        [53354, 79.1, 321773631, 'S', 2015],
    ],
];

const Cpt3Demo05: FC<{}> = () => {
    return (
        <div className="demo-container cpt-3-05">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={900}
                height={600}
                option={{
                    backgroundColor: new echarts.graphic.RadialGradient(
                        0.3,
                        0.3,
                        0.8,
                        [
                            { offset: 0, color: '#f7f8fa' },
                            { offset: 1, color: '#cdd0d5' },
                        ]
                    ),
                    title: {
                        left: 20,
                        top: 5,
                        text: '1990年与2015年各国家人均寿命与GDP',
                    },
                    legend: {
                        left: 510,
                        top: 14,
                        right: 10,
                        data: ['1990', '2015'],
                    },
                    grid: {
                        top: '10%',
                        left: '5%',
                        right: '12%',
                        bottom: '3%',
                        containLabel: true,
                    },
                    xAxis: {
                        splitLine: { lineStyle: { type: 'dashed' } },
                        name: 'GDP（亿美元）',
                    },
                    yAxis: {
                        splitLine: { lineStyle: { type: 'dashed' } },
                        scale: true,
                        name: '人均寿命（岁）',
                    },
                    series: [
                        {
                            name: '1990',
                            data: data[0],
                            type: 'scatter',
                            symbolSize: (data) => {
                                return Math.sqrt(data[2]) / 5e2;
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: (param: any) => {
                                        return (
                                            param.data[3] + ',' + param.data[4]
                                        );
                                    },
                                },
                            },
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetY: 5,
                                shadowColor: 'rgba(120, 36, 50, 0.5)',
                                color: new echarts.graphic.RadialGradient(
                                    0.4,
                                    0.3,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: 'rgb(251, 118, 123)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(204, 46, 72)',
                                        },
                                    ]
                                ),
                            },
                        },
                        {
                            name: '2015',
                            data: data[1],
                            type: 'scatter',
                            symbolSize: (data) => {
                                return Math.sqrt(data[2]) / 5e2;
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: (param: any) => {
                                        return (
                                            param.data[3] + ',' + param.data[4]
                                        );
                                    },
                                },
                            },
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetY: 5,
                                shadowColor: 'rgba(25, 100, 150, 0.5)',
                                color: new echarts.graphic.RadialGradient(
                                    0.4,
                                    0.3,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: 'rgb(129, 227, 238)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(25, 183, 207)',
                                        },
                                    ]
                                ),
                            },
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt3Demo05;
