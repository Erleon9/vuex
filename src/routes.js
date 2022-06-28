import match from './pages/MatchItem.vue'
import stats from './pages/StatsItem.vue'
import home from './pages/HomeItem.vue'
import table from './pages/TableItem.vue'

export const routes = [
    {path:'/', component:home},
    {path:'/match', component:match},
    {path:'/stats', component:stats},
    {path:'/table', component:table}
]
