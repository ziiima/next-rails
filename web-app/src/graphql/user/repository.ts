import { pbkdf2Sync, randomBytes, randomUUID } from 'crypto'

type User = {
  id: string
  email: string
  createdAt: number
  hash: string
  salt: string
}

type ReadModelUser = Pick<User, 'id' | 'email' | 'createdAt'>

const toReadModel = (user: User): ReadModelUser => ({
  id: user.id,
  email: user.email,
  createdAt: user.createdAt,
})

type SignInInput = {
  email: string
  password: string
}

const users: Array<User> = []

export const UserRepository = {
  findAll(): ReadModelUser[] {
    return users.map((user) => toReadModel(user))
  },
  findOneByEmail(email: string): ReadModelUser | null {
    const user = users.find((user) => user.email == email)
    if (user == null) {
      return null
    }
    return toReadModel(user)
  },
  saveOne(input: SignInInput): ReadModelUser {
    const salt = randomBytes(16).toString('hex')
    const hash = pbkdf2Sync(input.password, salt, 1000, 64, 'sha512').toString(
      'hex',
    )
    const user = {
      id: randomUUID(),
      email: input.email,
      createdAt: Date.now(),
      hash,
      salt,
    }
    users.push(user)

    return toReadModel(user)
  },
}
