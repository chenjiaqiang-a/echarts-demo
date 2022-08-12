import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt2Demo07: FC<{}> = () => {
    return (
        <div className="demo-container cpt-2-07">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={900}
                height={600}
                option={{
                    color: [
                        'red',
                        'green',
                        'blue',
                        'yellow',
                        'grey',
                        '#FA8072',
                    ],
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        left: 300,
                        data: ['最高', '最低'],
                    },
                    toolbox: {
                        //配置工具箱组件
                        show: true, //设置是否显示工具箱组件
                        orient: 'horizontal', //设置布局方式，默认为水平布局，可选:'horizontal'¦'vertical'
                        //设置水平安放位置，默认为右对齐；
                        //可选:'center'¦'left'¦'right'¦{number}（x坐标，单位px）
                        left: 'right',
                        top: 'top',
                        // color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
                        backgroundColor: 'rgba(0,0,0,0)', //设置工具箱背景颜色
                        borderColor: '#ccc', //设置工具箱边框颜色
                        borderWidth: 0, //设置工具箱边框线宽，单位px,默认为0（无边框）
                        padding: 5, //设置工具箱内边距，单位px，默认各方向内边距为5
                        showTitle: true,
                        feature: {
                            dataZoom: {
                                //设置数据区域缩放
                                show: true,
                                title: {
                                    zoom: '区域缩放',
                                    back: '区域缩放-后退',
                                },
                            },
                            dataView: {
                                //设置数据视图
                                show: true,
                                title: '数据视图',
                                readOnly: false,
                                lang: ['数据视图', '关闭', '刷新'],
                                optionToContent: (opt: any) => {
                                    const axisData = opt.xAxis[0].data;
                                    const series = opt.series;
                                    let table =
                                        '<table style="width:100%;text-align:center"><tbody><tr>' +
                                        '<td>时间</td>' +
                                        '<td>' +
                                        series[0].name +
                                        '</td>' +
                                        '<td>' +
                                        series[1].name +
                                        '</td>' +
                                        '</tr>';
                                    for (
                                        let i = 0, l = axisData.length;
                                        i < l;
                                        i++
                                    ) {
                                        table +=
                                            '<tr>' +
                                            '<td>' +
                                            axisData[i] +
                                            '</td>' +
                                            '<td>' +
                                            series[0].data[i] +
                                            '</td>' +
                                            '<td>' +
                                            series[1].data[i] +
                                            '</td>' +
                                            '</tr>';
                                    }
                                    table += '</tbody></table>';
                                    return table;
                                },
                            },
                            magicType: {
                                //设置动态类型切换
                                show: true,
                                title: {
                                    line: '动态类型切换-折线图',
                                    bar: '动态类型切换-柱状图',
                                    stack: '动态类型切换-堆积',
                                    tiled: '动态类型切换-平铺',
                                },
                                type: ['line', 'bar', 'stack'],
                            },
                            restore: {
                                //设置数据重置
                                show: true,
                                title: '还原',
                            },
                            saveAsImage: {
                                //设置导出图片
                                show: true,
                                title: '保存为图片',
                                type: 'jpeg',
                                lang: ['单击本地保存'],
                            },
                            myTool: {
                                //设置自定义工具按钮
                                show: true,
                                title: '自定义扩展方法',
                                //设置改变默认的图标为一个特定的图标
                                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                                onclick: () => {
                                    alert('广科院,大数据与人工智能学院');
                                },
                            },
                        },
                    },
                    calculable: true,
                    dataZoom: {
                        show: true,
                        realtime: true,
                        start: 20,
                        end: 80,
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: (function () {
                                var list = [];
                                for (var i = 1; i <= 30; i++) {
                                    list.push('2020-03-' + i);
                                }
                                return list;
                            })(),
                        },
                    ],
                    yAxis: [{ type: 'value' }],
                    series: [
                        {
                            name: '最高',
                            type: 'line',
                            smooth: true,
                            data: (() => {
                                const list = [];
                                for (let i = 1; i <= 30; i++) {
                                    list.push(
                                        Math.round(Math.random() * 30) + 10
                                    );
                                }
                                return list;
                            })(),
                        },
                        {
                            //设置数据系列2
                            name: '最低',
                            type: 'line',
                            smooth: true,
                            data: (() => {
                                const list = [];
                                for (let i = 1; i <= 30; i++) {
                                    list.push(Math.round(Math.random() * 10));
                                }
                                return list;
                            })(),
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt2Demo07;
