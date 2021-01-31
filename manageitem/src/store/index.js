import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//引入menu模块
import menu from './modules/menu'
//引入角色模块
import  role  from  './modules/role'
//引入管理员模块
import  manger from './modules/manger'
//引入分类模块
import cate from './modules/sort'
//引入商品规格模块
import specs from './modules/specs'
//引入商品模块
import goods from './modules/goods'
import banner from './modules/banner'
import member from './modules/member'
import seck from './modules/seck'


console.log(role,'角色模块')
export default new Vuex.Store({
    modules:{
        menu,
        role,
        manger,
        cate,
        specs,
        goods,
        banner,
        member,
        seck
    }
})