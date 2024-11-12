import { FC, ReactNode } from 'react'

const DashboardTemplate: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      DashboardTemplate
      {children}
    </div>
  )
}

export default DashboardTemplate
