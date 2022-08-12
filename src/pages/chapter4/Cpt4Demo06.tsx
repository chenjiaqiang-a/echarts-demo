import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt4Demo06: FC<{}> = () => {
    return (
        <div className="demo-container cpt-4-06">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={600}
                option={{
                    color: ['LimeGreen', 'DarkGreen', 'red', 'blue', 'Purple'],
                    backgroundColor: 'rgba(128, 128, 128, 0.1)',
                    title: {
                        text: '某学院2020年专业招生情况汇总表',
                        left: 70,
                        top: 9,
                    },
                    tooltip: { show: true },
                    legend: { data: ['2019年招生'], left: 422, top: 8 },
                    xAxis: {
                        data: [
                            '大数据',
                            '云计算',
                            'ERP',
                            '人工智能',
                            '软件开发',
                            '移动开发',
                            '网络技术',
                        ],
                    },
                    yAxis: {},
                    series: [
                        {
                            name: '招生人数:',
                            type: 'bar',
                            barWidth: 55, //设置柱状图中每个柱子的宽度
                            data: [350, 200, 66, 210, 466, 200, 135],
                        },
                    ],
                }}
                bindEvents={[
                    {
                        on: 'click',
                        callback: (params) => {
                            alert('鼠标单击事件，您刚才单击了：' + params.name)
                            window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name))
                        },
                    }
                ]}
            />
        </div>
    );
};

export default Cpt4Demo06;
