import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt4Demo08: FC<{}> = () => {
    return (
        <div className="demo-container cpt-4-08">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={600}
                option={{
                    color: ['LimeGreen', 'DarkGreen', 'red', 'blue', 'Purple'],
                    backgroundColor: 'rgba(128, 128, 128, 0.1)',
                    title: { text: '产品销量产量利润统计', left: 70, top: 9 },
                    xAxis: {
                        data: [
                            '衬衫',
                            '羊毛衫',
                            '雪纺衫',
                            '裤子',
                            '高跟鞋',
                            '袜子',
                        ],
                    },
                    yAxis: {},
                    tooltip: {
                        trigger: 'item',
                        show: true,
                        formatter: '{a} <br/>{b} : {c}',
                    },
                    legend: {},
                    series: [
                        {
                            name: '销量',
                            type: 'bar',
                            data: [5, 28, 16, 20, 15, 33],
                        },
                        {
                            name: '产量',
                            type: 'bar',
                            data: [15, 38, 20, 24, 20, 45],
                        },
                        {
                            name: '利润',
                            type: 'bar',
                            data: [25, 15, 10, 10, 15, 22],
                        },
                    ],
                }}
                bindEvents={[
                    {
                        on: 'click',
                        callback: (params) => {
                            alert(
                                '第' +
                                    (params.dataIndex + 1) +
                                    '件产品:' +
                                    params.name +
                                    '的' +
                                    params.seriesName +
                                    '为:' +
                                    params.value +
                                    '\n\n 1--componentType:' +
                                    params.componentType +
                                    '\n 2--seriesType:' +
                                    params.seriesType +
                                    '\n 3--seriesIndex:' +
                                    params.seriesIndex +
                                    '\n 4--seriesName:' +
                                    params.seriesName +
                                    '\n 5--name:' +
                                    params.name +
                                    '\n 6--dataIndex:' +
                                    params.dataIndex +
                                    '\n 7--data:' +
                                    params.datax +
                                    '\n 8--dataType:' +
                                    params.dataType +
                                    '\n 9--value:' +
                                    params.value +
                                    '\n 10--color:' +
                                    params.color
                            );
                        },
                    },
                    {
                        on: 'legendselectchanged',
                        callback: (params) => {
                            //获取点击图例的选中状态
                            const isSelected = params.selected[params.name];
                            //在控制台中打印
                            console.log(
                                (isSelected ? '你选中了' : '你取消选中了') +
                                    '图例:' +
                                    params.name
                            );
                            //打印所有图例的状态
                            console.log(params.selected);
                        },
                    },
                ]}
            />
        </div>
    );
};

export default Cpt4Demo08;
