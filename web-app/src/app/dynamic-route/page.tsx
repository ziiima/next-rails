'use client'

import { Navigation } from '@/components/Navigation'
import { usePathname } from 'next/navigation'

const SlugPage = () => {
  const pathname = usePathname()

  return (
    <>
      <Navigation />
      <p>Hello,m the {pathname} page</p>
    </>
  )
}

export default SlugPage
