import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const builderJson = {
    all: 10887,
    charts: {
        //各ECharts图表的json数据
        地理坐标图: 3237,
        路径图: 2164,
        柱状图: 7561,
        折线图: 7778,
        饼图: 7355,
        散点图: 2405,
        K线图: 1842,
        雷达图: 2090,
        热力图: 1762,
        矩形树图: 1593,
        关系图: 2060,
        盒须图: 1537,
        平行坐标系: 1908,
        仪表盘图: 2107,
        漏斗图: 1692,
        桑基图: 1568,
    },
    components: {
        //各ECharts组件的json数据
        地理坐标系组件: 2788,
        标题组件: 9575,
        图例组件: 9400,
        提示组件: 9466,
        直角坐标系组件: 9266,
        图表标注组件: 3419,
        图表标线组件: 2984,
        时间线组件: 2739,
        区域缩放组件: 2744,
        视觉映射组件: 2466,
        工具框组件: 3034,
        极坐标系组件: 1945,
    },
    ie: 9743,
};
const downloadJson = {
    //各ECharts版本下载的json数据
    完整版: 17365,
    精简版: 4079,
    常用版: 6929,
    源代码版: 14890,
};
const themeJson = {
    //各ECharts下载的主题json数据
    黑色主题: 1594,
    信息主题: 925,
    明亮主题: 1608,
    罗马主题: 721,
    马卡龙主题: 2179,
    复古主题: 1982,
};
const waterMarkText = 'ECharts'; //设置水印的字符
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = canvas.height = 100;
ctx!.textAlign = 'center';
ctx!.textBaseline = 'middle';
ctx!.globalAlpha = 0.08;
ctx!.font = '20px Microsoft Yahei'; //设置水印文字的字体
ctx!.translate(50, 50); //设置水印文字的偏转值
ctx!.rotate(-Math.PI / 4); //设置水印旋转的角度
ctx!.fillText(waterMarkText, 0, 0); //设置填充水印

const Cpt4Demo02: FC<{}> = () => {
    return (
        <div className="cpt-4-02">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={750}
                option={{
                    backgroundColor: {
                        type: 'pattern',
                        image: canvas,
                        repeat: 'repeat',
                    },
                    tooltip: {},
                    title: [
                        {
                            //配置标题组件
                            text: '在线构建次数',
                            subtext:
                                '总计 ' +
                                Object.keys(builderJson.charts).reduce(
                                    (all, key) => {
                                        return (
                                            all +
                                            (
                                                builderJson.charts as {
                                                    [key: string]: number;
                                                }
                                            )[key]
                                        );
                                    },
                                    0
                                ),
                            left: '25%',
                            textAlign: 'center',
                        },
                        {
                            //配置标题组件
                            text: '各图表组件的使用次数',
                            subtext:
                                '总计 ' +
                                Object.keys(builderJson.components).reduce(
                                    (all, key) => {
                                        return (
                                            all +
                                            (
                                                builderJson.components as {
                                                    [key: string]: number;
                                                }
                                            )[key]
                                        );
                                    },
                                    0
                                ),
                            left: '25%',
                            top: '53%',
                            textAlign: 'center',
                        },
                        {
                            text: '各版本下载',
                            subtext:
                                '总计 ' +
                                Object.keys(downloadJson).reduce(function (
                                    all,
                                    key
                                ) {
                                    return (
                                        all +
                                        (
                                            downloadJson as {
                                                [key: string]: number;
                                            }
                                        )[key]
                                    );
                                },
                                0),
                            left: '75%',
                            textAlign: 'center',
                        },
                        {
                            text: '主题下载',
                            subtext:
                                '总计 ' +
                                Object.keys(themeJson).reduce(function (
                                    all,
                                    key
                                ) {
                                    return (
                                        all +
                                        (
                                            themeJson as {
                                                [key: string]: number;
                                            }
                                        )[key]
                                    );
                                },
                                0),
                            left: '75%',
                            top: '50%',
                            textAlign: 'center',
                        },
                    ],
                    grid: [
                        {
                            //配置网格组件
                            top: 50,
                            width: '50%',
                            bottom: '50%',
                            left: 10,
                            containLabel: true,
                        },
                        {
                            width: '50%',
                            bottom: 0,
                            top: '60%',
                            left: 10,
                            containLabel: true,
                        },
                    ],
                    xAxis: [
                        {
                            //配置x轴坐标系
                            type: 'value',
                            max: builderJson.all,
                            splitLine: { show: false },
                        },
                        {
                            type: 'value',
                            max: builderJson.all,
                            gridIndex: 1,
                            splitLine: { show: false },
                        },
                    ],
                    yAxis: [
                        {
                            //配置y轴坐标系
                            type: 'category',
                            data: Object.keys(builderJson.charts),
                            axisLabel: { interval: 0, rotate: 20 },
                            splitLine: { show: false },
                        },
                        {
                            gridIndex: 1,
                            type: 'category',
                            data: Object.keys(builderJson.components),
                            axisLabel: { interval: 0, rotate: 20 },
                            splitLine: { show: false },
                        },
                    ],
                    series: [
                        {
                            //配置数据系列
                            type: 'bar',
                            stack: 'chart',
                            z: 3,
                            label: {
                                position: 'right',
                                show: true,
                            },
                            data: Object.keys(builderJson.charts).map((key) => {
                                return (
                                    builderJson.charts as {
                                        [key: string]: number;
                                    }
                                )[key];
                            }),
                        },
                        {
                            type: 'bar',
                            stack: 'chart',
                            silent: true,
                            itemStyle: { color: '#eee' },
                            data: Object.keys(builderJson.charts).map((key) => {
                                return (
                                    builderJson.all -
                                    (
                                        builderJson.charts as {
                                            [key: string]: number;
                                        }
                                    )[key]
                                );
                            }),
                        },
                        {
                            type: 'bar',
                            stack: 'component',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            z: 3,
                            label: {
                                position: 'right',
                                show: true,
                            },
                            data: Object.keys(builderJson.components).map(
                                function (key) {
                                    return (
                                        builderJson.components as {
                                            [key: string]: number;
                                        }
                                    )[key];
                                }
                            ),
                        },
                        {
                            type: 'bar',
                            stack: 'component',
                            silent: true,
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            itemStyle: { color: '#eee' },
                            data: Object.keys(builderJson.components).map(
                                function (key) {
                                    return (
                                        builderJson.all -
                                        (
                                            builderJson.components as {
                                                [key: string]: number;
                                            }
                                        )[key]
                                    );
                                }
                            ),
                        },
                        {
                            type: 'pie',
                            radius: [0, '30%'],
                            center: ['75%', '25%'],
                            data: Object.keys(downloadJson).map(function (key) {
                                return {
                                    name: key.replace('.js', ''),
                                    value: (
                                        downloadJson as {
                                            [key: string]: number;
                                        }
                                    )[key],
                                };
                            }),
                        },
                        {
                            type: 'pie',
                            radius: [0, '30%'],
                            center: ['75%', '75%'],
                            data: Object.keys(themeJson).map(function (key) {
                                return {
                                    name: key.replace('.js', ''),
                                    value: (
                                        themeJson as {
                                            [key: string]: number;
                                        }
                                    )[key],
                                };
                            }),
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt4Demo02;
