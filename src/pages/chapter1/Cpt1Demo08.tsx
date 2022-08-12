import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt1Demo08: FC<{}> = () => {
    return (
        <div className="cpt-1-08 demo-container">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                option={{
                    title: {
                        text: '风景名胜区门票价格',
                        textStyle: {
                            color: 'green',
                        },
                        left: 15,
                        top: 0,
                    },
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        data: ['景区A', '景区B', '景区C'],
                        left: 200,
                        top: 3,
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true,
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: [
                            '2013年',
                            '2014年',
                            '2015年',
                            '2016年',
                            '2017年',
                            '2018年',
                            '2019年',
                        ],
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [
                        {
                            name: '景区A',
                            type: 'line', //设置指定显示为折线
                            step: 'start', //设置指定折线的显示样式
                            data: [120, 140, 120, 160, 250, 280, 240],
                        },
                        {
                            name: '景区B',
                            type: 'line', //设置指定显示为折线
                            step: 'middle', //设置指定折线的显示样式
                            data: [220, 280, 300, 350, 320, 380, 350],
                        },
                        {
                            name: '景区C',
                            type: 'line', //设置指定显示为折线
                            step: 'end', //设置指定折线的显示样式
                            data: [400, 480, 540, 450, 580, 750, 650],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt1Demo08;
