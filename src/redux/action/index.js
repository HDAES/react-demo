export const type = {
    NAME: 'NAME',
    COLLAPSED: 'COLLAPSED' //菜单栏折叠
}

export function changeCollapsed(collapsed){
    return {
        type: type.COLLAPSED,
        payload: collapsed
    }
}

export function actionName(name){
    return {
       type: type.NAME,
       payload: name
    }
}
 