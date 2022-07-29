import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt1Demo02: FC<{}> = () => {
    return (
        <div className="cpt-1-02">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                option={{
                    backgroundColor: '#2c343c',
                    title: {
                        text: '这是主标题',
                        textStyle: {
                            color: '#fff',
                        },
                        subtext: '这是副标题',
                        subtextStyle: {
                            color: '#bbb',
                        },
                        padding: [10, 0, 100, 100],
                    },
                    legend: {
                        type: 'plain',
                        top: '1%',
                        selected: {
                            销量: true,
                        },
                        textStyle: {
                            color: '#fff',
                        },
                        tooltip: {
                            show: true,
                            borderColor: 'red',
                            backgroundColor: 'transparent'
                        },
                        data: [
                            {
                                name: '销量',
                                icon: 'circle',
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                        ],
                    },
                    tooltip: {
                        show: false,
                        trigger: 'item',
                        axisPointer: {
                            type: 'shadow',
                            axis: 'auto',
                        },
                        padding: 5,
                        textStyle: {
                            color: '#fff',
                        },
                    },
                    grid: {
                        show: false,
                        top: 80,
                        containLabel: false,
                        tooltip: {
                            show: true,
                            trigger: 'item',
                            textStyle: {
                                color: '#fff666',
                            },
                            borderColor: 'red',
                            backgroundColor: 'transparent'
                        },
                    },
                    xAxis: {
                        show: true,
                        position: 'bottom',
                        offset: 0,
                        type: 'category',
                        name: '月份',
                        nameLocation: 'end',
                        nameTextStyle: {
                            color: '#fff',
                            padding: [5, 0, 0, -5],
                        },
                        nameGap: 15,
                        axisLine: {
                            show: true,
                            symbol: ['none', 'arrow'],
                            symbolSize: [8, 8],
                            symbolOffset: [0, 7],
                            lineStyle: {
                                color: '#fff',
                                width: 1,
                                type: 'solid',
                            },
                        },
                        axisTick: {
                            show: true,
                            inside: true,
                            length: 3,
                            lineStyle: {
                                color: 'yellow',
                                width: 1,
                                type: 'solid',
                            },
                        },
                        axisLabel: {
                            show: true,
                            inside: false,
                            rotate: 0,
                            margin: 5,
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: 'red',
                            },
                        },
                        splitArea: {
                            show: false,
                        },
                        data: [
                            '1月',
                            '2月',
                            '3月',
                            '4月',
                            '5月',
                            '6月',
                            '7月',
                            '8月',
                            '9月',
                            '10月',
                            '11月',
                            '12月',
                        ],
                    },
                    yAxis: {
                        show: true,
                        position: 'left',
                        offset: 0,
                        type: 'value',
                        name: '销量',
                        nameLocation: 'end',
                        nameTextStyle: {
                            color: '#fff',
                            padding: [5, 0, 0, 5],
                        },
                        nameGap: 15,
                        nameRotate: 0,
                        axisLine: {
                            show: true,
                            symbol: ['none', 'arrow'],
                            symbolSize: [8, 8],
                            symbolOffset: [0, 7],
                            lineStyle: {
                                color: '#fff',
                                width: 1,
                                type: 'solid',
                            },
                        },
                        axisTick: {
                            show: true,
                            inside: true,
                            length: 3,
                            lineStyle: {
                                width: 1,
                                type: 'solid',
                            },
                        },
                        axisLabel: {
                            show: true,
                            inside: false,
                            rotate: 0,
                            margin: 8,
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#666',
                                width: 1,
                                type: 'dashed',
                            },
                        },
                        splitArea: {
                            show: false,
                        },
                    },
                    series: [
                        {
                            name: '销量',
                            type: 'bar',
                            legendHoverLink: true,
                            label: {
                                show: false,
                                position: 'insideTop',
                                rotate: 0,
                                color: '#eee',
                            },
                            itemStyle: {
                                color: 'blue',
                                borderRadius: [18, 18, 0, 0],
                            },
                            barWidth: '20',
                            barCategoryGap: '20%',
                            data: [
                                3020, 4800, 3600, 6050, 4320, 6200, 5050, 7200,
                                4521, 6700, 8000, 5020,
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt1Demo02;
