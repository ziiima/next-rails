import type { FC } from 'react'
import style from './helloWorld.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type HelloWorldProps = {}

export const HelloWorld: FC<HelloWorldProps> = () => {
  return (
    <div className={style.main}>
      <h1>Hello World, I am being styled using CSS Modules!</h1>
    </div>
  )
}
