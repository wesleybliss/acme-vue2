import WelcomeComponent from 'components/Welcome'
import HelloComponent from 'components/Hello'
import LoginComponent from 'components/Login'

export default [
    {
        path: '/',
        component: WelcomeComponent
    },
    {
        path: '/hello/:name',
        component: HelloComponent
    },
    {
        path: '/login',
        component: LoginComponent
    }
]
