import { asyncRouterMap, constantRouterMap } from '@/router'
import { getPermis } from '@/api/permis'

function hasPermission(permis, route) {
  if (route.meta && route.meta.needPermis) {
    return permis.some(ownPermis => {
      console.log(ownPermis)
      return route.meta.needPermis.indexOf(ownPermis) >= 0
    })
  } else {
    return true
  }
}

function filterAsyncRouter(asyncRouterMap, permis) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(permis, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, permis)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    permisUrl: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    SET_PERMIS_URL: (state, permisUrls) => {
      state.permisUrl = permisUrls
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const permis = data
        const accessedRouters = filterAsyncRouter(asyncRouterMap, permis)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    },
    getPermissions({ commit }) {
      return new Promise(resolve => {
        getPermis().then(res => {
          const info = res.info
          const permisUrl = []
          info.forEach(permis => {
            permisUrl.push(permis.permisUrl)
          })
          commit('SET_PERMIS_URL', permisUrl)
          resolve()
        })
      })
    }
  }
}

export default permission
