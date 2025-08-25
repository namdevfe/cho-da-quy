import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

export default [
  layout('./layouts/admin-layout.tsx', [index('./routes/dashboard.tsx'), route('users', './routes/users.tsx')]),
  layout('./layouts/auth-layout.tsx', [
    route('login', './routes/auth/login-form.tsx'),
    route('register', './routes/auth/register-form.tsx')
  ])
] satisfies RouteConfig
