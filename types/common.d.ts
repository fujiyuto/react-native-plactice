// 区分値に使用
export interface SegmentValue {
    label: string
    value: string
}

// 区分値をフロントに表示する時に使用
export interface SegmentValuesForFront {
    parameters: SegmentValue[],
    getLabelByValue: (value: string) => string
}

// メッセージレスポンス
export interface MessageResponse {
    message: string
}

// トークンレスポンス