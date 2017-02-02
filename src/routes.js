import WelcomePage from 'pages/Welcome'
import HelloPage from 'pages/Hello'
import LoginPage from 'pages/Login'

export default [
    {
        path: '/',
        component: WelcomePage
    },
    {
        path: '/hello/:name',
        component: HelloPage
    },
    {
        path: '/login',
        component: LoginPage
    }
]
