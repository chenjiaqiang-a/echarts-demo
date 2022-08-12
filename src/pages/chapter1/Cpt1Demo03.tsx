import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt1Demo03: FC<{}> = () => {
    return (
        <div className="cpt-1-03 demo-container">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                option={{
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                        },
                    },
                    legend: {
                        data: [
                            '直接访问',
                            '邮件营销',
                            '联盟广告',
                            '视频广告',
                            '搜索引擎',
                            '百度',
                            '谷歌',
                            '必应',
                            '其他',
                        ],
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        right: 'right',
                        top: 'middle', 
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            magicType: {
                                show: true,
                                type: ['line', 'bar', 'stack'],
                            },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
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
                            name: '直接访问',
                            type: 'bar',
                            data: [320, 332, 301, 334, 390, 330, 320],
                        },
                        {
                            name: '邮件营销',
                            type: 'bar',
                            stack: '广告', //设置堆积效果
                            data: [120, 132, 101, 134, 90, 230, 210],
                        },
                        {
                            name: '联盟广告',
                            type: 'bar',
                            stack: '广告', //设置堆积效果
                            data: [220, 182, 191, 234, 290, 330, 310],
                        },
                        {
                            name: '视频广告',
                            type: 'bar',
                            stack: '广告', //设置堆积效果
                            data: [150, 232, 201, 154, 190, 330, 410],
                        },
                        {
                            name: '搜索引擎',
                            type: 'bar',
                            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                            markLine: {
                                data: [[{ type: 'min' }, { type: 'max' }]],
                            },
                        },
                        {
                            name: '百度',
                            type: 'bar',
                            barWidth: 5,
                            stack: '搜索引擎', //设置堆积效果
                            data: [620, 732, 701, 734, 1090, 1130, 1120],
                        },
                        {
                            name: '谷歌',
                            type: 'bar',
                            stack: '搜索引擎', //设置堆积效果
                            data: [120, 132, 101, 134, 290, 230, 220],
                        },
                        {
                            name: '必应',
                            type: 'bar',
                            stack: '搜索引擎', //设置堆积效果
                            data: [60, 72, 71, 74, 190, 130, 110],
                        },
                        {
                            name: '其他',
                            type: 'bar',
                            stack: '搜索引擎', //设置堆积效果
                            data: [62, 82, 91, 84, 109, 110, 120],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt1Demo03;
