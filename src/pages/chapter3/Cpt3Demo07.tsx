import { EChartsOption } from 'echarts';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const getOptions = (): EChartsOption => ({
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    tooltip: {
        show: true,
        formatter: '{b}：{c}%',
        backgroundColor: 'rgba(255,0,0,0.8)',
        borderColor: '#333',
        borderWidth: 0,
        padding: 5,
    },
    title: {
        text: '项目实际完成率(%)',
        left: 'center',
        top: 25,
        show: true,
        textStyle: {
            fontFamily: '黑体',
            color: 'blue',
            fontSize: 20,
        },
    },
    series: [
        {
            name: '单仪表盘示例',
            type: 'gauge', //设置系列类型
            radius: '80%',
            center: ['50%', '55%'], //设置仪表盘位置(圆心坐标)
            startAngle: 225,
            endAngle: -45,
            clockwise: true,
            min: 0,
            max: 100,
            splitNumber: 10,
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0.2, 'rgba(255,0,0,1)'],
                        [0.8, 'rgba(0,255,255,1)'],
                        [1, 'rgba(0,255,0,1)'],
                    ],
                    opacity: 1,
                    width: 30,
                    shadowBlur: 20,
                    shadowColor: '#fff',
                },
            },
            splitLine: {
                show: true,
                length: 30,
                distance: -30,
                lineStyle: {
                    color: '#eee',
                    opacity: 1,
                    width: 2,
                    type: 'solid',
                    shadowBlur: 10,
                    shadowColor: '#fff',
                },
            },
            axisTick: {
                show: true,
                splitNumber: 5,
                distance: -30,
                length: 8,
                lineStyle: {
                    color: '#eee',
                    opacity: 1,
                    width: 1,
                    type: 'solid',
                    shadowBlur: 10,
                    shadowColor: '#fff',
                },
            },
            axisLabel: {
                show: true,
                distance: 55,
                color: 'blue',
                fontSize: 32,
                formatter: '{value}',
            },
            pointer: {
                show: true,
                length: '70%',
                width: 9,
            },
            itemStyle: {
                color: 'auto',
                opacity: 1,
                borderWidth: 0,
                borderType: 'solid',
                borderColor: '#000',
                shadowBlur: 10,
                shadowColor: '#fff',
            },
            detail: {
                show: true,
                offsetCenter: [0, '50%'],
                color: 'auto',
                fontSize: 30,
                formatter: '{value}%',
            },
            data: [
                {
                    name: '完成率(%)',
                    value: Number((Math.random() * 100).toFixed(2)),
                }
            ],
        },
    ],
});

const Cpt3Demo07: FC<{}> = () => {
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
        <div className="cpt-3-07">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart width={800} height={600} option={option} />
        </div>
    );
};

export default Cpt3Demo07;
