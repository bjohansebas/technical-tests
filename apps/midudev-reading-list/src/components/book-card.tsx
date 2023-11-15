import { Book } from '@/@types/books'
import Image from 'next/image'

export const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="card bg-base-200 shadow-xl mx-auto w-96">
      <figure>
        <img src={book.cover} alt={book.title} className="aspect-[9/14] object-cover w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>{book.author.name}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" type="button">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
