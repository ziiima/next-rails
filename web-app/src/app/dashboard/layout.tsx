import type { FC, ReactNode } from 'react'

type DashboardLayoutProps = {
  children: ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <section className="grid grid-cols-4">
      <h1>Dashboard Layout</h1>
      <nav></nav>
      <div>{children}</div>
    </section>
  )
}

export default DashboardLayout
