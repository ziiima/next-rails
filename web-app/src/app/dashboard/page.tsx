import { restclient } from '@/utils/rest-client'

const getDashboard = async () => {
  const data = await restclient({
    url: '/dashboard',
    method: 'GET',
  })
  console.log(data)
  return []
}

const DashboardPage = async () => {
  const list = await getDashboard()
  return <h1>Hello, Dashboard Page!</h1>
}

export default DashboardPage
