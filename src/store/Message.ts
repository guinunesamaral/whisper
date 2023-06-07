import User from "./User"

export default interface Message {
  id: number
  text: string | null
  image: string | null
  dateCreated: Date
  dateUpdated: Date | null
  from: User
  to: User
}