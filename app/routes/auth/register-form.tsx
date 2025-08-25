import { Button, Checkbox, Divider, Flex, Form, Input, Space, Typography } from 'antd'
import { useNavigate } from 'react-router'

const { Title, Text } = Typography

const RegisterForm = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const handleLogin = async (values: any) => {
    console.log('🚀values---->', values)
  }

  return (
    <div className='px-0 py-4 lg:px-16 lg:py-8 h-full flex flex-col justify-center'>
      {/* Heading */}
      <div>
        <Title level={2} className='!mb-3'>
          Đăng ký
        </Title>
        <Text type='secondary' className=''>
          Đăng ký tài khoản để sử dụng hệ thống
        </Text>
      </div>

      <Form layout='vertical' style={{ marginTop: 32 }} form={form} name='login-form' onFinish={handleLogin}>
        <Form.Item required name='name' label='Tên đăng nhập'>
          <Input placeholder='Nhập tên đăng nhập' className='h-14' />
        </Form.Item>
        <Form.Item required name='email' label='Email'>
          <Input placeholder='Nhập email' className='h-14' />
        </Form.Item>
        <Form.Item required name='password' label='Mật khẩu'>
          <Input.Password placeholder='Nhập mật khẩu' className='h-14' />
        </Form.Item>

        <div className='mt-3'>
          <Button className='w-full !h-[54px]' type='primary' htmlType='submit' size='large'>
            Đăng ký
          </Button>
          <Divider style={{ borderColor: '#D9D9D9', color: '#D9D9D9' }}>or</Divider>
          <Button className='w-full !h-[54px]' size='large'>
            Đăng nhập với Google
          </Button>

          <div className='flex items-center justify-center gap-2 mt-3'>
            <Text>Bạn đã có tài khoản?</Text>
            <Button className='p-0' type='link' onClick={() => navigate('/login')}>
              Đăng nhập
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default RegisterForm
