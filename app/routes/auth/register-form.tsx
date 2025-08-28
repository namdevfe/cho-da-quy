import { Button, Divider, Form, Input, message, Typography } from 'antd'
import { useNavigate } from 'react-router'
import { validateMessages } from '~/constants/message'
import { useRegister } from '~/pages/auth/hooks'
import type { RegisterPayload } from '~/types/auth'
import { publicRoutes } from '~/constants'

import '~/styles/auth.css'
import { GoogleIcon } from '~/components/icons/google-icon'

const { Text } = Typography

const RegisterForm = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const { mutate } = useRegister()

  const handleRegister = async (values: RegisterPayload) => {
    const payload: RegisterPayload = { ...values }

    mutate(payload, {
      onSuccess: () => {
        message.success('Đăng ký tài khoản thành công')
        navigate('/login')
      }
    })
  }

  return (
    <div className='flex flex-col'>
      <Form layout='vertical' form={form} name='register-form' onFinish={handleRegister}>
        <Form.Item
          required
          name='name'
          label='Tên đăng nhập'
          rules={[{ required: true, message: validateMessages.REQUIRED }]}
        >
          <Input placeholder='Nhập tên đăng nhập' className='h-14' />
        </Form.Item>
        <Form.Item
          required
          name='email'
          label='Email'
          rules={[
            { required: true, message: validateMessages.REQUIRED },
            { message: validateMessages.REGEX.EMAIL.MESSAGE, pattern: validateMessages.REGEX.EMAIL.PATTERN }
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
            { message: validateMessages.LENGTH.PASSWORD, min: 6 }
          ]}
        >
          <Input.Password placeholder='Nhập mật khẩu' className='h-14' />
        </Form.Item>

        <div className='mt-3'>
          <Button className='w-full !h-[54px]' type='primary' htmlType='submit' size='large'>
            Đăng ký
          </Button>
          <Divider style={{ borderColor: '#D9D9D9', color: '#D9D9D9' }}>or</Divider>
          <Button className='w-full !h-[54px]' size='large' icon={<GoogleIcon />}>
            Đăng nhập với Google
          </Button>

          <div className='flex items-center justify-center gap-2 mt-3'>
            <Text>Bạn đã có tài khoản?</Text>
            <Button className='p-0' type='link' onClick={() => navigate(publicRoutes.LOGIN)}>
              Đăng nhập
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default RegisterForm
