const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//get all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      Category,
      {
        model: Product,
        through: ProductTag,
      }
    ],
  }).then((tags) => res.json(tags))
});

//get one tag by 'id'
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      Category,
      {
        model: Product,
        through: ProductTag,
      }
    ]
  }).then((tags) => res.json(tags))
});

//create a new tag
router.post('/', (req, res) => {
  // create a new tag
  //  Tag.create(req.body)
  // .then
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
