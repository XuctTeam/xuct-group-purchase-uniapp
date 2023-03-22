declare namespace User {
  type User = {}

  type UserInfo = {
    avatar?: string
    nickname?: string
    openId: string
    phone?: string
  }

  type LoginResult = {
    tokenName: string
    tokenValue: string
    user?: UserInfo
  }
}
