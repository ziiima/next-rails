import { SubmitButton } from '@/app/_components/SubmitButton'
import { Navigation } from '@/components/Navigation'
import { withConnection } from '@/config/database.config'
import console from 'console'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

export const CreatePage = () => {
  async function createInvoice() {
    'use server'
    const connection = await withConnection()
    try {
      const result = await connection.execute(
        {
          sql: 'INSERT INTO `todos`(`text`, `created_at`, `updated_at`) VALUES (?, now(), now() )',
        },
        ['todos'],
      )
      revalidatePath('/todos')
      console.log(result)
    } catch (error: unknown) {
      console.log(error)
    }
  }

  return (
    <div className="grid grid-cols-4">
      <div>
        <Navigation />
      </div>
      <div>
        <div>
          <Link href="/todos">一覧</Link>
        </div>
        <SubmitButton onClick={createInvoice} />
      </div>
    </div>
  )
}

export default CreatePage
