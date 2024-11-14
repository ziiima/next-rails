import Link from 'next/link'
import type { FC } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type CounterProps = {
  counter: number
}

export const Counter: FC<CounterProps> = ({ counter }) => {
  return (
    <div>
      <h2>From Server Component</h2>
      <p>Counter: {counter}</p>
      <Link href="/counter">Counter</Link>
      <button>Change State Counter</button>
    </div>
  )
}
