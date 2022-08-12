import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt1Demo11: FC<{}> = () => {
    return (
        <div className="cpt-1-11">
            <p className="go-back-link demo-container">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={600}
                option={{
                    title: {
                        text: '二级学院分布-南丁格尔玫瑰图',
                        left: 'center',
                        backgroundColor: '#B5A642',
                        textStyle: {
                            fontSize: 18,
                            fontFamily: '黑体',
                            color: '#9932CD',
                        },
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a}<br/>{b} : {c} ({d}%)',
                    },
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        data: [
                            '计算机',
                            '大数据',
                            '外国语',
                            '机器人',
                            '建工',
                            '机电',
                            '艺术',
                            '财经',
                        ],
                    },
                    toolbox: {
                        show: true,
                        left: 600,
                        top: 18,
                        feature: {
                            dataView: { show: true, readOnly: false },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    series: [
                        //配置数据系列及格式组件
                        {
                            //设置第1个数据系列及格式设置
                            name: '学生人数(半径模式)',
                            type: 'pie', //南丁格尔玫瑰图属于饼图中的一种
                            radius: ['10%', '50%'], //设置半径
                            center: ['50%', 180], //设置圆心
                            roseType: 'radius', //设置南丁格尔玫瑰图参数：半径模式
                            width: '50%', // for funnel 漏斗图
                            label: { show: false },
                            labelLine: { show: false },
                            emphasis: {
                                label: { show: true },
                                labelLine: { show: true },
                            },
                            data: [
                                { value: 2000, name: '计算机' },
                                { value: 1500, name: '大数据' },
                                { value: 1200, name: '外国语' },
                                { value: 1100, name: '机器人' },
                                { value: 1000, name: '建工' },
                                { value: 900, name: '机电' },
                                { value: 800, name: '艺术' },
                                { value: 700, name: '财经' },
                            ],
                        },
                        {
                            //设置第2个数据系列及格式
                            name: '学生人数(面积模式)',
                            type: 'pie', //南丁格尔玫瑰图属于饼图中的一种
                            radius: ['10%', '50%'], //设置半径
                            center: ['50%', 180], //设置圆心
                            roseType: 'area', //设置南丁格尔玫瑰图参数:面积模式
                            left: '50%', // for funnel 漏斗图
                            max: 40, // for funnel 漏斗图
                            sort: 'ascending', // for funnel 漏斗图
                            data: [
                                { value: 2000, name: '计算机' },
                                { value: 1500, name: '大数据' },
                                { value: 1200, name: '外国语' },
                                { value: 1100, name: '机器人' },
                                { value: 1000, name: '建工' },
                                { value: 900, name: '机电' },
                                { value: 800, name: '艺术' },
                                { value: 700, name: '财经' },
                            ],
                        },
                        {
                            //设置第3个数据系列及格式
                            name: '教授人数(面积模式)',
                            type: 'pie', //南丁格尔玫瑰图属于饼图中的一种
                            radius: ['10%', '50%'], //设置半径
                            center: ['50%', 420], //设置圆心
                            roseType: 'area', //设置南丁格尔玫瑰图参数:面积模式
                            left: '50%', // for funnel 漏斗图
                            max: 40, // for funnel 漏斗图
                            sort: 'ascending', // for funnel 漏斗图
                            data: [
                                { value: 25, name: '计算机' },
                                { value: 15, name: '大数据' },
                                { value: 12, name: '外国语' },
                                { value: 10, name: '机器人' },
                                { value: 8, name: '建工' },
                                { value: 7, name: '机电' },
                                { value: 6, name: '艺术' },
                                { value: 4, name: '财经' },
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt1Demo11;
