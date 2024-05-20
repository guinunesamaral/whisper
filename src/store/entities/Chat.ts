import User from "./User"

export default interface Chat{
    id: number
    userOne: User
    userTwo: User
    createdAt: Date
}