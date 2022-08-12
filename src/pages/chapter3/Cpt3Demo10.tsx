import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt3Demo10: FC<{}> = () => {
    return (
        <div className="demo-container cpt-3-10">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={600}
                option={{
                    color: [
                        'red',
                        'green',
                        'blue',
                        '#8CC7B5',
                        '#32CD32',
                        '#7CFC00',
                        '#19CAAD',
                        'grey',
                    ],
                    title: {
                        text: '多漏斗图和多金字塔',
                        left: 280,
                        top: 'top',
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}:{c}%',
                    },
                    toolbox: {
                        left: 750,
                        orient: 'vertical',
                        top: 'center',
                        feature: {
                            dataView: { readOnly: false },
                            restore: {},
                            saveAsImage: {},
                        },
                    },
                    legend: {
                        orient: 'vertical',
                        left: 22,
                        top: 12,
                        data: ['展现', '点击', '访问', '咨询', '订单'],
                    },
                    series: [
                        {
                            name: '漏斗图',
                            type: 'funnel',
                            width: '40%',
                            height: '45%',
                            left: '5%',
                            top: '50%',
                            data: [
                                { value: 60, name: '访问' },
                                { value: 30, name: '咨询' },
                                { value: 10, name: '订单' },
                                { value: 80, name: '点击' },
                                { value: 100, name: '展现' },
                            ],
                        },
                        {
                            name: '金字塔',
                            type: 'funnel',
                            width: '40%',
                            height: '45%',
                            left: '5%',
                            top: '5%',
                            sort: 'ascending',
                            data: [
                                { value: 45, name: '访问' },
                                { value: 15, name: '咨询' },
                                { value: 5, name: '订单' },
                                { value: 65, name: '点击' },
                                { value: 100, name: '展现' },
                            ],
                        },
                        {
                            name: '漏斗图',
                            type: 'funnel',
                            width: '40%',
                            height: '45%',
                            left: '55%',
                            top: '5%',
                            label: { position: 'left' },
                            data: [
                                { value: 60, name: '访问' },
                                { value: 30, name: '咨询' },
                                { value: 10, name: '订单' },
                                { value: 80, name: '点击' },
                                { value: 100, name: '展现' },
                            ],
                        },
                        {
                            name: '金字塔',
                            type: 'funnel',
                            width: '40%',
                            height: '45%',
                            left: '55%',
                            top: '50%',
                            sort: 'ascending',
                            label: { position: 'left' },
                            data: [
                                { value: 45, name: '访问' },
                                { value: 15, name: '咨询' },
                                { value: 5, name: '订单' },
                                { value: 65, name: '点击' },
                                { value: 100, name: '展现' },
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt3Demo10;
