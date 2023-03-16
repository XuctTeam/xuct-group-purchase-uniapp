/*
 * @Author: Derek Xu
 * @Date: 2023-03-16 22:03:28
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-16 22:21:02
 * @FilePath: \xuct-group-purchase-uniapp\src\config\config.ts
 * @Description: 
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved. 
 */
import { useTmRouterAfter, useTmRouterBefore } from "../router/index"
export default {
    autoDark: true,
    theme:{},
    themeConfig: {
        theme: {},
        globalFontSizeRatio:1,
        dark: {
            /**一般的卡片项目暗黑背景 */
            cardcolor: '#0A0A0B',
            /**输入框，表单等暗黑背景 */
            inputcolor: '#111112',
            /**禁用输入框，表单等暗黑背景 */
            disablecolor: 'rgba(30, 30, 30, 1.0)',
            /**暗黑下的页面背景 */
            bodycolor: "rgb(5, 5, 5)",
            /**文本禁用色. */
            textDisableColor: 'rgba(100, 100, 100, 1.0)',
            
        },
        component:{
            
        }
    },
    router: { useTmRouterAfter, useTmRouterBefore },
    custom:{
       
    }
} as Tmui.tmuiConfig