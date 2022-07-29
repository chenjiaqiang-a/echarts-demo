import { EChartsOption } from 'echarts';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';
import Radio from '../../components/Radio';

const getOptions = (radius: string | string[]): EChartsOption => ({
    title: {
        text: '影响健康、寿命的各类因素',
        subtext: 'WHO统计调查报告',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b} : {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        left: 62,
        top: 22,
        data: ['生活方式', '遗传因素', '社会因素', '医疗条件', '气候环境'],
    },
    toolbox: {
        show: true,
        left: 444,
        top: 28,
        feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    series: [
        //配置数据系列组件
        {
            name: '访问来源',
            type: 'pie',
            radius, //设置半径
            center: ['58%', '55%'], //设置圆心
            data: [
                //设置数据的具体值
                { value: 60, name: '生活方式' },
                { value: 15, name: '遗传因素' },
                { value: 10, name: '社会因素' },
                { value: 8, name: '医疗条件' },
                { value: 7, name: '气候环境' },
            ],
        },
    ],
});

enum FigType {
    Pie = 'pie',
    Ring = 'ring',
}

const Cpt1Demo09: FC<{}> = () => {
    const [opt, setOpt] = useState<FigType>(FigType.Pie);
    const handleRadioChange = (val: any) => {
        setOpt(val);
    };
    return (
        <div className="cpt-1-09">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Radio
                value={opt}
                onChange={handleRadioChange}
                options={[
                    { value: FigType.Pie, label: '标准饼图' },
                    { value: FigType.Ring, label: '圆环图' },
                ]}
            />
            {opt === FigType.Pie && <Chart option={getOptions('66%')} />}
            {opt === FigType.Ring && <Chart option={getOptions([ '45%','75%'])} />}
        </div>
    );
};

export default Cpt1Demo09;
