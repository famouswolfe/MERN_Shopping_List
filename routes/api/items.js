const express = require('express');
const router = express.Router();

// Use Item model
const Item = require('../../models/Item');

// GET      request to api/items
// fetches  all items
// @access  public
router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
});

// @route   Post api/items
// @desc    Create an Item
// @access  public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

// @route   Delete api/items/:id
// @desc    Delete an Item
// @access  public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
    });

module.exports = router;