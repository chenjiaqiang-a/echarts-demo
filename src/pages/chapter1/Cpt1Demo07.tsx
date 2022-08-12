import { EChartsOption, SeriesOption } from 'echarts';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';
import Radio from '../../components/Radio';

const series1: SeriesOption[] = [
    {
        name: '手机',
        type: 'line',
        stack: '总量',
        areaStyle: { color: 'rgb(174,221,139)' },
        data: [434, 345, 456, 222, 333, 444, 432],
    },
    {
        name: '冰箱',
        type: 'line',
        stack: '总量',
        color: 'blue',
        areaStyle: { color: 'rgb(107,194,53)' },
        data: [420, 282, 391, 344, 390, 530, 410],
    },
    {
        name: '空调',
        type: 'line',
        stack: '总量',
        color: 'red',
        areaStyle: { color: 'rgb(6,128,67)' },
        data: [350, 332, 331, 334, 390, 320, 340],
    },
    {
        name: '电视',
        type: 'line',
        stack: '总量',
        color: 'green',
        areaStyle: { color: 'grey' },
        data: [420, 222, 333, 442, 230, 430, 430],
    },
    {
        name: '其他',
        type: 'line',
        stack: '总量',
        color: '#FA8072',
        areaStyle: { color: 'rgb(38,157,128)' },
        data: [330, 442, 432, 555, 456, 666, 877],
    },
];

const series2: SeriesOption[] = [
    {
        name: '手机',
        type: 'line',
        stack: '总量',
        data: [434, 345, 456, 222, 333, 444, 432],
    },
    {
        name: '冰箱',
        type: 'line',
        stack: '总量',
        color: 'blue',
        data: [420, 282, 391, 344, 390, 530, 410],
    },
    {
        name: '空调',
        type: 'line',
        stack: '总量',
        color: 'red',
        data: [350, 332, 331, 334, 390, 320, 340],
    },
    {
        name: '电视',
        type: 'line',
        stack: '总量',
        color: 'green',
        data: [420, 222, 333, 442, 230, 430, 430],
    },
    {
        name: '其他',
        type: 'line',
        stack: '总量',
        color: '#FA8072',
        data: [330, 442, 432, 555, 456, 666, 877],
    },
];

enum OptionType {
    Series1 = 'series1',
    Series2 = 'series2',
}

const getOptions = (series: SeriesOption[], title: string): EChartsOption => ({
    title: {
        text: title,
        textStyle: {
            color: 'green',
        },
        left: 20,
        top: 3,
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['手机', '冰箱', '空调', '电视', '其他'],
        left: 160,
        top: 3,
    },
    toolbox: {
        show: true,
        orient: 'vertical',
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
        top: 52,
        left: 550,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],
    series,
});

const Cpt1Demo07: FC<{}> = () => {
    const [opt, setOpt] = useState<OptionType>(OptionType.Series1);
    const handleRadioChange = (val: any) => {
        setOpt(val);
    };
    return (
        <div className="cpt-1-07 demo-container">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Radio
                value={opt}
                onChange={handleRadioChange}
                options={[
                    { value: 'series1', label: '堆积面积图' },
                    { value: 'series2', label: '堆积折线图' },
                ]}
            />
            {opt === OptionType.Series1 && (
                <Chart option={getOptions(series1, '堆积面积图')} />
            )}
            {opt === OptionType.Series2 && (
                <Chart option={getOptions(series2, '堆积折线图')} />
            )}
        </div>
    );
};

export default Cpt1Demo07;
