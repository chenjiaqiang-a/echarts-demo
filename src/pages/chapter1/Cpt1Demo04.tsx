import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt1Demo04: FC<{}> = () => {
    return (
        <div className="cpt-1-04 demo-container">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                option={{
                    title: {
                        text: '世界人口总量',
                        subtext: '数据来自网络',
                    },
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        data: ['2011年', '2012年'],
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            magicType: { show: true, type: ['line', 'bar'] },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    xAxis: [
                        {
                            type: 'value',
                            boundaryGap: [0, 0.01],
                        },
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            data: [
                                'A国',
                                'B国',
                                'C国',
                                'D国',
                                'E国',
                                '世界人口(万)',
                            ],
                        },
                    ],
                    series: [
                        {
                            name: '2011年',
                            type: 'bar',
                            data: [18203, 23489, 29034, 104970, 131744, 630230],
                        },
                        {
                            name: '2012年',
                            type: 'bar',
                            data: [19325, 23438, 31000, 121594, 134141, 681807],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt1Demo04;
