const router = require('express').Router()
const items = require('./items_model')

router.post('/', (req, res, next) => {
    items.add_item(req.body)
        .then(data => res.json(data))
        .catch(next)
})

router.put('/', (req, res, next) => {
    items.update_item(req.body)
        .then(data => res.json(data))
        .catch(next)
})

router.get('/', (req, res, next) => {
    items.get_all()
        .then(data => res.json(data))
        .catch(next)
})
router.get('/:catergory', (req, res, next) => {
    items.get_all_by_catergory(req.params.catergory)
        .then(data => res.json(data))
        .catch(next)
})

router.get('/single/:item_id', (req, res, next) => {
    items.get_single_item(req.params.item_id)
        .then(data => res.json(data))
        .catch(next)
})

router.get('/seller/:user_id', (req,res,next) => {
    items.get_by_user_id(req.params.user_id)
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;
