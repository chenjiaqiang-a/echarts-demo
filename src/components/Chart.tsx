import { FC, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface ChartProps {
    width?: number;
    height?: number;
    option: echarts.EChartsOption;
    theme?: string | object;
}

const Chart: FC<ChartProps> = (props) => {
    const { width = 600, height = 400, option, theme } = props;
    const domRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<echarts.ECharts | null>(null);

    useEffect(() => {
        if (!domRef.current) {
            return;
        }
        if (!chartRef.current) {
            chartRef.current = echarts.init(domRef.current, theme);
        }
        chartRef.current?.setOption(option);
    }, [option]);

    return <div ref={domRef} style={{ width, height }} />;
};

export default Chart;
