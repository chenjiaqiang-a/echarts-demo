import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt3Demo13: FC<{}> = () => {
    return (
        <div className="demo-container cpt-3-13">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={700}
                height={600}
                option={{
                    color: [
                        'red',
                        'green',
                        'blue',
                        '#660099',
                        '#FA8072',
                        'grey',
                    ],
                    backgroundColor: 'rgba(128, 128, 128, 0.1)',
                    title: {
                        text: '多雷达图',
                        top: 15,
                        textStyle: { color: 'green' },
                        left: 240,
                    },
                    tooltip: { trigger: 'axis' },
                    legend: {
                        top: 560,
                        left: 140,
                        data: ['某软件', '小米', '苹果', '降水量', '蒸发量'],
                    },
                    radar: [
                        //设置雷达图坐标系组件，只适用于雷达图
                        {
                            shape: 'polygon', //'polygon'|'circle'
                            axisName: {
                                fontSize: 12,
                                color: '#fff',
                                backgroundColor: 'green',
                                borderRadius: 3,
                                padding: [2, 2],
                            },
                            axisNameGap: 3,
                            indicator: [
                                //设置雷达图指示器，指定雷达图中的多个变量，跟data中value对应
                                { text: '品牌', max: 100 },
                                { text: '内容', max: 100 },
                                { text: '可用性', max: 100 },
                                { text: '功能', max: 100 },
                            ],
                            center: ['25%', '30%'],
                            radius: 80, //指定第1个雷达图的位置
                        },
                        {
                            shape: 'polygon', //'polygon'|'circle'
                            axisName: {
                                fontSize: 12,
                                color: '#fff',
                                backgroundColor: 'blue',
                                borderRadius: 3,
                                padding: [2, 2],
                            },
                            axisNameGap: 3,
                            //设置雷达图指示器，指定雷达图中的多个变量
                            indicator: [
                                { text: '外观', max: 100 },
                                { text: '拍照', max: 100 },
                                { text: '系统', max: 100 },
                                { text: '性能', max: 100 },
                                { text: '屏幕', max: 100 },
                            ],
                            center: ['60%', '30%'],
                            radius: 80, //指定第2个雷达图的位置
                        },
                        {
                            shape: 'polygon', //'polygon'和'circle'
                            axisName: {
                                fontSize: 12,
                                color: 'red',
                                backgroundColor: 'lightblue',
                                borderRadius: 3,
                                padding: [2, 2],
                            },
                            axisNameGap: 3,
                            indicator: (function () {
                                const res = [];
                                for (let i = 1; i <= 12; i++) {
                                    res.push({ text: i + '月', max: 100 });
                                }
                                return res;
                            })(),
                            center: ['41%', '67%'],
                            radius: 80, //指定第3个雷达图的位置
                        },
                    ],
                    series: [
                        {
                            //设置第1个数据项：某软件
                            type: 'radar',
                            tooltip: { trigger: 'item' },
                            areaStyle: { opacity: 0.5 },
                            //设置第1个数据项的具体数据
                            data: [{ value: [65, 72, 88, 80], name: '某软件' }],
                        },
                        {
                            //设置第2个数据项：小米与苹果
                            type: 'radar',
                            radarIndex: 1,
                            tooltip: { trigger: 'item' },
                            data: [
                                //设置第2个数据项的具体数据
                                { value: [85, 90, 90, 95, 95], name: '小米' },
                                { value: [95, 80, 95, 90, 93], name: '苹果' },
                            ],
                        },
                        {
                            //设置第3个数据项：降水量与蒸发量
                            type: 'radar',
                            radarIndex: 2,
                            tooltip: { trigger: 'item' },
                            areaStyle: { opacity: 0.5 },
                            data: [
                                //设置第3个数据项的具体数据
                                {
                                    name: '降水量',
                                    value: [
                                        5, 6, 9, 56, 69, 73, 77, 88, 50, 22, 7,
                                        5,
                                    ],
                                },
                                {
                                    name: '蒸发量',
                                    value: [
                                        3, 5, 8, 34, 45, 77, 68, 65, 36, 23, 7,
                                        4,
                                    ],
                                },
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt3Demo13;
