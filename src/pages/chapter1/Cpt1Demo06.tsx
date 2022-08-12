import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt1Demo06: FC<{}> = () => {
    return (
        <div className="cpt-1-06 demo-container">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                option={{
                    backgroundColor: '#eee',
                    title: {
                        text: '某都市的人流统计',
                        textStyle: {
                            color: 'red',
                        },
                        left: 'center',
                    },
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        data: ['人流量'],
                        left: 'right',
                    },
                    xAxis: [
                        {
                            type: 'category',
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
                    ],
                    yAxis: [
                        {
                            type: 'value',
                        },
                    ],
                    series: [
                        {
                            name: '人流量',
                            type: 'line', //设置指定显示为折线
                            data: [80, 125, 160, 140, 200, 245, 155],
                            smooth: true,
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt1Demo06;
