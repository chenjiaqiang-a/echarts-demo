import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt2Demo03: FC<{}> = () => {
    return (
        <div className="cpt-2-03">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={650}
                height={600}
                option={{
                    grid: {
                        show: true,
                        left: 15,
                        top: 66,
                        borderColor: '#FA8072',
                    },
                    title: {
                        //配置标题组件
                        show: true, //设置标题组件是否显示
                        text: '未来一周气温变化', //设置主标题
                        subtext: '折线图', //设置副标题
                        target: 'blank', //'self'当前窗口打开，'blank'新窗口打开
                        subtarget: 'blank', //设置副标题打开链接的窗口
                        textAlign: 'center', //设置文本水平对齐
                        textBaseline: 'top', //设置文本垂直对齐
                        textStyle: {
                            //设置标题样式
                            color: 'blue',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontFamily: '黑体',
                            fontSize: 14,
                        },
                        padding: 5, //设置标题内边距
                        itemGap: 10, //设置主副标题间距
                        //设置所属图形的Canvas分层，zlevel大的Canvas会放在zlevel小的Canvas的上面
                        zlevel: 0,
                        z: 2, //设置所属组件的z分层，z值小的图形会被z值大的图形覆盖
                        left: '10%', //设置组件离容器左侧的距离，'left'，'center'，'right'，'20%'
                        top: '10', //设置组件离容器上侧的距离，'top'，'middle'，'bottom'，'20%'
                        right: 'auto', //设置组件离容器右侧的距离，'20%'
                        bottom: 'auto', //设置组件离容器下侧的距离，'20%'
                        backgroundColor: 'yellow', //设置标题背景色
                        borderColor: '#ccc', //设置边框颜色
                        borderWidth: 2, //设置边框线宽
                    },
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        data: ['最高气温', '最低气温'],
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: { show: true, readOnly: false },
                            magicType: { show: true, type: ['line', 'bar'] },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    calculable: true,
                    xAxis: [
                        {
                            show: false,
                            type: 'category',
                            boundaryGap: false,
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
                            show: false,
                            type: 'value',
                            axisLabel: { formatter: '{value} °C' },
                        },
                    ],
                    series: [
                        {
                            name: '最高气温',
                            smooth: true,
                            type: 'line',
                            data: [11, 11, 15, 13, 12, 13, 10],
                            markPoint: {
                                data: [
                                    { type: 'max', name: '最大值' },
                                    { type: 'min', name: '最小值' },
                                ],
                            },
                            markLine: {
                                data: [{ type: 'average', name: '平均值' }],
                            },
                        },
                        {
                            name: '最低气温',
                            smooth: true,
                            type: 'line',
                            data: [1, -2, 2, 5, 3, 2, 0],
                            markPoint: {
                                data: [
                                    {
                                        name: '周最低',
                                        value: -2,
                                        xAxis: 1,
                                        yAxis: -1.5,
                                    },
                                ],
                            },
                            markLine: {
                                data: [{ type: 'average', name: '平均值' }],
                            },
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt2Demo03;
