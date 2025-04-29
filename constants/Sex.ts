import { SegmentValue, SegmentValuesForFront } from "@/types/common"

export const Sex: SegmentValuesForFront = {
    parameters: [
        {
            label: "男性",
            value: "1"
        },
        {
            label: "女性",
            value: "2"
        }
    ],

    getLabelByValue(value: string) {
        const item = this.parameters.find((sex: SegmentValue) => sex.value === value)
        return item ? item.label : '' 
    }
}

