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
  }).then((tags) => {
    res.json(tags);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
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
  }).then((tags) => {
    res.json(tags);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tags) => {
      res.json(tags);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
    .then(tags => {
      if (!tags) {
        res.status(404).json({ message: 'Could not find a tag with that specified id.' });
        return;
      }
      res.json(tags);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(tags => {
      if (!tags) {
        res.status(404).json({ message: 'Could not find a tag with that specified id.' });
        return;
      }
      res.json(tags);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
