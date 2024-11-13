import { Navigation } from '@/components/Navigation'
import { withConnection } from '@/config/database.config'
import Link from 'next/link'
import { SubmitButton } from '../_components/SubmitButton'
import { revalidatePath } from 'next/cache'
import { RowDataPacket } from 'mysql2'

const getTodosQuery = `
  SELECT id, text, created_at, updated_at FROM todos;
`

interface Todo extends RowDataPacket {
  id: number
  created_at: Date
  updated_at: Date
  text: string
}

const getTodos = async () => {
  try {
    const connection = await withConnection()
    const [result] = await connection.query<Todo[]>(getTodosQuery)
    return result as Todo[]
  } catch (err: unknown) {
    throw err
  }
}

async function TodosPage() {
  async function createInvoice() {
    'use server'
    const connection = await withConnection()

    await connection.execute(
      {
        sql: 'INSERT INTO `todos`(`text`, `created_at`, `updated_at`) VALUES (?, now(), now() )',
      },
      ['todos'],
    )
    revalidatePath('/todos')
  }
  const todoList = await getTodos()
  return (
    <div className="grid grid-cols-4">
      <div>
        <Navigation />
      </div>
      <div>
        <Link href="/todos/create">新規作成</Link>
      </div>
      <div>
        <h1>Todos</h1>
        <div>
          <ul>
            {todoList.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
        <SubmitButton onClick={createInvoice} />
      </div>
    </div>
  )
}

export default TodosPage
