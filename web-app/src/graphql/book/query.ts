import { bookRepository } from './repository'

export const booksQuery = () => {
  return bookRepository.getBooks()
}

export const authorsQuery = () => {
  return bookRepository.getAuthors()
}

export const bookQuery = {
  books: booksQuery,
  authors: authorsQuery,
}
