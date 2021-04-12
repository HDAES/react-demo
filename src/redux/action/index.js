export const TYPE = {
    NAME: 'NAME'
}


export function actionName(name){
    return {
       type: TYPE.NAME,
       value: name
    }
}
 