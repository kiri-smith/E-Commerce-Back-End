const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//find all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      Category,
      {
        model: Product,
        through: ProductTag,
      }
    ],
  }).then((tags) => res.json(tags))
});

router.get('/:id', (req, res) => {
  //find one -- id path specifies we just want one
  //category.findone WHERE -- INCLUDE: [Product]}
  //.then((category))
  // find one category by its `id` value
  // be sure to include its associated Products
  //add catch error

  Category.findOne({
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

router.post('/', (req, res) => {
  // create a new category
  //category.create(req.body)
  //.then((category) => 
  //res.status (put number) .json(category)
  Category.create(req.body)
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  //category.update ... similar to above
  Category.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  //category.destroy WHERE /req.params.id INCLUDE: [Product]}
  Category.destroy({
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
