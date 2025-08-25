import { Button, Checkbox, Divider, Flex, Form, Input, Space, Typography } from 'antd'

const { Title, Text } = Typography

const LoginForm = () => {
  const [form] = Form.useForm()

  const handleLogin = async (values: any) => {
    console.log('🚀values---->', values)
  }

  return (
    <div className='px-0 py-4 lg:px-16 lg:py-8 h-full flex flex-col justify-center'>
      {/* Heading */}
      <div>
        <Title level={2} className='!mb-3'>
          Đăng nhập
        </Title>
        <Text type='secondary' className=''>
          Chào mừng bạn đến với hệ thống bán đá quý
        </Text>
      </div>

      <Form layout='vertical' style={{ marginTop: 32 }} form={form} name='login-form' onFinish={handleLogin}>
        <Form.Item required name='email' label='Email'>
          <Input placeholder='Nhập email' className='h-14' />
        </Form.Item>
        <Form.Item required name='password' label='Mật khẩu'>
          <Input.Password placeholder='Nhập mật khẩu' className='h-14' />
        </Form.Item>
        <Flex align='center' gap='small'>
          <Form.Item className='mb-0' name='isAgree' valuePropName='checked'>
            <Checkbox />
          </Form.Item>
          <Text>Ghi nhớ đăng nhập</Text>
        </Flex>

        <div className='mt-3'>
          <Button className='w-full !h-[54px]' type='primary' htmlType='submit' size='large'>
            Đăng nhập
          </Button>
          <Divider style={{ borderColor: '#D9D9D9', color: '#D9D9D9' }}>or</Divider>
          <Button className='w-full !h-[54px]' size='large'>
            Đăng nhập với Google
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
