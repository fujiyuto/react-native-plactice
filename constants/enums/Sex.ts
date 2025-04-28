enum Sex {
    MEN,
    WOMEN
}

// DBで格納する性別の値を返却
export const getValue = (sex: Sex): string => {
    switch (sex) {
        case Sex.MEN:
            return '1'
            break
        case Sex.WOMEN:
            return '2'
            break
        default: 
            return ''
    }
}

// 画面に表示する際のラベルを返却
export const getLabel = (sex: Sex): string => {
    switch (sex) {
        case Sex.MEN:
            return '男性'
            break
        case Sex.WOMEN:
            return '女性'
            break
        default: 
            return ''
    }
}