import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const dataAll = [
    //数据
    [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14, 9.96],
        [6, 7.24],
        [4, 4.26],
        [12, 10.84],
        [7, 4.82],
        [5.0, 5.68],
    ],
    [
        [10, 9.14],
        [8.0, 8.14],
        [13, 8.74],
        [9, 8.77],
        [11, 9.26],
        [14.0, 8.1],
        [6.0, 6.13],
        [4.0, 3.1],
        [12.0, 9.13],
        [7, 7.26],
        [5.0, 4.74],
    ],
    [
        [4.0, 4.6],
        [5.0, 5.7],
        [6.0, 6.4],
        [7.0, 8.1],
        [8.0, 7.1],
        [9.0, 8.4],
        [10.0, 9.8],
        [11.0, 9.9],
        [12.0, 8.5],
        [13.0, 9.2],
        [15.0, 11.0],
    ],
    [
        [2.0, 2.8],
        [3.0, 3.6],
        [4.0, 4.1],
        [5.0, 5.4],
        [6.0, 6.7],
        [7.0, 7.4],
        [8.0, 7.5],
        [9.0, 7.5],
        [12.0, 9.6],
        [15.0, 10.1],
        [18.0, 11.9],
    ],
];

const Cpt2Demo04: FC<{}> = () => {
    return (
        <div className="demo-container cpt-2-04">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={600}
                height={600}
                option={{
                    title: [
                        {
                            text: '气温变化',
                            textAlign: 'center',
                            left: '25%',
                            top: '1%',
                        },
                        {
                            text: '空气质量指数',
                            textAlign: 'center',
                            left: '73%',
                            top: '1%',
                        },
                        {
                            text: '金价走势',
                            textAlign: 'center',
                            left: '25%',
                            top: '50%',
                        },
                        {
                            text: '股票A走势',
                            textAlign: 'center',
                            left: '73%',
                            top: '50%',
                        },
                    ],
                    grid: [
                        { left: '7%', top: '7%', width: '38%', height: '38%' },
                        { right: '7%', top: '7%', width: '38%', height: '38%' },
                        {
                            left: '7%',
                            bottom: '7%',
                            width: '38%',
                            height: '38%',
                        },
                        {
                            right: '7%',
                            bottom: '7%',
                            width: '38%',
                            height: '38%',
                        },
                    ],
                    tooltip: {
                        formatter: 'Group {a}:({c})',
                    },
                    xAxis: [
                        //配置x轴坐标系
                        { gridIndex: 0, min: 0, max: 20 },
                        { gridIndex: 1, min: 0, max: 20 },
                        { gridIndex: 2, min: 0, max: 20 },
                        { gridIndex: 3, min: 0, max: 20 },
                    ],
                    yAxis: [
                        //配置y轴坐标系
                        { gridIndex: 0, min: 0, max: 15 },
                        { gridIndex: 1, min: 0, max: 15 },
                        { gridIndex: 2, min: 0, max: 15 },
                        { gridIndex: 3, min: 0, max: 15 },
                    ],
                    series: [
                        //配置数据系列
                        {
                            //设置数据系列1
                            name: 'I',
                            type: 'scatter',
                            xAxisIndex: 0,
                            yAxisIndex: 0,
                            data: dataAll[0],
                            markLine: {
                                animation: false,
                                lineStyle: {
                                    type: 'solid',
                                },
                                data: [
                                    [
                                        {
                                            coord: [0, 3],
                                            symbol: 'none', //设置起点或终点的坐标
                                        },
                                        {
                                            coord: [20, 13],
                                            symbol: 'none',
                                        },
                                    ],
                                ],
                            },
                        },
                        {
                            //设置数据系列2
                            name: 'II',
                            type: 'scatter',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            data: dataAll[1],
                            markLine: {
                                animation: false,
                                lineStyle: {
                                    type: 'solid',
                                },
                                data: [
                                    [
                                        {
                                            coord: [0, 3],
                                            symbol: 'none', //设置起点或终点的坐标
                                        },
                                        {
                                            coord: [20, 13],
                                            symbol: 'none',
                                        },
                                    ],
                                ],
                            },
                        },
                        {
                            //设置数据系列3
                            name: 'III',
                            type: 'scatter',
                            xAxisIndex: 2,
                            yAxisIndex: 2,
                            data: dataAll[2],
                            markLine: {
                                animation: false,
                                lineStyle: {
                                    type: 'solid',
                                },
                                data: [
                                    [
                                        {
                                            coord: [0, 3],
                                            symbol: 'none', //设置起点或终点的坐标
                                        },
                                        {
                                            coord: [20, 13],
                                            symbol: 'none',
                                        },
                                    ],
                                ],
                            },
                        },
                        {
                            //设置数据系列4
                            name: 'IV',
                            type: 'scatter',
                            xAxisIndex: 3,
                            yAxisIndex: 3,
                            data: dataAll[3],
                            markLine: {
                                animation: false,
                                lineStyle: {
                                    type: 'solid',
                                },
                                data: [
                                    [
                                        {
                                            coord: [0, 3],
                                            symbol: 'none', //设置起点或终点的坐标
                                        },
                                        {
                                            coord: [20, 13],
                                            symbol: 'none',
                                        },
                                    ],
                                ],
                            },
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt2Demo04;
