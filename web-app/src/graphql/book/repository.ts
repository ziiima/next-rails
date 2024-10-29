export const authors = [
  {
    name: 'Kate Chopin',
    books: [],
  },
  {
    name: 'Kate Chopin',
    books: [],
  },
]

export const books = [
  {
    title: 'The Awakening',
    author: authors.at(0),
  },
  {
    title: 'City of Glass',
    author: authors.at(1),
  },
]

export const bookRepository = {
  getBooks() {
    return books
  },

  getAuthors() {
    return authors
  },
}
