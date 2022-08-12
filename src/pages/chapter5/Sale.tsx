import { FC } from 'react';
import * as echarts from 'echarts';
import { request } from '../../utils/request';
import Chart from '../../components/Chart';

const getSiteFetcher = (
    dataIndex: string,
    formatter: string
): (() => Promise<echarts.EChartsOption>) => {
    return () => {
        return new Promise((resolve, reject) => {
            request('http://localhost:3001/cpt5_sale_1')
                .then((dataList) => {
                    const data = dataList[0];
                    resolve({
                        tooltip: {
                            trigger: 'item',
                            formatter,
                        },
                        legend: {
                            type: 'scroll',
                            data: data.where,
                        },
                        toolbox: {
                            show: false,
                            feature: {
                                mark: { show: true },
                                dataView: { show: true, readOnly: false },
                                restore: { show: true },
                                saveAsImage: { show: true },
                            },
                        },
                        calculable: true,
                        series: [
                            {
                                name: '地点',
                                type: 'pie',
                                radius: ['25%', '60%'],
                                center: ['50%', '57%'],
                                roseType: 'area',
                                label: {
                                    show: true,
                                    formatter: '{c}',
                                },
                                data: data[dataIndex],
                            },
                            {
                                type: 'pie',
                                radius: '25%',
                                center: ['50%', '57%'],
                                label: {
                                    position: 'center',
                                    color: '#fff',
                                },
                                labelLine: { show: false },
                                itemStyle: { color: 'transparent' },
                                data: [
                                    {
                                        value: 1,
                                        name: '地点',
                                    },
                                ],
                            },
                        ],
                    });
                })
                .catch((err) => reject(err));
        });
    };
};

const saleMtop10Fetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_sale_2')
            .then((dataList) => {
                const data = dataList[0];
                resolve({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                        },
                    },
                    grid: {
                        left: '0%',
                        top: '20',
                        right: '2%',
                        bottom: '10',
                        containLabel: true,
                    },
                    barCategoryGap: '40%',
                    xAxis: {
                        type: 'value',
                        min: 0,
                        interval: 5,
                        boundaryGap: [0, 0.01],
                        axisLine: { lineStyle: { width: 0 } },
                    },
                    yAxis: {
                        type: 'category',
                        splitLine: { lineStyle: { width: 0 } },
                        data: data.商品名称,
                    },
                    series: [
                        {
                            name: '售出总数量',
                            type: 'bar',
                            label: {
                                position: 'right',
                                verticalAlign: 'middle',
                            },
                            data: data.销售数量,
                        },
                    ],
                });
            })
            .catch((err) => reject(err));
    });
};

const priceRangeFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_sale_3')
            .then((dataList) => {
                const data = dataList[0];
                const series: any = [];
                for (let i = 0; i < data.data.length; i++) {
                    series.push({
                        name: data.data[i].name,
                        type: 'scatter',
                        data: [data.data[i].value],
                        symbolSize: data.data[i].value[1] * 2,
                    });
                }
                resolve({
                    grid: {
                        left: '3%',
                        right: '10',
                        bottom: '10',
                        containLabel: true,
                    },
                    tooltip: {
                        showDelay: 0,
                        formatter: function (params: any) {
                            return (
                                params.seriesName +
                                '<br/>' +
                                '单价：' +
                                params.value[0] +
                                '<br/>' +
                                '销量：' +
                                params.value[1]
                            );
                        },
                        axisPointer: {
                            show: true,
                            type: 'cross',
                            lineStyle: {
                                type: 'dashed',
                                width: 1,
                            },
                        },
                    },

                    legend: {
                        type: 'scroll',
                    },
                    xAxis: { scale: true },
                    yAxis: { scale: true },
                    series,
                });
            })
            .catch((err) => reject(err));
    });
};

const saleAllFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_sale_4')
            .then((dataList) => {
                const data = dataList[0];
                resolve({
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        type: 'scroll',
                    },
                    grid: {
                        left: '10',
                        right: '20',
                        bottom: '10',
                        containLabel: true,
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [
                            '1日',
                            '2日',
                            '3日',
                            '4日',
                            '5日',
                            '6日',
                            '7日',
                            '8日',
                            '9日',
                            '10日',
                            '11日',
                            '12日',
                            '13日',
                            '14日',
                            '15日',
                            '16日',
                            '17日',
                            '18日',
                            '19日',
                            '20日',
                            '21日',
                            '22日',
                        ],
                    },
                    yAxis: {
                        type: 'value',
                        name: '金额（万元）',
                        axisLabel: {
                            formatter: '{value}',
                        },
                    },
                    series: [
                        {
                            name: '销售金额实际值',
                            type: 'line',
                            data: data.T,
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: 'rgba(194, 53, 49,.8)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'transparent',
                                        },
                                    ]
                                ),
                            },
                        },
                        {
                            type: 'line',
                            name: '销售金额预测值',
                            data: data.Y,
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: 'rgba(47, 69, 84,.4)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'transparent',
                                        },
                                    ]
                                ),
                            },
                        },
                    ],
                });
            })
            .catch((err) => reject(err));
    });
};

const Sale: FC = () => {
    return (
        <div className="chartWarp saleWarp">
            <div className="pure-g sale-row1">
                <div className="pure-u-1-4">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">销售金额（元）</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize={true}
                                fetcher={getSiteFetcher(
                                    'sale',
                                    '{b}：<br/>{c} 元<br/>（{d}%）'
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-4">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">订单量（个）</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize={true}
                                fetcher={getSiteFetcher(
                                    'order',
                                    '{b}：<br/>{c} 个<br/>（{d}%）'
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-4">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">毛利润（元）</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize={true}
                                fetcher={getSiteFetcher(
                                    'gross',
                                    '{b}：<br/>{c} 元<br/>（{d}%）'
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-4">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">客单价（元）</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize={true}
                                fetcher={getSiteFetcher(
                                    'unit',
                                    '{b}：<br/>{c} 元<br/>（{d}%）'
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pure-g sale-row2">
                <div className="pure-u-1-4">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">
                                    销售金额预测值与实际值
                                </h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize={true}
                                fetcher={saleAllFetcher}
                            />
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-2">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">商品价格区间</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize={true}
                                fetcher={priceRangeFetcher}
                            />
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-4">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">
                                    商品销售数量前10名
                                </h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize={true}
                                fetcher={saleMtop10Fetcher}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;
