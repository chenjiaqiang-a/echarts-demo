import { FC, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import 'echarts-wordcloud';

type EventCallback = {
    on: string;
    callback: (param: any) => void;
};

interface ChartProps {
    width?: number;
    height?: number;
    group?: string;
    option?: echarts.EChartsOption;
    theme?: string | object;
    bindEvents?: EventCallback[];
    dispatchActions?: echarts.Payload[];
    fetcher?: () => Promise<echarts.EChartsOption>;
    loadingConfig?: object;
}

const Chart: FC<ChartProps> = (props) => {
    const {
        width = 600,
        height = 400,
        option,
        fetcher,
        loadingConfig,
        theme,
        group,
        bindEvents = [],
        dispatchActions = [],
    } = props;
    const domRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<echarts.ECharts | null>(null);

    const setOption = () => {
        if (fetcher && !option) {
            chartRef.current?.showLoading();
            fetcher().then(option => {
                chartRef.current?.setOption(option);
                chartRef.current?.hideLoading();
            }).catch(() => {
                alert('数据加载失败！');
                chartRef.current?.hideLoading();
            });
        } else if (fetcher && option) {
            chartRef.current?.setOption(option);
            chartRef.current?.showLoading(loadingConfig);
            fetcher().then(option => {
                chartRef.current?.setOption(option);
                chartRef.current?.hideLoading();
            }).catch(() => {
                alert('数据加载失败！');
                chartRef.current?.hideLoading();
            });
        } else {
            chartRef.current?.setOption(option || {});
        }
    };
    useEffect(() => {
        if (!domRef.current) {
            return;
        }
        if (!chartRef.current) {
            chartRef.current = echarts.init(domRef.current);
        }
        setOption()
    }, [option, fetcher]);

    useEffect(() => {
        chartRef.current?.dispose();
        if (domRef.current) {
            chartRef.current = echarts.init(domRef.current, theme);
        }
        setOption()
    }, [theme]);

    useEffect(() => {
        if (group && chartRef.current) {
            chartRef.current.group = group;
        }
    }, [group]);

    useEffect(() => {
        if (chartRef.current) {
            bindEvents.forEach((event) => {
                chartRef.current?.on(event.on, event.callback);
            });
        }
    }, [bindEvents]);

    useEffect(() => {
        if (chartRef.current) {
            dispatchActions.forEach((action) => {
                chartRef.current?.dispatchAction(action);
            });
        }
    }, [dispatchActions]);

    return <div ref={domRef} style={{ width, height }} />;
};

export default Chart;
