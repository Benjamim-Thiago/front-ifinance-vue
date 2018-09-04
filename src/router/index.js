import HelloWorld from '../components/HelloWorld'
import BankList from '../components/Bank/List'
import AccountList from '../components/Account/List'
import AccountView from '../components/Account/View'
import AccountCreate from '../components/Account/Create'
import AccountEdit from '../components/Account/Edit'
import Login from '../components/Login/Form'

const routes = [
  { path: '/', name: 'Hello', component: HelloWorld },
  { path: '/bancos', component: BankList },
  { path: '/contas', component: AccountList },
  { path: '/contas/novo', component: AccountCreate },
  { path: '/contas/:id', component: AccountView },
  { path: '/contas/:id/editar', component: AccountEdit },
  { path: '/login', component: Login }
]

export default routes
