import { UserOutlined, DashboardOutlined } from '@ant-design/icons'
import { Menu, type MenuProps } from 'antd'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useBoundStore } from '~/stores/useBoundStore'

const menuItems: MenuProps['items'] = [
  {
    key: '/',
    label: 'Tổng quan',
    icon: <DashboardOutlined />
  },
  {
    key: '/users',
    label: 'Người dùng',
    icon: <UserOutlined />
  }
]

const SidebarMenu = () => {
  const { theme } = useBoundStore()
  const { pathname } = useLocation()
  const [selectedKey, setSelectedKey] = useState<string>(pathname)
  const navigate = useNavigate()

  const handleMenuItemClick: MenuProps['onClick'] = (e) => {
    // setSelectedKey(e.key)
    navigate(e.key)
  }

  return <Menu theme={theme} mode='inline' selectedKeys={[pathname]} items={menuItems} onClick={handleMenuItemClick} />
}

export default SidebarMenu
