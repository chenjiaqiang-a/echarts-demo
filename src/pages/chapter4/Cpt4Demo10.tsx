import { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';
import * as echarts from 'echarts';

const Cpt4Demo10: FC<{}> = () => {
    const [actions, setActions] = useState<echarts.Payload[]>([]);
    const isSetRef = useRef<boolean>(true);
    const timerRef = useRef<NodeJS.Timer | null>(null);
    const currentIndexRef = useRef<number>(-1);

    return (
        <div className="cpt-4-10">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={600}
                option={{
                    color: [
                        'DarkGreen',
                        'red',
                        'LimeGreen',
                        'blue',
                        'Purple',
                        'GreenYellow',
                    ],
                    backgroundColor: 'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1
                    title: {
                        text: '影响健康、寿命的各类因素',
                        subtext: 'WHO统计调查报告',
                        left: 144,
                        top: 5,
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: (data: any) => {
                            //console.log(data)
                            return (
                                data.seriesName +
                                '<br/>' +
                                data.name +
                                ':' +
                                data.value +
                                '(' +
                                data.percent.toFixed(1) +
                                '%)'
                            );
                        },
                    },
                    legend: {
                        //配置图例组件
                        orient: 'vertical', //设置垂直排列
                        left: 22, //设置图例左边距
                        top: 22, //设置图例顶边距
                        data: [
                            '生活方式',
                            '遗传因素',
                            '社会因素',
                            '医疗条件',
                            '气候环境',
                        ],
                    },
                    toolbox: {
                        //配置工具箱组件
                        show: true, //设置是否显示工具箱
                        left: 444, //设置工具箱左边距
                        top: 28, //设置工具箱顶边距
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    calculable: true,
                    series: [
                        {
                            cursor: 'crosshair',
                            name: '访问来源',
                            type: 'pie',
                            itemStyle: {
                                borderColor: '#fff',
                                borderWidth: 1,
                            },
                            label: { show: true, position: 'outer' },
                            labelLine: {
                                show: true,
                                length: 4,
                                lineStyle: { width: 1, type: 'solid' },
                            },
                            legendHoverLink: false,
                            radius: ['45%', '75%'], //设置半径，前者表示内半径，后者表示外半径
                            center: ['58%', '55%'], //设置圆心
                            data: [
                                { value: 60, name: '生活方式' },
                                { value: 15, name: '遗传因素' },
                                { value: 10, name: '社会因素' },
                                { value: 8, name: '医疗条件' },
                                { value: 7, name: '气候环境' },
                            ],
                        },
                    ],
                }}
                dispatchActions={actions}
                bindEvents={[
                    {
                        on: 'mouseover',
                        callback: (params) => {
                            isSetRef.current = false;
                            if (timerRef.current !== null) {
                                clearInterval(timerRef.current);
                            }
                            setActions([
                                {
                                    type: 'downplay', //取消之前高亮的图形
                                    seriesIndex: 0,
                                    dataIndex: params.dataIndex,
                                },
                                {
                                    type: 'highlight', //高亮当前图形
                                    seriesIndex: 0,
                                    dataIndex: params.dataIndex,
                                },
                                {
                                    type: 'showTip', //显示tooltip
                                    seriesIndex: 0,
                                    dataIndex: params.dataIndex,
                                },
                            ]);
                        },
                    },
                    {
                        on: 'mouseout',
                        callback: (params) => {
                            if (!isSetRef.current) {
                                timerRef.current = setInterval(() => {
                                    const dataLen = 5;
                                    const newAction = [
                                        {
                                            type: 'downplay', //取消之前高亮的图形
                                            seriesIndex: 0,
                                            dataIndex: currentIndexRef.current,
                                        },
                                    ];

                                    currentIndexRef.current =
                                        (currentIndexRef.current + 1) % dataLen;
                                    setActions([
                                        ...newAction,
                                        {
                                            type: 'highlight', //高亮当前图形
                                            seriesIndex: 0,
                                            dataIndex: currentIndexRef.current,
                                        },
                                        {
                                            type: 'showTip', //显示tooltip
                                            seriesIndex: 0,
                                            dataIndex: currentIndexRef.current,
                                        },
                                    ]);
                                }, 3000);
                                isSetRef.current = true;
                            }
                        },
                    },
                ]}
            />
        </div>
    );
};

export default Cpt4Demo10;
