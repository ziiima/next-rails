import { UserRepository } from './repository'

export const viewer = () => {
  // console.log(parent, args, context, info)
}

// export const users = (parent, args, context, info) => {
export const users = () => {
  return UserRepository.findAll()
}

export const userQuery = {
  users,
  viewer,
}
