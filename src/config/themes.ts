import * as echarts from 'echarts'
import darkTheme from '../assets/theme/dark.json';
import infographicTheme from '../assets/theme/infographic.json';
import macaronsTheme from '../assets/theme/macarons.json';
import romaTheme from '../assets/theme/roma.json';
import shineTheme from '../assets/theme/shine.json';
import vintageTheme from '../assets/theme/vintage.json';

interface ThemeConfig {
    name: string;
    obj: any;
}

const themesConfig: ThemeConfig[] = [
    {
        name: 'dark',
        obj: darkTheme,
    },
    {
        name: 'infographic',
        obj: infographicTheme,
    },
    {
        name: 'macarons',
        obj: macaronsTheme,
    },
    {
        name: 'roma',
        obj: romaTheme,
    },
    {
        name: 'shine',
        obj: shineTheme,
    },
    {
        name: 'vintage',
        obj: vintageTheme,
    }
]

export const themes = themesConfig.map(theme => {
    echarts.registerTheme(theme.name, theme.obj);
    return theme.name;
});
