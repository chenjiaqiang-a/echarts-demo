import React from 'react';
import Cpt1Demo01 from '../pages/chapter1/Cpt1Demo01';
import Cpt1Demo02 from '../pages/chapter1/Cpt1Demo02';
import Cpt1Demo03 from '../pages/chapter1/Cpt1Demo03';
import Cpt1Demo04 from '../pages/chapter1/Cpt1Demo04';
import Cpt1Demo05 from '../pages/chapter1/Cpt1Demo05';
import Cpt1Demo06 from '../pages/chapter1/Cpt1Demo06';
import Cpt1Demo07 from '../pages/chapter1/Cpt1Demo07';
import Cpt1Demo08 from '../pages/chapter1/Cpt1Demo08';
import Cpt1Demo09 from '../pages/chapter1/Cpt1Demo09';
import Cpt1Demo10 from '../pages/chapter1/Cpt1Demo10';
import Cpt1Demo11 from '../pages/chapter1/Cpt1Demo11';

export interface RouteConfig {
    text: string;
    link: string;
    element: React.ReactNode;
}

export const cpt1Routes: RouteConfig[] = [
    {
        text: '简单柱状图示例',
        link: 'cpt-1-01',
        element: <Cpt1Demo01 />,
    },
    {
        text: '标准柱状图示例',
        link: 'cpt-1-02',
        element: <Cpt1Demo02 />,
    },
    {
        text: '堆积柱状图示例',
        link: 'cpt-1-03',
        element: <Cpt1Demo03 />,
    },
    {
        text: '标准条形图示例',
        link: 'cpt-1-04',
        element: <Cpt1Demo04 />,
    },
    {
        text: '瀑布图示例',
        link: 'cpt-1-05',
        element: <Cpt1Demo05 />,
    },
    {
        text: '标准折线图示例',
        link: 'cpt-1-06',
        element: <Cpt1Demo06 />,
    },
    {
        text: '堆积面积/折线图示例',
        link: 'cpt-1-07',
        element: <Cpt1Demo07 />,
    },
    {
        text: '阶梯图示例',
        link: 'cpt-1-08',
        element: <Cpt1Demo08 />,
    },
    {
        text: '标准饼图/圆环图示例',
        link: 'cpt-1-09',
        element: <Cpt1Demo09 />,
    },
    {
        text: '嵌套饼图示例',
        link: 'cpt-1-10',
        element: <Cpt1Demo10 />,
    },
    {
        text: '南丁格尔玫瑰图示例',
        link: 'cpt-1-11',
        element: <Cpt1Demo11 />,
    },
];
