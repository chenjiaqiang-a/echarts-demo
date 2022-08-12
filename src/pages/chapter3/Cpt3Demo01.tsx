import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const Cpt3Demo01: FC<{}> = () => {
    return (
        <div className="demo-container cpt-3-01">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={800}
                height={600}
                option={{
                    title: {
                        left: 222,
                        text: '男性和女性身高、体重分布',
                    },
                    color: ['blue', 'green'],
                    xAxis: { scale: true, name: '身高(cm)' },
                    yAxis: { scale: true, name: '体重(kg)' },
                    series: [
                        {
                            type: 'scatter',
                            symbolSize: 20,
                            data: [
                                [167.0, 64.6],
                                [177.8, 74.8],
                                [159.5, 58.0],
                                [169.5, 68.0],
                                [163.0, 63.6],
                                [157.5, 53.2],
                                [164.5, 65.0],
                                [163.5, 62.0],
                                [171.2, 65.1],
                                [161.6, 58.9],
                                [167.4, 67.7],
                                [167.5, 63.0],
                                [181.1, 76.0],
                                [165.0, 60.2],
                                [174.5, 70.0],
                                [171.5, 68.0],
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt3Demo01;
