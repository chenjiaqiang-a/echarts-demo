import { FC } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';

const getLevelOption = () => [
    {
        itemStyle: {
            borderWidth: 0,
            gapWidth: 5,
        },
    },
    {
        itemStyle: {
            gapWidth: 1,
        },
    },
    {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
            gapWidth: 1,
            borderColorSaturation: 0.6,
        },
    },
];

const Cpt3Demo15: FC<{}> = () => {
    return (
        <div className="demo-container cpt-3-15">
            <p className="go-back-link">
                <Link to="/">返回目录</Link>
            </p>
            <Chart
                width={700}
                height={600}
                option={{
                    title: {
                        text: '矩形树图',
                        top: 15,
                        textStyle: { color: 'green' },
                        left: 270,
                    },
                    series: [
                        {
                            name: '全部',
                            type: 'treemap',
                            levels: getLevelOption(),
                            data: [
                                {
                                    name: '王斌', //First tree
                                    value: 24,
                                    children: [
                                        {
                                            name: '黄著', //First leaf of first tree
                                            value: 2,
                                        },
                                        {
                                            name: '刘旺坚', //Second leaf of first tree
                                            value: 4,
                                        },
                                        {
                                            name: '李文科', //Second leaf of first tree
                                            value: 10,
                                        },
                                        {
                                            name: '蔡铭浪', //Second leaf of first tree
                                            value: 8,
                                        },
                                    ],
                                },
                                {
                                    name: '刘倩', //First tree
                                    value: 16,
                                    children: [
                                        {
                                            name: '胡斌彬', //First leaf of first tree
                                            value: 3,
                                        },
                                        {
                                            name: '廖舒婷', //Second leaf of first tree
                                            value: 7,
                                        },
                                        {
                                            name: '胥玉英', //Second leaf of first tree
                                            value: 6,
                                        },
                                    ],
                                },
                                {
                                    name: '袁波', //First tree
                                    value: 10,
                                    children: [
                                        {
                                            name: '刘俊权', //First leaf of first tree
                                            value: 4,
                                        },
                                        {
                                            name: '古旭高', //Second leaf of first tree
                                            value: 6,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Cpt3Demo15;
