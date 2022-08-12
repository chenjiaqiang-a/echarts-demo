import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt1Demo01: FC<{}> = () => {
    return (
        <div className="cpt-1-01 demo-container">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                option={{
                    title: {
                        //配置标题组件，包含主标题和副标题
                        text: '这里是绘制图表的标题',
                        subtext: '这里是副标题',
                    },
                    tooltip: {},
                    legend: {
                        //配置图例组件，一个echarts图表中可以存在多个图例组件
                        data: ['销量'],
                    },
                    xAxis: {
                        //配置x轴坐标系
                        data: [
                            '衬衫',
                            '羊毛衫',
                            '雪纺衫',
                            '裤子',
                            '高跟鞋',
                            '袜子',
                        ],
                    },
                    yAxis: {}, //配置y轴坐标系
                    series: [
                        {
                            //配置系列列表，每个系列通过type控制该系列图表类型
                            name: '销量',
                            type: 'bar', //设置柱状图
                            data: [5, 20, 36, 10, 10, 20],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt1Demo01;
