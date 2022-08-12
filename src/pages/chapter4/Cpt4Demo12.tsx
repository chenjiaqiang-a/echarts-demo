import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';
import { request } from '../../utils/request';

const Cpt4Demo12: FC<{}> = () => {
    return (
        <div className="demo-container cpt-4-12">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={900}
                height={600}
                option={{
                    color: ['Purple', 'LimeGreen'],
                    backgroundColor: 'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1
                    title: {
                        text: '某学院各专业男女生统计',
                        subtext: '2020年',
                        top: 8,
                        left: 66,
                    },
                    tooltip: { trigger: 'axis' },
                    legend: { data: ['男', '女'], top: 8 },
                    toolbox: {
                        show: true,
                        top: 8,
                        left: 680,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            magicType: { show: true, type: ['line', 'bar'] },
                            restore: { show: true },
                            saveAsImage: { show: true },
                        },
                    },
                    calculable: true,
                    xAxis: [{ type: 'category', data: [] }],
                    yAxis: [{ type: 'value' }],
                    series: [
                        {
                            name: '男',
                            type: 'bar',
                            data: [], //设置对应下面男生数据
                            label: {
                                show: true,
                                position: 'top',
                            },
                        },
                        {
                            name: '女',
                            type: 'bar',
                            data: [], //设置对应下面数据中的女生数据
                            label: { show: true, position: 'top' },
                        },
                    ],
                }}
                loadingConfig={{
                    text: '请您稍稍休息片刻,loading data...', //设置提示的文字
                    color: 'blue', //设置转动的圆圈的颜色
                    textColor: 'red', //设置文字的颜色
                    maskColor: 'rgba(160, 255, 255, 0.2)', //设置蒙版的颜色F
                }}
                fetcher={() => {
                    return new Promise((resolve, reject) => {
                        request('http://localhost:3001/cpt4_12')
                            .then((data) => {
                                const boyList = []; //设置男生数组
                                const girlList = []; //设置女生数组
                                const specList = []; //设置专业名称数组
                                //循环获取男生数量、女生数量及专业名称
                                for (let i = 0; i < data.length; i++) {
                                    if (data[i].sex === '男') {
                                        boyList.push(data[i].value);
                                        specList.push(data[i].specName);
                                    } else {
                                        girlList.push(data[i].value);
                                    }
                                }
                                resolve({
                                    xAxis: { data: specList }, //设置显示各专业名称
                                    yAxis: {},
                                    series: [
                                        {
                                            name: '男',
                                            type: 'bar',
                                            data: boyList,
                                        },
                                        {
                                            name: '女',
                                            type: 'bar',
                                            data: girlList,
                                        },
                                    ], //设置显示男女系列的数据
                                });
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    });
                }}
            />
        </div>
    );
};

export default Cpt4Demo12;
