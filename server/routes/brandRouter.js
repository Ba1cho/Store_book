const Router = require('express')
const router = new Router()
const GenreControllere = require('../controllers/brandController')

router.post('/', GenreControllere.create)
router.get('/', GenreControllere.getAll)

module.exports = router
