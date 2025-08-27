import { Button, Checkbox, Divider, Flex, Form, Input, message, Typography } from 'antd'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import { validateMessages } from '~/constants/message'
import { privateRoutes } from '~/constants/route'
import { useLogin } from '~/pages/auth/hooks/use-login'
import { useBoundStore } from '~/stores/use-bound-store'
import type { LoginPayload } from '~/types/auth'

const { Title, Text } = Typography

const LoginForm = () => {
  const [form] = Form.useForm()
  const { isPending, mutate } = useLogin()
  const navigate = useNavigate()
  const setAuth = useBoundStore((state) => state.setAuth)

  const handleLogin = async (values: LoginPayload & { isAgree: boolean }) => {
    const { isAgree, ...payload } = values

    mutate(payload, {
      onSuccess: async () => {
        // Get state isLogin from cookie
        const isLoggedIn = !!Cookies.get('isLogin')

        // Set profile to store
        setAuth({ profile: null, isLoggedIn })

        message.success('Đăng nhập thành công')
        navigate(privateRoutes.DASHBOARD)
      }
    })
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

      <Form
        disabled={isPending}
        layout='vertical'
        style={{ marginTop: 32 }}
        form={form}
        name='login-form'
        onFinish={handleLogin}
      >
        <Form.Item
          required
          name='email'
          label='Email'
          rules={[
            { required: true, message: validateMessages.REQUIRED },
            { pattern: validateMessages.REGEX.EMAIL.PATTERN, message: validateMessages.REGEX.EMAIL.MESSAGE }
          ]}
        >
          <Input placeholder='Nhập email' className='h-14' />
        </Form.Item>
        <Form.Item
          required
          name='password'
          label='Mật khẩu'
          rules={[
            { required: true, message: validateMessages.REQUIRED },
            { min: 6, message: validateMessages.LENGTH.PASSWORD }
          ]}
        >
          <Input.Password placeholder='Nhập mật khẩu' className='h-14' />
        </Form.Item>

        <Flex align='center' dir='row-reverse' gap='small'>
          <Form.Item className='mb-0' name='isAgree' initialValue={false} valuePropName='checked'>
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
