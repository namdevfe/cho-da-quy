export const validateMessages = {
  REQUIRED: 'Trường này là bắt buộc',
  REGEX: {
    EMAIL: {
      PATTERN: /^[A-Za-z0-9._%+-]+@(?:gmail\.com|(?!gmail)[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+)$/,
      MESSAGE: 'Email không hợp lệ'
    }
  },
  LENGTH: {
    PASSWORD: 'Mật khẩu phải chứa ít nhất 6 ký tự'
  }
}
