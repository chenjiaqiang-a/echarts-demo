import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt1Demo05: FC<{}> = () => {
    return (
        <div className="cpt-1-05 demo-container">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                option={{
                    title: {
                        text: '深圳月最低生活费组成（单位:元）',
                        subtext: '数据来自ExcelHome',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                        },
                        formatter: (params: any) => {
                            const [tar1, tar2] = params;
                            return `${tar2.seriesName} - ${tar1.name}<br/>${tar2.value}`
                        },
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    xAxis: [
                        {
                            type: 'category',
                            splitLine: { show: false },
                            data: [
                                '总费用',
                                '房租',
                                '水电费',
                                '交通费',
                                '伙食费',
                                '日用品费用',
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
                            name: '辅助',
                            type: 'bar',
                            stack: '总量',
                            itemStyle: {
                                color: 'rgba(0,0,0,0)',
                                borderColor: 'rgba(0,0,0,0)',
                            },
                            data: [0, 1700, 1400, 1200, 300, 0],
                        },
                        {
                            name: '生活费',
                            type: 'bar', //设置柱状图
                            stack: '总量', //设置堆积
                            data: [2900, 1200, 300, 200, 900, 300],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt1Demo05;
