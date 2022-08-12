import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt3Demo11: FC<{}> = () => {
    return (
        <div className="demo-container cpt-3-11">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={500}
                height={400}
                option={{
                    backgroundColor: 'rgba(204,204,204,0.7)', //配置背景色，默认无背景
                    title: {
                        text: '各教育阶段男女人数统计',
                        target: 'blank',
                        top: '10',
                        left: '160',
                        textStyle: { color: 'blue', fontSize: 18 },
                    },
                    legend: {
                        show: true,
                        icon: 'rect',
                        top: 14,
                        left: 430,
                        itemWidth: 10,
                        itemHeight: 10,
                        itemGap: 30,
                        orient: 'horizontal',
                        textStyle: { fontSize: 15, color: '#fff' },
                        data: [
                            {
                                name: '男',
                                icon: 'rect',
                                textStyle: {
                                    color: 'rgba(51,0,255,1)',
                                    fontWeight: 'bold',
                                },
                            },
                            {
                                name: '女',
                                icon: 'rect',
                                textStyle: {
                                    color: 'rgba(255,0,0,1)',
                                    fontWeight: 'bold',
                                },
                            },
                        ],
                    },
                    tooltip: {
                        confine: true,
                        enterable: true,
                    },
                    radar: [
                        {
                            //配置雷达图坐标系组件，只适用于雷达图
                            center: ['50%', '56%'], //设置中心坐标，数组的第1项是横坐标，第2项是纵坐标
                            radius: 160, //设置圆的半径，数组的第一项是内半径，第二项是外半径
                            startAngle: 90, //设置坐标系起始角度，也就是第一个指示器轴的角度
                            axisName: {
                                //设置（圆外的标签）雷达图每个指示器名称
                                formatter: '{value}',
                                fontSize: 15,
                                color: '#000',
                            },
                            axisNameGap: 2,
                            splitNumber: 2, //设置指示器轴的分割段数，default
                            //设置坐标轴轴线设置
                            axisLine: {
                                lineStyle: {
                                    color: '#fff',
                                    width: 1,
                                    type: 'solid',
                                },
                            },
                            //设置坐标轴在grid区域中的分隔线
                            splitLine: {
                                lineStyle: { color: '#fff', width: 1 },
                            },
                            splitArea: {
                                show: true,
                                areaStyle: {
                                    color: ['#abc', '#abc', '#abc', '#abc'],
                                },
                            }, //设置分隔区域的样式
                            indicator: [
                                //配置雷达图指示器，指定雷达图中的多个变量，跟data中value对应
                                { name: '高中', max: 9000000 },
                                { name: '专科', max: 5000000 },
                                { name: '本科', max: 3500000 },
                                { name: '硕士', max: 800000 },
                                { name: '博士', max: 20000 },
                            ],
                        },
                    ],
                    series: [
                        {
                            name: '雷达图', //系列名称，用于tooltip的显示，图例筛选
                            type: 'radar', //系列类型: 雷达图
                            //拐点样式，'circle'|'rect'|'roundRect'|'triangle'|'diamond'|'pin'|'arrow'|'none'
                            symbol: 'triangle',
                            lineStyle: { width: 1 },
                            itemStyle: { opacity: 0.2 },
                            emphasis: {
                                lineStyle: { width: 5 },
                                itemStyle: { opacity: 1 },
                            },
                            data: [
                                //设置雷达图的数据是多变量(维度)
                                {
                                    //设置第1个数据项
                                    name: '女', //数据项名称
                                    value: [
                                        4400000, 2700000, 1600000, 380000, 7000,
                                    ], //value是具体数据
                                    symbol: 'triangle',
                                    symbolSize: 5, //设置单个数据标记的大小
                                    //设置拐点标志样式
                                    itemStyle: {
                                        borderColor: 'blue',
                                        borderWidth: 3,
                                    },
                                    //设置单项线条样式
                                    lineStyle: {
                                        color: 'red',
                                        width: 1,
                                        opacity: 0.9,
                                    },
                                },
                                {
                                    //设置第2个数据项
                                    name: '男',
                                    value: [
                                        4600000, 2300000, 1900000, 420000,
                                        13000,
                                    ],
                                    symbol: 'circle',
                                    symbolSize: 5, //设置单个数据标记的大小
                                    itemStyle: {
                                        borderColor: 'rgba(51,0,255,1)',
                                        borderWidth: 3,
                                    },
                                    lineStyle: {
                                        color: 'blue',
                                        width: 1,
                                        opacity: 0.9,
                                    },
                                },
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt3Demo11;
