import { FC } from 'react';
import * as echarts from 'echarts';
import { request } from '../../utils/request';
import Chart from '../../components/Chart';

const getSaleFetcher = (
    dataIndex: string,
    unit: string,
    color1: string,
    color2: string
): (() => Promise<echarts.EChartsOption>) => {
    return () => {
        return new Promise((resolve, reject) => {
            request('http://localhost:3001/cpt5_total_1')
                .then((dataList) => {
                    const data = dataList[0];
                    const title = dataIndex;
                    const min = 0;
                    const max = data[dataIndex][0];
                    const val = data[dataIndex][1];
                    const tag = data[dataIndex][2];
                    resolve({
                        tooltip: {
                            confine: true,
                            trigger: 'item',
                            formatter: (data: any) => {
                                const hbl = (data.value / tag).toFixed(2);
                                return (
                                    title +
                                    '：' +
                                    data.value +
                                    '<br/>' +
                                    data.name +
                                    '：' +
                                    hbl
                                );
                            },
                        },
                        series: [
                            {
                                startAngle: 180,
                                endAngle: 0,
                                splitNumber: 1,
                                name: title,
                                type: 'gauge',
                                radius: '100%',
                                axisLine: {
                                    lineStyle: {
                                        color: [
                                            [(tag - min) / (max - min), color2],
                                            [(val - min) / (max - min), color1],
                                            [1, '#ddd'],
                                        ],
                                        width: 20,
                                    },
                                },
                                axisTick: { show: false },
                                axisLabel: {
                                    distance: 0,
                                    width: 30,
                                    height: 24,
                                    lineHeight: 24,
                                    padding: [25, -30, 0],
                                    color: 'rgba(255,255,255,0.5)',
                                    formatter: (value: any) => {
                                        if (unit === '千') {
                                            return (
                                                (value / 1000).toFixed(1) +
                                                ' ' +
                                                unit
                                            );
                                        } else if (unit === '万') {
                                            return (
                                                (value / 10000).toFixed(1) +
                                                ' ' +
                                                unit
                                            );
                                        } else {
                                            return value;
                                        }
                                    },
                                },
                                splitLine: { show: false },
                                pointer: { show: false, width: 3 },
                                title: {
                                    offsetCenter: [0, '92%'],
                                    color: 'rgba(255,255,255,0.7)',
                                },
                                detail: {
                                    offsetCenter: [0, '-10%'],
                                    formatter: (value) => {
                                        return '{a|' + value.toFixed(1) + '}';
                                    },
                                    rich: {
                                        a: {
                                            fontSize: '16',
                                            fontWeight: 'bold',
                                        },
                                    },
                                },
                                min,
                                max,
                                data: [{ value: val }],
                            },
                        ],
                    });
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
};

const saleRateFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_total_2')
            .then((dataList) => {
                const data = dataList[0];
                resolve({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                        },
                    },
                    grid: {
                        left: 10,
                        top: 50,
                        right: 10,
                        bottom: 10,
                        containLabel: true,
                    },
                    legend: {
                        data: ['销售金额', '销售金额环比增长率'],
                        top: 10,
                    },
                    barCategoryGap: '40%',
                    xAxis: [
                        {
                            type: 'category',
                            data: data.日期,
                            axisPointer: {
                                type: 'shadow',
                            },
                            axisLabel: {
                                formatter: (value: any) => {
                                    return echarts.format.formatTime(
                                        'dd',
                                        value
                                    );
                                },
                            },
                        },
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '销售金额（元）',
                            min: 0,
                            max: 15000,
                            interval: 5000,
                        },
                        {
                            type: 'value',
                            name: '环比增长率（%）',
                            min: -0.5,
                            max: 1,
                            interval: 0.5,
                        },
                    ],
                    series: [
                        {
                            name: '销售金额',
                            type: 'bar',
                            label: {
                                show: true,
                            },
                            data: data.销售金额,
                        },
                        {
                            name: '销售金额环比增长率',
                            type: 'line',
                            label: {
                                show: true,
                                color: '#fff',
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                verticalAlign: 'middle',
                                padding: 4,
                                borderRadius: 4,
                                position: 'top',
                            },
                            yAxisIndex: 1,
                            data: data.销售金额环比增长率,
                        },
                    ],
                });
            })
            .catch((err) => reject(err));
    });
};

const saleMtop5Fetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_total_3')
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
                        left: 10,
                        top: 20,
                        right: 10,
                        bottom: 10,
                        containLabel: true,
                    },
                    barCategoryGap: '40%',
                    xAxis: {
                        type: 'value',
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
                            data: data.销售金额,
                        },
                    ],
                });
            })
            .catch((err) => reject(err));
    });
};

const saleOrderFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_total_4')
            .then((dataList) => {
                const data = dataList[0];
                resolve({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999',
                            },
                        },
                    },
                    grid: {
                        left: 10,
                        top: 50,
                        right: 10,
                        bottom: 10,
                        containLabel: true,
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            dataView: { show: true, readOnly: false },
                            magicType: { show: true, type: ['line', 'bar'] },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    legend: {
                        top: 10,
                    },
                    barGap: '10%',
                    barCategoryGap: '35%',
                    xAxis: [
                        {
                            type: 'category',
                            data: data.地点,
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
                            axisLabel: {
                                formatter: '{value}',
                            },
                            axisLine: { lineStyle: { width: 0 } },
                        },
                    ],
                    series: [
                        {
                            name: '销售金额',
                            type: 'bar',
                            data: data.销售金额,
                        },
                        {
                            name: '订单量',
                            type: 'bar',
                            data: data.订单量,
                        },
                        {
                            name: '毛利润',
                            type: 'bar',
                            data: data.毛利润,
                        },
                    ],
                });
            })
            .catch((err) => reject(err));
    });
};

const payWayFetcher: () => Promise<echarts.EChartsOption> = () => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/cpt5_total_5')
            .then((dataList) => {
                const data = dataList[0];
                resolve({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)',
                    },
                    legend: {
                        data: data.支付方式,
                        orient: 'vertical',
                        left: 0,
                        top: '25%',
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '0%',
                        containLabel: true,
                    },
                    series: [
                        {
                            name: '支付方式占比',
                            type: 'pie',
                            radius: '62%',
                            center: ['65%', '50%'],
                            label: {
                                formatter: '{b}\n{a|{d}%}',
                                rich: {
                                    a: {
                                        padding: 6,
                                        align: 'left',
                                        color: '#999',
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

const Total: FC = () => {
    return (
        <div className="chartWarp toalWarp">
            <div className="pure-g toal-row1">
                <div className="pure-u-1-5">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">销售金额（元）</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={getSaleFetcher(
                                    '销售金额',
                                    '',
                                    '#1779d9',
                                    'rgba(23,121,217,0.6)'
                                )}
                            />
                        </div>
                    </div>
                    <div className="subBlock">
                        <div className="subCon">
                            <div className="subtxt">销售金额环比增长率</div>
                            <div className="subNum">-1.4%</div>
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-5">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">订单量（个）</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={getSaleFetcher(
                                    '订单量',
                                    '',
                                    '#30b761',
                                    'rgba(48,183,97,0.5)'
                                )}
                            />
                        </div>
                    </div>
                    <div className="subBlock">
                        <div className="subCon">
                            <div className="subtxt">订单量环比增长率</div>
                            <div className="subNum">11.1%</div>
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-5">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">毛利润（元）</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={getSaleFetcher(
                                    '毛利润',
                                    '',
                                    '#d04a4b',
                                    'rgba(208,74,75,0.5)'
                                )}
                            />
                        </div>
                    </div>
                    <div className="subBlock">
                        <div className="subCon">
                            <div className="subtxt">毛利润环比增长率</div>
                            <div className="subNum">3.6%</div>
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-5">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">售货机数量（台）</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={getSaleFetcher(
                                    '折扣额',
                                    '千',
                                    '#ca841e',
                                    'rgba(202,132,30,0.5)'
                                )}
                            />
                        </div>
                    </div>
                    <div className="subBlock">
                        <div className="subCon">
                            <div className="subtxt">售货机数量环比增长率</div>
                            <div className="subNum">2.99%</div>
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-5">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">购买用户数（人）</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={getSaleFetcher(
                                    '客单价',
                                    '',
                                    '#00a7c2',
                                    'rgba(0,167,194,0.5)'
                                )}
                            />
                        </div>
                    </div>
                    <div className="subBlock">
                        <div className="subCon">
                            <div className="subtxt">购买用户数环比增长率</div>
                            <div className="subNum">1.77%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pure-g toal-row2">
                <div className="pure-u-1-1">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">销售金额变化趋势</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={saleRateFetcher}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pure-g toal-row3">
                <div className="pure-u-1-3">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">
                                    商品销售金额前5名
                                </h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={saleMtop5Fetcher}
                            />
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-3">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">售货机销售情况</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={saleOrderFetcher}
                            />
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-3">
                    <div className="chartBlock">
                        <div className="hd">
                            <div className="chartTit">
                                <h2 className="titContent">用户支付方式占比</h2>
                            </div>
                        </div>
                        <div className="bd">
                            <Chart
                                className="chartDiv"
                                autoResize
                                fetcher={payWayFetcher}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;
