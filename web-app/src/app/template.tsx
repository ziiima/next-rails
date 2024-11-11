import { FC, ReactNode } from 'react'

export const RootTemplate: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      RootTemplate
      {children}
    </div>
  )
}

export default RootTemplate
