const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // category.findall
  //.then((categories) => {
    //response.json(categories)
  }) //add catch error
  //find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  //find one -- id path specifies we just want one
  //category.findone WHERE -- INCLUDE: [Product]}
  //.then((category))
  // find one category by its `id` value
  // be sure to include its associated Products
}); //add catch error

router.post('/', (req, res) => {
  // create a new category
  //category.create(req.body)
  //.then((category) => 
    //res.status (put number) .json(category)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  //category.update ... similar to above
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  //category.destroy WHERE /req.params.id INCLUDE: [Product]}
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
});

module.exports = router;
