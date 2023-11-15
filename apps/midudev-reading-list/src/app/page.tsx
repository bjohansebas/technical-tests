import { BookCard } from '@/components/book-card'
import { getAllBooks } from '@/services/book'

export default async function Home() {
  const books = await getAllBooks()

  return (
    <main className="flex flex-wrap gap-3">
      {books.library.map(({ book }) => (
        <BookCard key={book.ISBN} book={book} />
      ))}
    </main>
  )
}
