import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt2Demo08: FC<{}> = () => {
    const formatter: any = (params: any, ticket: any, callback: any): any => {
        let res = '详情提示框 : <br/>' + params[0].name;
        for (let i = 0, l = params.length; i < l; i++) {
            res += '<br/>' + params[i].seriesName + ' : ' + params[i].value;
        }
        setTimeout(() => {
            callback(ticket, res);
        }, 500);
        return 'loading';
    };
    return (
        <div className="demo-container cpt-2-08">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={900}
                height={600}
                option={{
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            lineStyle: {
                                color: '#48b',
                                width: 2,
                                type: 'solid',
                            },
                            crossStyle: {
                                color: '#1e90ff',
                                width: 1,
                                type: 'dashed',
                            },
                            shadowStyle: {
                                color: 'rgba(150,150,150,0.2)',
                            },
                        },
                        showDelay: 0,
                        hideDelay: 0,
                        transitionDuration: 0,
                        backgroundColor: 'rgba(0,222,0,0.5)',
                        borderColor: '#f50',
                        borderRadius: 8,
                        borderWidth: 2,
                        padding: 10,
                        position: (p) => {
                            return [p[0] + 10, p[1] - 10];
                        },
                        textStyle: {
                            color: 'blue',
                            decoration: 'none',
                            fontFamily: 'sans-serif',
                            fontSize: 15,
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                        },
                        formatter,
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: { show: true, readOnly: false },
                            magicType: {
                                show: true,
                                type: ['line', 'bar', 'stack'],
                            },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
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
                    yAxis: {
                        type: 'value',
                    },
                    series: [
                        {
                            //设置数据系列1
                            name: '坐标轴触发1',
                            type: 'bar',
                            data: [320, 332, 301, 334, 390, 330, 320],
                        },
                        {
                            //设置数据系列2
                            name: '坐标轴触发2',
                            type: 'bar',
                            data: [862, 1018, 964, 1026, 1679, 1600, 157],
                        },
                        {
                            //设置数据系列3
                            name: '数据项触发1',
                            type: 'bar',
                            tooltip: {
                                trigger: 'item',
                                backgroundColor: 'black',
                                position: [0, 0],
                                formatter:
                                    'Series formatter: <br/>{a}<br/>{b}:{c}',
                            },
                            stack: '数据项',
                            data: [
                                120,
                                132,
                                {
                                    value: 301,
                                    itemStyle: { color: 'red' },
                                },
                                134,
                                90,
                                230,
                                210,
                            ],
                        },
                        {
                            name: '数据项触发2',
                            type: 'bar',
                            tooltip: {
                                show: false,
                                trigger: 'item',
                            },
                            stack: '数据项',
                            data: [150, 232, 201, 154, 190, 330, 410],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt2Demo08;
