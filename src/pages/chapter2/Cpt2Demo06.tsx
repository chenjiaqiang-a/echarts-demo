import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt2Demo06: FC<{}> = () => {
    return (
        <div className="cpt-2-06">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={600}
                height={600}
                option={{
                    color: ['red', 'green', 'blue', 'grey'], //使用自己预定义的颜色
                    legend: {
                        type: 'scroll',
                        orient: 'horizontal', //'vertical'
                        left: 'right', //'center'|'left'|{number},
                        top: 'top', //'center'|'bottom'|{number}
                        backgroundColor: '#eee',
                        borderColor: 'rgba(178,34,34,0.8)',
                        borderWidth: 4,
                        padding: 10,
                        itemGap: 80,
                        textStyle: { color: 'red' },
                    },
                    xAxis: {
                        data: [
                            '周一',
                            '周二',
                            '周三',
                            '周四',
                            '周五',
                            '周六',
                            '周日',
                        ],
                    },
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: { formatter: '{value} ml' },
                        },
                        {
                            type: 'value',
                            axisLabel: { formatter: '{value} °C' },
                            splitLine: { show: false },
                        },
                    ],
                    series: [
                        {
                            name: '某一年的蒸发量',
                            type: 'bar',
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6],
                        },
                        {
                            name: '某一年的降水量',
                            smooth: true,
                            type: 'line',
                            yAxisIndex: 1,
                            data: [11, 11, 15, 13, 12, 13, 10],
                        },
                        {
                            name: '某一年的最高气温',
                            type: 'bar',
                            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6],
                        },
                        {
                            name: '某一年的最低气温',
                            smooth: true,
                            type: 'line',
                            yAxisIndex: 1,
                            data: [-2, 1, 2, 5, 3, 2, 0],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt2Demo06;
