export const type = {
    NAME: 'NAME'
}


export function actionName(name){
    return {
       type: type.NAME,
       payload: name
    }
}
 