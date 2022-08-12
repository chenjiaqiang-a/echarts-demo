import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';
import { request } from '../../utils/request';

const Cpt4Demo11: FC<{}> = () => {
    return (
        <div className="demo-container cpt-4-11">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={600}
                fetcher={() => {
                    return new Promise((resolve, reject) => {
                        request('http://localhost:3001/cpt4_11')
                            .then((data) => {
                                resolve({
                                    color: [
                                        'red',
                                        'blue',
                                        'LimeGreen',
                                        'Teal',
                                        'Purple',
                                        'Olive',
                                    ],
                                    backgroundColor: 'rgba(128, 128, 128, 0.1)',
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: '{a} <br/>{b}: {c} ({d}%)',
                                    },
                                    title: {
                                        text: '特色高水平专业群',
                                        subtext: '各专业学生人数统计',
                                        left: 'center',
                                        top: 8,
                                    },
                                    series: [
                                        {
                                            name: '特高专业群之专业:',
                                            type: 'pie',
                                            radius: ['45%', '75%'],
                                            center: ['50%', '58%'],
                                            data: data,
                                            label: {
                                                fontSize: 18,
                                            },
                                        },
                                    ],
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

export default Cpt4Demo11;
