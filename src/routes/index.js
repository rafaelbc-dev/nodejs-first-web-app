import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.render('index', {title: "Rafael BC NodeJs Website"})
})

router.get('/about', (req, res) => {
    res.render('about', {title: "About me"})
})

router.get('/contact', (req, res) => {
    res.render('contact', {title: "Contact me"})
})

// router.get('/mysqlapiclient', (req, res) => {
//     res.render('mysqlapiwebclient', {title: "NodeJs MySQL REST API Web Client"})
// })

export default router