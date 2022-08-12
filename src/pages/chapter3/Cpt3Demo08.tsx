import { EChartsOption } from 'echarts';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const getOptions = (): EChartsOption => ({
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    title: {
        text: '多仪表盘实例 (共四个仪表盘)',
        left: 'center',
        top: 100,
        show: true,
        textStyle: {
            fontFamily: '黑体',
            color: 'blue',
            fontSize: 20,
        },
    },
    tooltip: { formatter: '{a} <br/>{c} {b}' },
    series: [
        //配置数据系列，共有4个仪表盘
        {
            //设置数据系列之1：速度
            name: '速度',
            type: 'gauge',
            z: 3,
            min: 0, //设置速度仪表盘的最小值
            max: 220, //设置速度仪表盘的最大值
            splitNumber: 22, //设置速度仪表盘的分隔数目为22
            radius: '50%', //设置速度仪表盘的大小
            axisLine: {
                lineStyle: {
                    width: 10,
                    color: [
                        [0.2, '#91c7ae'],
                        [0.8, '#63869e'],
                        [1, '#c23531'],
                    ],
                },
            },
            axisTick: {
                length: 5,
                splitNumber: 5,
                distance: 0,
                lineStyle: {
                    color: 'auto',
                    width: 1,
                },
            },
            splitLine: {
                length: 10,
                distance: 0,
                lineStyle: { color: 'auto', width: 2 },
            },
            title: {
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic',
            },
            detail: { fontWeight: 'bolder' },
            data: [
                {
                    value: Number((Math.random() * 100).toFixed(2)),
                    name: '车速(km/h)',
                },
            ],
        },
        {
            //设置数据系列之2：转速
            name: '转速',
            type: 'gauge',
            center: ['20%', '55%'], //设置转速仪表盘中心点的位置，默认全局居中
            radius: '35%', //设置转速油表仪表盘的大小
            min: 0, //设置转速仪表盘的最小值
            max: 7, //设置转速仪表盘的最大值
            endAngle: 45,
            splitNumber: 7, //设置转速仪表盘的分隔数目为7
            axisLine: {
                lineStyle: {
                    width: 8,
                    color: [
                        [0.2, '#91c7ae'],
                        [0.8, '#63869e'],
                        [1, '#c23531'],
                    ],
                },
            },
            axisTick: {
                length: 5,
                distance: 0,
                splitNumber: 5,
                lineStyle: {
                    color: 'auto',
                    width: 1,
                },
            },
            splitLine: {
                length: 10,
                distance: 0,
                lineStyle: {
                    color: 'auto',
                    width: 2,
                },
            },
            pointer: { width: 5 },
            title: { offsetCenter: [0, '-30%'] },
            detail: { fontWeight: 'bolder' },
            data: [
                {
                    value: Number((Math.random() * 7).toFixed(2)),
                    name: '转速(x1000 r/min)',
                },
            ],
        },
        {
            //设置数据系列之3：油表
            name: '油表',
            type: 'gauge',
            center: ['77%', '50%'], //设置油表仪表盘中心点的位置，默认全局居中
            radius: '25%', //设置油表仪表盘的大小
            min: 0, //设置油表仪表盘的最小值
            max: 2, //设置油表仪表盘的最小值
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2, //设置油表的分隔数目为2
            axisLine: {
                lineStyle: {
                    width: 8,
                    color: [
                        [0.2, '#91c7ae'],
                        [0.8, '#63869e'],
                        [1, '#c23531'],
                    ],
                },
            },
            axisTick: {
                splitNumber: 5,
                distance: 0,
                length: 2,
                lineStyle: {
                    color: 'auto',
                    width: 1,
                },
            },
            axisLabel: {
                formatter: (v) => {
                    switch (v + '') {
                        case '0':
                            return 'E';
                        case '1':
                            return '油表';
                        case '2':
                            return 'F';
                        default:
                            return 'E';
                    }
                },
            },
            splitLine: {
                length: 7,
                distance: 0,
                lineStyle: {
                    color: 'auto',
                    width: 2,
                },
            },
            pointer: { width: 4 },
            title: { show: false },
            detail: { show: false },
            data: [
                { value: Number((Math.random() * 2).toFixed(2)), name: 'gas' },
            ],
        },
        {
            //设置数据系列之4：水表
            name: '水表',
            type: 'gauge',
            center: ['77%', '50%'], //设置水表仪表盘中心点的位置，默认全局居中
            radius: '25%', //设置水表仪表盘的大小
            min: 0, //设置水表的最小值
            max: 2, //设置水表的最大值
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {
                lineStyle: {
                    width: 8,
                    color: [
                        [0.2, '#91c7ae'],
                        [0.8, '#63869e'],
                        [1, '#c23531'],
                    ],
                },
            },
            axisTick: { show: false },
            axisLabel: {
                formatter: (v) => {
                    switch (v + '') {
                        case '0':
                            return 'H';
                        case '1':
                            return '水表';
                        case '2':
                            return 'C';
                        default:
                            return 'H';
                    }
                },
            },
            splitLine: {
                length: 7,
                distance: 0,
                lineStyle: {
                    color: 'auto',
                    width: 2,
                },
            },
            pointer: { width: 2 },
            title: { show: false },
            detail: { show: false },
            data: [
                { value: Number((Math.random() * 2).toFixed(2)), name: 'gas' },
            ],
        },
    ],
});

const Cpt3Demo08: FC<{}> = () => {
    const [option, setOption] = useState<EChartsOption>(getOptions());

    useEffect(() => {
        const timer = setInterval(() => {
            setOption(getOptions());
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="demo-container cpt-3-08">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart width={800} height={600} option={option} />
        </div>
    );
};

export default Cpt3Demo08;
