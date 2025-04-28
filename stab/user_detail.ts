import { UserDetailResponse } from "@/types/user";

export const userDetail: UserDetailResponse = {
    userName: "test",
    email: "test@gmail.com",
    name: {
        lastName: "山田",
        firstName: "太郎",
    },
    sex: {
        label: "男",
        value: "1"
    },
    phoneNumber: "090-1111-2222",
    bodyWeight: 60.6,
    bodyHeight: 170.5,
    birthday: "2025-01-01"
}