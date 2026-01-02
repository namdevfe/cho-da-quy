import { Button, Flex, Input, Typography, type TableColumnType, Table, type TableProps } from 'antd'
import {
  TableOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  PlusOutlined,
  DownloadOutlined
} from '@ant-design/icons'
import type { User } from '~/types/user'
import { USERS_MOCK_DATA } from '~/mocks/user-mock'
import { useGetUsers } from '~/pages/users-management-page/hooks'
import { DEFAULT_USER_PAGE, LIMIT_USERS } from '~/constants'

const { Title, Text } = Typography

const UsersManagementPage = () => {
  const userColumns: TableColumnType<User>[] = [
    {
      title: 'Họ và tên',
      dataIndex: 'fullName',
      render: (text: string) => <Text strong>{text}</Text>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: (text: string) => <Text>{text}</Text>
    },
    {
      title: 'Quyền',
      dataIndex: 'role',
      render: (text: string) => <Text>{text}</Text>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (text: string) => <Text>{text}</Text>
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      render: (text: string) => <Text>{text}</Text>
    }
  ]

  // rowSelection object indicates the need for row selection
  const rowSelection: TableProps<User>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: User[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record: User) => ({
      disabled: record.fullName === 'Disabled User', // Column configuration not to be checked
      name: record.fullName
    })
  }

  const { data } = useGetUsers({ page: DEFAULT_USER_PAGE, limit: LIMIT_USERS })

  console.log('🚀data---->', data)

  return (
    <div className='px-3 py-6'>
      <div>
        <Title level={1} style={{ marginBottom: 10 }}>
          Quản lý người dùng
        </Title>
        <Text type='secondary'>Quản lý tài khoản và quyền của người dùng</Text>
      </div>

      <div className='mt-6'>
        <Flex align='center' justify='space-between' className='flex-col gap-4 md:flex-row'>
          <Flex align='center' gap={10}>
            <Button icon={<TableOutlined />}>Bảng biểu</Button>
            <Button icon={<AppstoreOutlined />}>Dạng bảng</Button>
            <Button icon={<UnorderedListOutlined />}>Danh sách</Button>
          </Flex>

          <Flex align='center' gap={10}>
            {/* Filter Actions */}
            <Flex align='center' gap={4}>
              <Input.Search placeholder='Tìm kiếm ...' variant='filled' />
            </Flex>

            {/* Main Actions */}
            <Button icon={<DownloadOutlined />}>Xuất file</Button>
            <Button type='primary' icon={<PlusOutlined />}>
              Tạo mới
            </Button>
          </Flex>
        </Flex>

        {/* Users Table */}
        <div className='mt-10'>
          <Table<User>
            scroll={{ x: 'max-content' }}
            rowKey='id'
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={userColumns}
            dataSource={USERS_MOCK_DATA}
          />
        </div>
      </div>
    </div>
  )
}

export default UsersManagementPage
