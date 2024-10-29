import { UserRepository } from './repository'

type SignIninput = {
  email: string
  password: string
}

export const signUp = (_root: unknown, { input }: { input: SignIninput }) => {
  return { user: UserRepository.saveOne(input) }
}
