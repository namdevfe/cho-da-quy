import { Button, Flex, Input, Layout, Space, theme } from 'antd'
import { Theme } from '~/stores/slices/themeSlice'
import { useBoundStore } from '~/stores/useBoundStore'
import { BulbOutlined, BulbFilled } from '@ant-design/icons'
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'

const { Header } = Layout

const items: MenuProps['items'] = [
  {
    label: (
      <a href='https://www.antgroup.com' target='_blank' rel='noopener noreferrer'>
        1st menu item
      </a>
    ),
    key: '0'
  },
  {
    label: (
      <a href='https://www.aliyun.com' target='_blank' rel='noopener noreferrer'>
        2nd menu item
      </a>
    ),
    key: '1'
  },
  {
    type: 'divider'
  },
  {
    label: '3rd menu item',
    key: '3'
  }
]

const AdminHeader = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const { theme: currentTheme, toggleTheme } = useBoundStore()

  return (
    <Header style={{ backgroundColor: colorBgContainer }}>
      <div className='container h-full gap-3 flex items-center justify-between'>
        <Input type='text' placeholder='Tìm kiếm...' className='max-w-[400px]' />

        <Flex align='center' gap={10}>
          <Button
            type='primary'
            shape='round'
            icon={currentTheme === Theme.LIGHT ? <BulbFilled /> : <BulbOutlined />}
            onClick={() => toggleTheme(currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
          >
            {currentTheme === Theme.DARK ? 'Chế độ tối' : 'Chế độ sáng'}
          </Button>
          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar size={40} icon={<UserOutlined />} />
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Flex>
      </div>
    </Header>
  )
}

export default AdminHeader
