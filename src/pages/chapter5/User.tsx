import { FC } from 'react';
import * as echarts from 'echarts';
import { request } from '../../utils/request';
import Chart from '../../components/Chart';

const lossGrowthFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_user_1')
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
                        right: '30',
                        bottom: '10',
                        containLabel: true,
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: data.日期,
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [
                        {
                            name: '新增人数',
                            type: 'line',
                            data: data.新增人数,
                            symbol: 'circle',
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
                            name: '流失人数',
                            type: 'line',
                            symbol: 'circle',
                            data: data.流失人数,
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: 'rgba(47, 69, 84,.8)',
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

const cSorNumFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_user_2')
            .then((dataList) => {
                const data = dataList[0];
                resolve({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)',
                    },
                    legend: {
                        show: false,
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '0%',
                        containLabel: true,
                    },
                    series: [
                        {
                            name: '用户类型人数',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            center: ['50%', '50%'],
                            label: {
                                formatter: '{b}\n{a|{d}%}',
                                rich: {
                                    a: {
                                        padding: 6,
                                        align: 'left',
                                        color: '#fff',
                                    },
                                },
                            },
                            data: data.data,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                },
                            },
                        },
                    ],
                });
            })
            .catch((err) => reject(err));
    });
};

const userGroupFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_user_3')
            .then((dataList) => {
                const data = dataList[0];
                resolve({
                    tooltip: {},
                    legend: {},
                    radar: {
                        axisName: {
                            color: '#fff',
                            borderRadius: 3,
                            padding: [3, 5],
                        },
                        center: ['50%', '58%'],
                        splitArea: {
                            areaStyle: {
                                color: ['transparent'],
                            },
                        },
                        axisLine: { lineStyle: { color: '#061e42' } },
                        splitLine: { lineStyle: { color: '#061e42' } },
                        indicator: [
                            { name: '消费金额', max: 80, color: 'black' },
                            { name: '购买数量', max: 80, color: 'black' },
                            { name: '购买频率', max: 80, color: 'black' },
                            { name: '交易次数', max: 80, color: 'black' },
                            { name: '客单价', max: 80, color: 'black' },
                        ],
                    },
                    series: [
                        {
                            name: '用户分群',
                            type: 'radar',
                            areaStyle: {
                                opacity: 0.3,
                            },
                            data: data.data,
                        },
                    ],
                });
            })
            .catch((err) => reject(err));
    });
};

const expTimeFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_user_4')
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
                        left: '10',
                        top: '30',
                        right: '10',
                        bottom: '10',
                        containLabel: true,
                    },
                    barCategoryGap: '50%',
                    xAxis: {
                        type: 'value',
                        min: 0,
                        boundaryGap: [0, 0.01],
                        axisLine: { lineStyle: { width: 0 } },
                    },
                    yAxis: {
                        type: 'category',
                        splitLine: { lineStyle: { width: 0 } },
                        data: data.消费时段,
                    },
                    series: [
                        {
                            name: '售出总数量',
                            type: 'bar',
                            label: {
                                position: 'right',
                                verticalAlign: 'middle',
                            },
                            data: data.用户人数,
                        },
                    ],
                });
            })
            .catch((err) => reject(err));
    });
};

const expLocFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_user_5')
            .then((dataList) => {
                const data = dataList[0];
                resolve({
                    tooltip: {
                        trigger: 'axis',
                    },
                    grid: {
                        left: '10',
                        right: '10',
                        bottom: '0',
                        top: '30',
                        containLabel: true,
                    },
                    barCategoryGap: '60%',
                    xAxis: [
                        {
                            type: 'category',
                            data: data.消费地点,
                            axisPointer: {
                                type: 'shadow',
                            },
                            splitLine: { lineStyle: { width: 0 } },
                        },
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '',
                            min: 0,
                        },
                    ],
                    series: [
                        {
                            type: 'bar',
                            data: data.用户人数,
                        },
                    ],
                });
            })
            .catch((err) => reject(err));
    });
};

const pIntervalFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_user_6')
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
                        formatter: (params: any) => {
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

const chartFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_user_7')
            .then((dataList) => {
                const data = dataList[0];
                resolve({
                    tooltip: {
                        trigger: 'item',
                        formatter: (item: any) => {
                            return item.name + '：' + item.value.toFixed(2);
                        },
                    },
                    series: [
                        {
                            type: 'wordCloud',
                            sizeRange: [10, 30],
                            rotationRange: [0, 0],
                            rotationStep: 180,
                            gridSize: 0,
                            autoSize: { enable: true, minSize: 5 },
                            shape: 'roundRect',
                            left: 'center',
                            top: 'center',
                            width: '100%',
                            height: '100%',
                            textStyle: {
                                color: function () {
                                    return (
                                        'rgb(' +
                                        [
                                            Math.round(Math.random() * 160),
                                            Math.round(Math.random() * 160),
                                            Math.round(Math.random() * 160),
                                        ].join(',') +
                                        ')'
                                    );
                                },
                            },
                            emphasis: {
                                textStyle: {
                                    textShadowBlur: 26,
                                    color: '#333',
                                    textShadowColor: '#ccc',
                                    fontSize: 20,
                                },
                            },
                            data: data.data.sort((a: any, b: any) => {
                                return b.value - a.value;
                            }),
                        },
                    ],
                } as any);
            })
            .catch((err) => reject(err));
    });
};

const User: FC = () => {
    return (
        <div className="chartWarp userWarp">
            <div className="pure-g user-row1">
                <div className="pure-u-7-24 col2">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">
                                    近5天用户人数新增和流失趋势
                                </h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={lossGrowthFetcher}
                            />
                        </div>
                    </div>
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">用户类型人数</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={cSorNumFetcher}
                            />
                        </div>
                    </div>
                </div>
                <div className="pure-u-10-24">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">用户分群</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={userGroupFetcher}
                            />
                        </div>
                    </div>
                </div>
                <div className="pure-u-7-24 col2">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">商品价格区间</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={pIntervalFetcher}
                            />
                        </div>
                    </div>
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">用户消费地点</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={expLocFetcher}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pure-g user-row2">
                <div className="pure-u-12-24">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">用户消费时段</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={expTimeFetcher}
                            />
                        </div>
                    </div>
                </div>
                <div className="pure-u-12-24">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">用户画像</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={chartFetcher}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
