import { MessageResponse } from "./common"

// 名前
export interface Name {
    lastName: string
    firstName: string
}

//===== User =====//
// User詳細取得レスポンス
export interface UserDetailResponse {
    userName: string
    email: string
    name: Name
    birthday: string
    sex: SegmentValue
    phoneNumber: string
    bodyHeight: number
    bodyWeight: number
}

// User登録リクエスト
export interface UserCreateRequest {
    userName: string
    email: string
    password: string
    passwordConfirm: string
    name: Name
    birthday: string
    sex: string
    phoneNumber: string
    bodyHeight: number
    bodyWeight: number
}

// User登録レスポンス
export interface UserCreateResponse implements MessageResponse {}

// User編集リクエスト
export interface UserEditRequest {
    userName: string
    name: Name
    sex: string
    birthday: string
    phoneNumber: string
    bodyHeight: number
    bodyWeight: number
}

// User編集レスポンス
export interface UserEditResponse {
    userName: string
    name: Name
    sex: SegmentValue
    birthday: string
    sex: SegmentValue
    phoneNumber: string
    bodyHeight: number
    bodyWeight: number
}

// パスワード変更リクエスト
export interface PasswordUpdateRequest {
    password: string
    passwordConfirm: string
}

// パスワード変更レスポンス
export interface PasswordUpdateResponse implements MessageResponse {}

// メールアドレス変更リクエスト
export interface PasswordUpdateRequest {
    newEmail: string
}

// メールアドレス変更レスポンス
export interface PasswordUpdateResponse implements MessageResponse {}

// ログインリクエスト
export interface LoginRequest {
    userName: string
    password: string
}

// ログインレスポンス
export interface LoginResponse implements TokenResponse {}