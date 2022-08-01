import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt2Demo09: FC<{}> = () => {
    return (
        <div className="cpt-2-09">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={900}
                height={600}
                option={{
                    color: [
                        'green',
                        'red',
                        'blue',
                        'yellow',
                        'grey',
                        '#FA8072',
                    ],
                    title: {
                        left: 55,
                        text: '标记点与标记线实例',
                    },
                    toolbox: {
                        left: 520,
                        show: true,
                        feature: {
                            dataView: { show: true },
                            restore: { show: true },
                            dataZoom: { show: true },
                            magicType: {
                                show: true,
                                title: {
                                    line: '动态类型切换-折线图',
                                    bar: '动态类型切换-柱状图',
                                },
                                type: ['line', 'bar'],
                            },
                            saveAsImage: { show: true },
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        data: ['销量'],
                    },
                    xAxis: {
                        data: [
                            '衬衫',
                            '羊毛衫',
                            '雪纺衫',
                            '裤子',
                            '高跟鞋',
                            '袜子',
                        ],
                    },
                    yAxis: {},
                    series: [
                        {
                            name: '销量',
                            type: 'bar',
                            data: [15, 30, 56, 40, 100, 80],
                            markPoint: {
                                //设置标记点
                                data: [
                                    {
                                        type: 'max',
                                        name: '最大值',
                                        symbol: 'diamond',
                                        symbolSize: 25,
                                        itemStyle: {
                                            //设置标记点的样式
                                            color: 'red',
                                        },
                                    },
                                    {
                                        type: 'min',
                                        name: '最小值',
                                        symbol: 'arrow',
                                        symbolSize: 20,
                                        itemStyle: {
                                            //设置标记点的样式
                                            color: 'blue',
                                        },
                                    },
                                ],
                            },
                            markLine: {
                                //设置标记线
                                data: [
                                    {
                                        type: 'average',
                                        name: '平均值',
                                        //设置标记点的样式
                                        itemStyle: {
                                            borderType: 'dotted',
                                            color: 'darkred',
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt2Demo09;
