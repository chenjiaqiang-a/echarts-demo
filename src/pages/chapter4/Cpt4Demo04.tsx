import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';
import * as echarts from 'echarts';

const Cpt4Demo04: FC<{}> = () => {
    const groupName = 'Pie&Bar';
    useEffect(() => {
        echarts.connect(groupName);
    }, []);
    return (
        <div className="demo-container cpt-4-04">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                option={{
                    color: [
                        'red',
                        'Lime',
                        'blue',
                        'DarkGreen',
                        'DarkOrchid',
                        'Navy',
                    ],
                    backgroundColor: 'rgba(128, 128, 128, 0.1)', //配置背景色，rgba设置透明度0.1
                    title: {
                        text: '某大学各专业历年招生情况分析',
                        left: 'center',
                        top: 12,
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a}<br/>{b}:{c}({d}%)',
                    },
                    legend: {
                        orient: 'vertical',
                        left: 15,
                        top: 15,
                        data: ['2016', '2017', '2018', '2019', '2020'],
                    },
                    series: [
                        {
                            //配置第1个图表的数据系列
                            name: '总人数:',
                            type: 'pie',
                            radius: '70%',
                            center: ['50%', 190],
                            data: [
                                { value: 1695, name: '2016' },
                                { value: 1790, name: '2017' },
                                { value: 2250, name: '2018' },
                                { value: 2550, name: '2019' },
                                { value: 2570, name: '2020' },
                            ],
                        },
                    ],
                }}
                group={groupName}
            />
            <Chart
                option={{
                    color: [
                        'red',
                        'Lime',
                        'blue',
                        'DarkGreen',
                        'DarkOrchid',
                        'Navy',
                    ],
                    backgroundColor: 'rgba(128, 128, 128, 0.1)', //配置背景色，rgba设置透明度0.1
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { type: 'shadow' },
                    },
                    legend: {
                        left: 42,
                        top: 25,
                        data: [
                            '大数据',
                            'Oracle',
                            '云计算',
                            '人工智能',
                            '软件工程',
                        ],
                    },
                    toolbox: {
                        //配置第2个图表的工具箱组件
                        show: true,
                        orient: 'vertical',
                        left: 550,
                        top: 'center',
                        feature: {
                            restore: { show: true },
                            saveAsImage: { show: true },
                            magicType: {
                                show: true,
                                type: ['line', 'bar', 'stack'],
                            },
                        },
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['2016', '2017', '2018', '2019', '2020'],
                        },
                    ], //配置第2个图表的x轴坐标系
                    yAxis: [{ type: 'value', splitArea: { show: true } }], //配置第2个图表的y轴坐标系
                    series: [
                        //配置第2个图表的数据系列
                        {
                            name: '大数据',
                            type: 'bar',
                            stack: '总量',
                            data: [301, 334, 390, 330, 320],
                            barWidth: 45,
                        },
                        {
                            name: 'Oracle',
                            type: 'bar',
                            stack: '总量',
                            data: [101, 134, 90, 230, 210],
                        },
                        {
                            name: '云计算',
                            type: 'bar',
                            stack: '总量',
                            data: [191, 234, 290, 330, 310],
                        },
                        {
                            name: '人工智能',
                            type: 'bar',
                            stack: '总量',
                            data: [201, 154, 190, 330, 410],
                        },
                        {
                            name: '软件工程',
                            type: 'bar',
                            stack: '总量',
                            data: [901, 934, 1290, 1330, 1320],
                        },
                    ],
                }}
                group={groupName}
            />
        </div>
    );
};

export default Cpt4Demo04;
