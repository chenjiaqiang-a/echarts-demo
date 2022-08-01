import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt2Demo02: FC<{}> = () => {
    return (
        <div className="cpt-2-02">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={900}
                height={600}
                option={{
                    color: [
                        'red',
                        'green',
                        'blue',
                        'yellow',
                        'grey',
                        '#FA8072',
                    ],
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        data: ['蒸发量', '降水量', '最低气温', '最高气温'],
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: { show: true },
                            magicType: { show: true, type: ['line', 'bar'] },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    xAxis: [
                        //配置x轴坐标系
                        {
                            //指定第一条x轴上的类目数据及格式
                            type: 'category',
                            position: 'bottom',
                            boundaryGap: true,
                            show: true,
                            axisLine: {
                                //设置第一条x轴上的轴线
                                lineStyle: {
                                    color: 'green',
                                    type: 'solid',
                                    width: 2,
                                },
                            },
                            axisTick: {
                                //设置第一条x轴上的轴刻度标记
                                show: true,
                                length: 10,
                                lineStyle: {
                                    color: 'red',
                                    type: 'solid',
                                    width: 2,
                                },
                            },
                            axisLabel: {
                                //设置第一条x轴上的轴文本标记
                                show: true,
                                interval: 'auto',
                                rotate: 45,
                                margin: 8,
                                formatter: '{value}月',
                                color: 'blue',
                                fontFamily: 'sans-serif',
                                fontSize: 15,
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                            },
                            splitLine: {
                                //设置第一条x轴上的轴分隔线
                                show: true,
                                lineStyle: {
                                    color: '#483d8b',
                                    type: 'dashed',
                                    width: 1,
                                },
                            },
                            splitArea: {
                                //设置第一条x轴上的轴分隔区域
                                show: true,
                                areaStyle: {
                                    color: [
                                        'rgba(144,238,144,0.3)',
                                        'rgba(135,200,250,0.3)',
                                    ],
                                },
                            },
                            data: [
                                '1',
                                '2',
                                '3',
                                '4',
                                '5',
                                {
                                    //设置第一条x轴上的轴标签个性化
                                    value: '6',
                                    textStyle: {
                                        color: 'red',
                                        fontSize: 30,
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                    },
                                },
                                '7',
                                '8',
                                '9',
                                '10',
                                '11',
                                '12',
                            ],
                        },
                        {
                            //设置指定第二条x轴上的类目数据
                            type: 'category',
                            data: [
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                'Jul',
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec',
                            ],
                        },
                    ],
                    yAxis: [
                        //配置y轴组件
                        {
                            //指定第一条y轴上的数值型数据及格式
                            type: 'value',
                            position: 'left',
                            boundaryGap: [0, 0.1],
                            axisLine: {
                                //设置第一条y轴上的轴线
                                show: true,
                                lineStyle: {
                                    color: 'red',
                                    type: 'dashed',
                                    width: 2,
                                },
                            },
                            axisTick: {
                                //设置第一条y轴上的轴标记
                                show: true,
                                length: 10,
                                lineStyle: {
                                    color: 'green',
                                    type: 'solid',
                                    width: 2,
                                },
                            },
                            axisLabel: {
                                //设置第一条y轴上的标签
                                show: true,
                                rotate: -45,
                                margin: 18,
                                formatter: '{value} ml',
                                color: '#1e90ff',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                            },
                            splitLine: {
                                //设置第一条y轴上的分隔线
                                show: true,
                                lineStyle: {
                                    color: '#483d8b',
                                    type: 'dotted',
                                    width: 2,
                                },
                            },
                            splitArea: {
                                //设置第一条y轴上的分隔区域
                                show: true,
                                areaStyle: {
                                    color: [
                                        'rgba(205,92,92,0.3)',
                                        'rgba(255,215,0,0.3)',
                                    ],
                                },
                            },
                        },
                        {
                            //指定第二条y轴上的数值型数据及格式
                            type: 'value',
                            splitNumber: 10,
                            axisLabel: {
                                //设置第二条y轴上的数轴标签
                                formatter: (value: any) => {
                                    return value + ' °C';
                                },
                            },
                            splitLine: {
                                //设置第二条y轴上的分隔线
                                show: false,
                            },
                        },
                    ],
                    series: [
                        //配置数据系列
                        {
                            //第一组数据：'蒸发量'
                            name: '蒸发量',
                            type: 'bar',
                            data: [
                                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2,
                                32.6, 20.0, 6.4, 3.3,
                            ],
                        },
                        {
                            //第二组数据：'降水量'
                            name: '降水量',
                            type: 'bar',
                            data: [
                                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2,
                                48.7, 18.8, 6.0, 2.3,
                            ],
                        },
                        {
                            //第三组数据：'最低气温'
                            name: '最低气温',
                            type: 'line',
                            smooth: true, //设置曲线为平滑
                            yAxisIndex: 1, //指定这一组数据使用第二条y轴（右边的）
                            data: [
                                2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0,
                                16.5, 12.0, 6.2,
                            ],
                        },
                        {
                            //第四组数据：'最高气温'
                            name: '最高气温',
                            smooth: true, //设置曲线为平滑
                            type: 'line',
                            yAxisIndex: 1, //指定这一组数据使用在第二条y轴（右边的）
                            data: [
                                12.0, 12.2, 13.3, 14.5, 16.3, 18.2, 28.3, 33.4,
                                31.0, 24.5, 18.0, 16.2,
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt2Demo02;
