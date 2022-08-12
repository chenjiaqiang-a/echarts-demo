import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt3Demo02: FC<{}> = () => {
    return (
        <div className="demo-container cpt-3-02">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={600}
                option={{
                    color: ['red', 'green'],
                    title: {
                        left: 33,
                        text: '男性和女性身高、体重分布',
                        subtext: '抽样调查来自:FLQ 2020',
                    },
                    legend: { data: ['女性', '男性'] },
                    toolbox: {
                        left: 600,
                        show: true,
                        feature: {
                            dataZoom: { show: true },
                            dataView: { show: true, readOnly: false },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    xAxis: [
                        {
                            type: 'value',
                            scale: true,
                            axisLabel: { formatter: '{value} cm' },
                        },
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            scale: true,
                            axisLabel: { formatter: '{value} kg' },
                        },
                    ],
                    series: [
                        {
                            //设置女性数据
                            name: '女性',
                            type: 'scatter',
                            symbolSize: 8,
                            data: [
                                [161.2, 51.6],
                                [167.5, 59],
                                [159.5, 49.2],
                                [157, 63],
                                [155.8, 53.6],
                                [173.0, 59],
                                [159.1, 47.6],
                                [156, 69.8],
                                [166.2, 66.8],
                                [160.2, 75.2],
                                [167.6, 61],
                                [160.7, 69.1],
                                [163.2, 55.9],
                                [152, 46.5],
                                [157.5, 54.3],
                                [156, 52.7],
                                [160, 74.3],
                                [163, 62],
                                [165.7, 73.1],
                                [161, 80],
                            ],
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
                            //设置男性数据
                            name: '男性',
                            type: 'scatter',
                            symbolSize: 8,
                            data: [
                                [174, 65.6],
                                [175.3, 71.8],
                                [163.5, 80],
                                [186.5, 72.6],
                                [187.2, 78.8],
                                [167, 64.6],
                                [177.8, 74.8],
                                [164.5, 70],
                                [182, 101.6],
                                [165.5, 63.2],
                                [171.2, 79.1],
                                [181.6, 78.9],
                                [167.4, 67.7],
                                [181.1, 66],
                                [177, 68.2],
                                [161.5, 74.8],
                                [164.0, 86.4],
                                [164.5, 78.4],
                                [175, 62],
                                [164, 81.6],
                            ],
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
                    ],
                }}
            />
        </div>
    );
};

export default Cpt3Demo02;
