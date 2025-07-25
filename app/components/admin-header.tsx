import { Layout, theme } from 'antd'

const { Header } = Layout

const AdminHeader = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return <Header style={{ backgroundColor: colorBgContainer }} />
}

export default AdminHeader
