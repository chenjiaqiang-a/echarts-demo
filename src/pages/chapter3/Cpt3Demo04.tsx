import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

//生成一个范围在(-90,90)随机数的函数
function random(): number {
    const r = Math.round(Math.random() * 90);
    return r * (r % 2 === 0 ? 1 : -1);
}

//生成有100个元素的数组,每个元素有三个数值,数组中前两个元素的值的范围在(-90,90),
//第三个元素的值是表示气泡大小的随机数,其范围是(0,90)
function randomDataArray(): number[][] {
    const d: number[][] = [];
    let len = 100;
    while (len--) {
        d.push([random(), random(), Math.abs(random())]);
    }
    return d;
}

const Cpt3Demo04: FC<{}> = () => {
    return (
        <div className="demo-container cpt-3-04">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={600}
                option={{
                    color: ['#FFCCCC', 'green'],
                    title: {
                        left: 40,
                        text: '标准气泡图示例',
                        subtext: '随机生成',
                    },
                    tooltip: {
                        trigger: 'axis',
                        showDelay: 0,
                        axisPointer: {
                            show: true,
                            type: 'cross',
                            lineStyle: { type: 'dashed', width: 1 },
                        },
                    },
                    legend: { left: 240, data: ['bubble1', 'bubble2'] },
                    toolbox: {
                        show: true,
                        left: 450,
                        feature: {
                            dataZoom: { show: true },
                            dataView: { show: true, readOnly: false },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    xAxis: [{ type: 'value', splitNumber: 4, scale: true }],
                    yAxis: [{ type: 'value', splitNumber: 4, scale: true }],
                    series: [
                        {
                            //设置数据系列中的第1类气泡bubble1
                            name: 'bubble1',
                            type: 'scatter',
                            symbol: 'circle',
                            symbolSize: (value) => {
                                return Math.round(value[2] / 5);
                            },
                            data: randomDataArray(),
                        },
                        {
                            //设置数据系列中的第2类气泡bubble2
                            name: 'bubble2',
                            type: 'scatter',
                            symbol: 'circle',
                            symbolSize: (value) => {
                                return Math.round(value[2] / 5);
                            },
                            data: randomDataArray(),
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt3Demo04;
