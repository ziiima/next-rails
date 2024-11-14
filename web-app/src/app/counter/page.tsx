import { Navigation } from '@/components/Navigation'
import { Counter } from './_components/Counter'
import { use, type FC } from 'react'
import { redirect } from 'next/navigation'

type CounterPageProps = {
  searchParams: Promise<{ counter: string | undefined }>
}

const CounterPage: FC<CounterPageProps> = (props) => {
  const query = use(props.searchParams)
  if (query.counter === undefined) {
    redirect(`/counter?counter=0`)
  }
  return (
    <div className="grid grid-cols-4">
      <div>
        <Navigation />
      </div>
      <div>
        <h1>CounterPage</h1>
        <div>
          <Counter counter={Number(query.counter) || 0} />
        </div>
      </div>
    </div>
  )
}

export default CounterPage
