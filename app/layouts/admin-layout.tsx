import { Layout, Menu } from 'antd'
import { Outlet } from 'react-router'
import AdminHeader from '~/components/admin-header'
import SidebarMenu from '~/components/sidebar-menu'
import { useBoundStore } from '~/stores/use-bound-store'

const { Sider, Content } = Layout

const AdminLayout = () => {
  const { theme } = useBoundStore()

  return (
    <Layout className='h-screen'>
      <Sider
        theme={theme}
        breakpoint='lg'
        collapsedWidth='0'
        // onBreakpoint={(broken) => {
        //   console.log(broken)
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type)
        // }}
      >
        <div className='py-2 px-3 text-white flex uppercase font-semibold text-2xl italic'>Admin Panel</div>
        <SidebarMenu />
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
