export interface IBook {
  id: number,
  title: string,
  author: string,
  price: number,
  image: string
}

export interface IBookProps {
  book: IBook
}