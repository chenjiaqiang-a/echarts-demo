import { EChartsOption } from 'echarts';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';
import Radio from '../../components/Radio';

type OptionType = 'ascending' | 'descending';

const getOptions = (sort: OptionType): EChartsOption => ({
    color: [
        'lightblue',
        'rgba(0,150,0,0.5)',
        'rgba(255,200,0,0.5)',
        'rgba(155,200,50,0.5)',
        'rgba(44,44,0,0.5)',
        'rgba(33,33,30,0.5)',
        'rgba(255,66,0,0.5)',
        'rgba(155,23,31,0.5)',
        'rgba(23,44,55,0.5)',
    ],
    title: {
        left: 270,
        top: 0,
        textStyle: { color: 'green' },
        text: sort === 'descending' ? '漏斗图' : '金字塔',
    },
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c}%' },
    toolbox: {
        left: 555,
        top: 0,
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
        },
    },
    legend: {
        left: 40,
        top: 30,
        data: [
            '浏览选购',
            '添加到购物车',
            '购物车结算',
            '核对订单信息',
            '提交订单',
            '选择支付方式',
            '完成支付',
        ],
    },
    series: [
        {
            name: '漏斗图',
            type: 'funnel',
            left: '3%',
            sort, //金字塔:'ascending'; 漏斗图:'descending'
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%', //设置每一块的最小宽度
            maxSize: '100%', //设置每一块的最大，一次去除掉尖角
            gap: 2, //设置每一块之间的间隔
            label: { show: true, position: 'inside' }, //设置标签显示在里面|外面
            labelLine: {
                length: 10, //设置每一块的名字前面的线的长度
                lineStyle: {
                    width: 1, //设置每一块的名字前面的线的宽度
                    type: 'solid', //设置每一块的名字前面的线的类型
                },
            },
            itemStyle: {
                borderColor: '#fff', //设置每一块的边框颜色
                borderWidth: 0, //设置每一块边框的宽度
                shadowBlur: 50, //设置整个外面的阴影厚度
                shadowOffsetX: 0, //设置每一块的y轴的阴影
                shadowOffsetY: 50, //设置每一块的x轴的阴影
                shadowColor: 'rgba(0,255,0,0.4)',
            },
            labelLayout: {
                fontSize: 15,
            },
            //设置鼠标hover时高亮样式
            emphasis: {
                label: { fontFamily: '楷体', color: 'green', fontSize: 28 },
            },
            data: [
                //设置在漏斗图中展示的数据
                { value: 100, name: '浏览选购' },
                { value: 60, name: '添加到购物车' },
                { value: 42, name: '购物车结算' },
                { value: 25, name: '核对订单信息' },
                { value: 9, name: '提交订单' },
                { value: 4, name: '选择支付方式' },
                { value: 2.5, name: '完成支付' },
            ],
        },
    ],
});

const Cpt3Demo09: FC<{}> = () => {
    const [opt, setOpt] = useState<OptionType>('descending');
    const handleRadioChange = (val: any) => {
        setOpt(val);
    };
    return (
        <div className="cpt-3-09">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Radio
                value={opt}
                onChange={handleRadioChange}
                options={[
                    { value: 'descending', label: '漏斗图' },
                    { value: 'ascending', label: '金字塔' },
                ]}
            />
            {opt === 'descending' && (
                <Chart
                    width={800}
                    height={600}
                    option={getOptions('descending')}
                />
            )}
            {opt === 'ascending' && (
                <Chart
                    width={800}
                    height={600}
                    option={getOptions('ascending')}
                />
            )}
        </div>
    );
};

export default Cpt3Demo09;
