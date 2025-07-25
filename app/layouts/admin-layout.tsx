import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
import { Outlet } from 'react-router'
import AdminHeader from '~/components/admin-header'
import { useBoundStore } from '~/stores/useAppStore'

const { Sider, Header, Content, Footer } = Layout

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`
}))

const AdminLayout = () => {
  const { theme } = useBoundStore()

  return (
    <Layout className='h-screen'>
      <Sider
        theme={theme}
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className='py-2 px-3 text-white flex uppercase font-semibold text-2xl italic'>Admin Panel</div>
        <Menu theme={theme} mode='inline' defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <AdminHeader />
        <Content className='overflow-y-auto'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
