import { type FC } from 'react'

type SamplePageProps = {
  params: Promise<{ [key: string]: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const SamplePage: FC<SamplePageProps> = async () => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <h1>SamplePage</h1>
      </div>
    </div>
  )
}

export default SamplePage
