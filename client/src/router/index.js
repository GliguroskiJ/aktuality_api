import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewArticleView from "../views/NewArticleView.vue"
import AboutView from "../views/AboutView.vue"
import Article from '../components/Article.vue'
import UpdateArticleView from "../views/UpdateArticleView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/narticle',
            name: 'narticle',
            component: NewArticleView
        },
        {
            path: '/article/:id',
            name: 'article',
            component: Article
        },
        {
            path: '/earticle',
            name: 'earticle',
            component: UpdateArticleView
        }
    ]
})

export default router

