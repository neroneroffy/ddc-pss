import Vue from 'vue'
import Router from 'vue-router'
import login from '../containers/login/login'
import roleHome from '../containers/role-sale/home/home'
import visitRecord from '../containers/role-sale/visit-record/visit-record'
import visitPlan from '../containers/role-sale/visit-plan/visit-plan'
import potentialClients from '../containers/role-sale/potential-clients/potential-clients'
import personal from '../containers/role-sale/personal/personal'
import dealCustomer from '../containers/role-sale/deal-customer/deal-customer'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name:"login",
      component:login,
    },
    {
      path: '/sale',
      name:"roleHome",
      component:roleHome,
      children:[
        {
          path:'/sale/dealCustomer',
          name:"deal-customer",
          component:dealCustomer
        },
        {
          path: '/sale/visitRecord',
          name:"visitRecord",
          component:visitRecord,
        },
        {
          path: '/sale/visitPlan',
          name:"visitPlan",
          component:visitPlan,
        },
        {
          path: '/sale/potentialClients',
          name:"potentialClients",
          component:potentialClients,
        },
        {
          path: '/personal',
          name:"personal",
          component:personal,
        },

      ]
    }

  ]
})
