import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt3Demo12: FC<{}> = () => {
    return (
        <div className="cpt-3-12">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={500}
                height={400}
                option={{
                    backgroundColor: 'rgba(204,204,204,0.7)', //配置背景色，默认无背景
                    title: {
                        text: '浏览器占比变化',
                        textStyle: { color: 'blue' },
                        top: 20,
                        left: 30,
                    },
                    tooltip: {
                        trigger: 'item',
                        backgroundColor: 'rgba(0,0,250,0.8)',
                    },
                    legend: {
                        type: 'scroll',
                        bottom: 15,
                        data: (function () {
                            const list = [];
                            for (let i = 1; i <= 28; i++) {
                                list.push(i + 2000 + '');
                            }
                            return list;
                        })(),
                    },
                    visualMap: {
                        top: '47%',
                        right: 20,
                        color: ['red', 'yellow'],
                        calculable: true,
                    },
                    radar: {
                        //配置雷达图坐标系组件，只适用于雷达图
                        axisNameGap: 2, //设置指示器名称和指示器轴的距离，默认为15
                        indicator: [
                            //设置雷达图指示器，指定雷达图中的多个变量，跟data中value对应
                            { text: 'IE8-', max: 400, color: 'green' },
                            { text: 'IE9+', max: 400, color: 'green' },
                            { text: 'Safari', max: 400, color: 'blue' },
                            { text: 'Firefox', max: 400, color: 'blue' },
                            { text: 'Chrome', max: 400, color: 'red' },
                        ],
                    },
                    series: (function () {
                        const series = [];
                        for (let i = 1; i <= 28; i++) {
                            series.push({
                                name: '浏览器(数据纯属虚构)',
                                type: 'radar' as any,
                                symbol: 'none',
                                lineStyle: { width: 1 },
                                emphasis: {
                                    areaStyle: { color: 'rgba(0,250,0,0.3)' },
                                },
                                data: [
                                    //设置雷达图的数据是多变量（维度）
                                    {
                                        value: [
                                            (40 - i) * 10,
                                            (38 - i) * 4 + 60,
                                            i * 5 + 10,
                                            i * 9,
                                            (i * i) / 2,
                                        ],
                                        name: i + 2000 + '',
                                    },
                                ],
                            });
                        }
                        return series;
                    })(),
                }}
            />
        </div>
    );
};

export default Cpt3Demo12;
