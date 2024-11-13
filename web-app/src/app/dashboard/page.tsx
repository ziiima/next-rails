import { restclient } from '@/utils/rest-client'

const getDashboard = async () => {
  await restclient({
    url: '/dashboard',
    method: 'GET',
  })
  return []
}

const DashboardPage = async () => {
  const list = await getDashboard()
  return (
    <div>
      <h1>Hello, Dashboard Page!</h1>
      <div>{list.length}</div>
    </div>
  )
}

export default DashboardPage
