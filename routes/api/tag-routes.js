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
  Tag.create(req.body)
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
