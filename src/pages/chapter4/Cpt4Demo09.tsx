import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';
import * as echarts from 'echarts';

const data: { name: string; value: (string | number)[] }[] = [];
let now = new Date(2020, 5, 2, 24, 60, 60);
let oneDay = 24 * 600 * 600; //设置控制x轴上时间的长短
function randomData() {
    //产生随机数据的函数
    now = new Date(+now + oneDay);
    let value = Math.random() * 80 + 20;
    return {
        name: now.toLocaleString('chinese', { hour12: false }),
        value: [
            now.toLocaleString('chinese', { hour12: false }),
            Math.round(value),
        ],
    };
}
for (let i = 0; i < 300; i++) {
    //随机生成300个数据，存放在数组data中
    data.push(randomData());
}

const option1: echarts.EChartsOption = {
    color: [
        'DarkGreen',
        'red',
        'LimeGreen',
        'blue',
        'Purple',
        'GreenYellow',
        'DarkTurquoise',
    ],
    backgroundColor: 'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1
    title: { text: '在此图表中滚动鼠标', left: 110, top: 12 }, //配置标题组件
    tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
            params = params[0];
            var date = new Date(params.name);
            return (
                date.getFullYear() +
                '年' +
                (date.getMonth() + 1) +
                '月' +
                date.getDate() +
                '日' +
                ' : ' +
                params.value[1]
            );
        },
        axisPointer: { animation: false },
    },
    xAxis: { type: 'time', splitLine: { show: false } },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: { show: false },
    },
    dataZoom: [
        //配置数据区域缩放组件
        {
            type: 'inside', //设置两种取值inslide，slide
            show: true,
            start: 20, //设置数据显示的开始位置
            end: 70, //设置数据显示的终止位置
        },
    ],
    series: [{ name: '模拟数据', type: 'line', data: data }],
};

const option2: any = {
    color: [
        'blue',
        'LimeGreen',
        'red',
        'DarkGreen',
        'Purple',
        'GreenYellow',
        'DarkTurquoise',
    ],
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    title: { text: '此图表与上面同步变化', left: 110, top: 12 },
    tooltip: {
        //配置提示框组件
        trigger: 'axis',
        formatter: (params: any) => {
            params = params[0];
            var date = new Date(params.name);
            return (
                date.getFullYear() +
                '年' +
                (date.getMonth() + 1) +
                '月' +
                date.getDate() +
                '日' +
                ' : ' +
                params.value[1]
            );
        },
        axisPointer: { animation: false }, //设置坐标轴指示器
    },
    xAxis: { type: 'time', splitLine: { show: false } }, //配置x轴坐标系
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: { show: false },
    },
    dataZoom: [
        //配置数据区域缩放组件
        {
            type: 'inside', //设置两种取值inslide，slide
            show: true,
            start: 0, //设置数据显示的开始位置
            end: 100, //设置数据显示的终止位置
        },
    ],
    series: [{ name: '模拟数据', type: 'bar', data: data }], //配置数据系列
};

const Cpt4Demo09: FC<{}> = () => {
    const [option, setOption] = useState(option2);
    return (
        <div className="demo-container cpt-4-09">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={200}
                option={option1}
                bindEvents={[
                    {
                        on: 'datazoom',
                        callback: (params) => {
                            console.log(params);
                            //获得起止位置百分比
                            const startPercent = params.batch[0].start;
                            const endPercent = params.batch[0].end;
                            console.log(startPercent, endPercent);
                            option2.dataZoom[0].start = startPercent;
                            option2.dataZoom[0].end = endPercent;
                            setOption({...option2})
                        },
                    },
                ]}
            />
            <Chart
                width={800}
                height={200}
                option={option}
            />
        </div>
    );
};

export default Cpt4Demo09;
