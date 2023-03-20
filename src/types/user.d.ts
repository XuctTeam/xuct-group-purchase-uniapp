declare namespace User {
  type User = {}

  type UserInfo = {
    avatar?: string
    nickname?: string
    openId: string
  }

  type LoginResult = {
    tokenName: string
    tokenValue: string
    openId: string
  }
}
