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
import Cpt2Demo01 from '../pages/chapter2/Cpt2Demo01';
import Cpt2Demo02 from '../pages/chapter2/Cpt2Demo02';
import Cpt2Demo03 from '../pages/chapter2/Cpt2Demo03';
import Cpt2Demo04 from '../pages/chapter2/Cpt2Demo04';
import Cpt2Demo05 from '../pages/chapter2/Cpt2Demo05';
import Cpt2Demo06 from '../pages/chapter2/Cpt2Demo06';
import Cpt2Demo07 from '../pages/chapter2/Cpt2Demo07';
import Cpt2Demo08 from '../pages/chapter2/Cpt2Demo08';
import Cpt2Demo09 from '../pages/chapter2/Cpt2Demo09';
import Cpt3Demo01 from '../pages/chapter3/Cpt3Demo01';
import Cpt3Demo02 from '../pages/chapter3/Cpt3Demo02';
import Cpt3Demo03 from '../pages/chapter3/Cpt3Demo03';
import Cpt3Demo04 from '../pages/chapter3/Cpt3Demo04';
import Cpt3Demo05 from '../pages/chapter3/Cpt3Demo05';
import Cpt3Demo06 from '../pages/chapter3/Cpt3Demo06';
import Cpt3Demo07 from '../pages/chapter3/Cpt3Demo07';
import Cpt3Demo08 from '../pages/chapter3/Cpt3Demo08';
import Cpt3Demo09 from '../pages/chapter3/Cpt3Demo09';
import Cpt3Demo10 from '../pages/chapter3/Cpt3Demo10';
import Cpt3Demo11 from '../pages/chapter3/Cpt3Demo11';
import Cpt3Demo12 from '../pages/chapter3/Cpt3Demo12';
import Cpt3Demo13 from '../pages/chapter3/Cpt3Demo13';
import Cpt3Demo14 from '../pages/chapter3/Cpt3Demo14';
import Cpt3Demo15 from '../pages/chapter3/Cpt3Demo15';

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

export const cpt2Routes: RouteConfig[] = [
    {
        text: '网格组件示例',
        link: 'cpt-2-01',
        element: <Cpt2Demo01 />,
    },
    {
        text: '坐标轴组件示例',
        link: 'cpt-2-02',
        element: <Cpt2Demo02 />,
    },
    {
        text: '标题组件示例',
        link: 'cpt-2-03',
        element: <Cpt2Demo03 />,
    },
    {
        text: '多个标题组件示例',
        link: 'cpt-2-04',
        element: <Cpt2Demo04 />,
    },
    {
        text: '图例组件示例',
        link: 'cpt-2-05',
        element: <Cpt2Demo05 />,
    },
    {
        text: '图例组件（滚动效果）示例',
        link: 'cpt-2-06',
        element: <Cpt2Demo06 />,
    },
    {
        text: '工具箱组件示例',
        link: 'cpt-2-07',
        element: <Cpt2Demo07 />,
    },
    {
        text: '详情提示框组件示例',
        link: 'cpt-2-08',
        element: <Cpt2Demo08 />,
    },
    {
        text: '标记点与标记线示例',
        link: 'cpt-2-09',
        element: <Cpt2Demo09 />,
    },
];

export const cpt3Routes: RouteConfig[] = [
    {
        text: '基本散点图示例',
        link: 'cpt-3-01',
        element: <Cpt3Demo01 />,
    },
    {
        text: '两个序列的散点图示例',
        link: 'cpt-3-02',
        element: <Cpt3Demo02 />,
    },
    {
        text: '带涟漪特效的散点图示例',
        link: 'cpt-3-03',
        element: <Cpt3Demo03 />
    },
    {
        text: '标准气泡图示例',
        link: 'cpt-3-04',
        element: <Cpt3Demo04 />
    },
    {
        text: '人均寿命与GDP气泡图',
        link: 'cpt-3-05',
        element: <Cpt3Demo05 />
    },
    {
        text: '城市空气污染指数气泡图',
        link: 'cpt-3-06',
        element: <Cpt3Demo06 />
    },
    {
        text: '单仪表盘示例',
        link: 'cpt-3-07',
        element: <Cpt3Demo07 />
    },
    {
        text: '多仪表盘示例',
        link: 'cpt-3-08',
        element: <Cpt3Demo08 />
    },
    {
        text: '基本漏斗图/金字塔示例',
        link: 'cpt-3-09',
        element: <Cpt3Demo09 />
    },
    {
        text: '多漏斗图和多金字塔示例',
        link: 'cpt-3-10',
        element: <Cpt3Demo10 />
    },
    {
        text: '基本雷达图示例',
        link: 'cpt-3-11',
        element: <Cpt3Demo11 />
    },
    {
        text: '复杂雷达图示例',
        link: 'cpt-3-12',
        element: <Cpt3Demo12 />
    },
    {
        text: '多雷达图示例',
        link: 'cpt-3-13',
        element: <Cpt3Demo13 />
    },
    {
        text: '词云图示例',
        link: 'cpt-3-14',
        element: <Cpt3Demo14 />
    },
    {
        text: '矩形树图示例',
        link: 'cpt-3-15',
        element: <Cpt3Demo15 />
    }
];

export const routes: RouteConfig[] = [...cpt1Routes, ...cpt2Routes, ...cpt3Routes];
