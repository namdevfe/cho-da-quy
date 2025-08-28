import { Button, Checkbox, Divider, Flex, Form, Input, message, Typography } from 'antd'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import { validateMessages } from '~/constants/message'
import { privateRoutes, publicRoutes } from '~/constants/route'
import { useLogin } from '~/pages/auth/hooks/use-login'
import { useBoundStore } from '~/stores/use-bound-store'
import type { LoginPayload } from '~/types/auth'

import '~/styles/auth.css'
import { GoogleIcon } from '~/components/icons/google-icon'

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
    <div className='flex flex-col '>
      <Form disabled={isPending} layout='vertical' form={form} name='login-form' onFinish={handleLogin}>
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
          <Button className='w-full !h-[54px]' size='large' icon={<GoogleIcon />}>
            Đăng nhập với Google
          </Button>
          <div className='flex items-center justify-center gap-2 mt-3'>
            <Text>Bạn chưa có tài khoản?</Text>
            <Button className='p-0' type='link' onClick={() => navigate(publicRoutes.REGISTER)}>
              Đăng ký
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
