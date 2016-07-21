/**
 * 
 * @authors luozh
 * @date    2016-07-21 17:04:26
 * @description 路由配置
 */

'use strict'

export default function (router) {
    router.map({
        '/': {
            component: function (resolve) {
                require(['./App.vue'], resolve)
            }
        }
    })
}
