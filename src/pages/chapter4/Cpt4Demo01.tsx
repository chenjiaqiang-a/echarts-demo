import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt4Demo01: FC<{}> = () => {
    return (
        <div className="demo-container cpt-4-01">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={600}
                option={{
                    backgroundColor: 'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1
                    tooltip: { trigger: 'axis' },
                    legend: {
                        data: ['降水量', '蒸发量'],
                        left: 'center',
                        top: 12,
                    },
                    xAxis: [
                        {
                            type: 'category',
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
                    ],
                    yAxis: [
                        {
                            //设置两个Y轴之1：降水量
                            type: 'value',
                            name: '降水量（mL）',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: { formatter: '{value} ' },
                        },
                        {
                            //设置两个Y轴之2：蒸发量
                            type: 'value',
                            name: '蒸发量（mL）',
                            min: 0,
                            max: 200,
                            position: 'right', //设置y轴安置的位置
                            offset: 0, //设置向右偏移的距离
                            axisLine: { lineStyle: { color: 'red' } },
                            axisLabel: { formatter: '{value} ' },
                        },
                    ],
                    series: [
                        {
                            name: '降水量',
                            type: 'bar',
                            itemStyle: {
                                //设置柱状图颜色
                                color: (params) => {
                                    const colorList = [
                                        '#fe9f4f',
                                        '#fead33',
                                        '#feca2b',
                                        '#fed728',
                                        '#c5ee4a',
                                        '#87ee4a',
                                        '#46eda9',
                                        '#47e4ed',
                                        '#4bbbee',
                                        '#4f8fa8',
                                        '#4586d8',
                                        '#4f68d8',
                                        '#F4E001',
                                        '#F0805A',
                                        '#26C0C0',
                                    ];
                                    return colorList[params.dataIndex];
                                },
                            },
                            data: [
                                50, 75, 100, 150, 200, 248, 220, 180, 155, 130,
                                90, 75,
                            ],
                        },
                        {
                            name: '蒸发量',
                            type: 'line',
                            yAxisIndex: 1, //指定使用第2个y轴
                            itemStyle: { color: 'red' }, //设置折线颜色
                            data: [
                                58, 65, 90, 120, 130, 180, 150, 130, 125, 110,
                                150, 145,
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt4Demo01;
