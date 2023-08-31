const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try{
    const tagData = await Tag.findAll({
      //includes its associated Product data
      include:[{model:Product, as: 'products'}]
    });
    res.status(200).json(tagData);
  } catch(err){
    res.status(500).json(err);
  } 
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      //includes its associated Product data
      include:[{model:Product, as: 'products'}]
    });
    res.status(200).json(tagData);
  } catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name:req.tag_name});
    res.status(200).json(tagData);
  } catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
  // update a tag's name by its `id` value
  const tagData = await Tag.update(
    {tag_name:req.body.tag_name},
    {where:{id:req.params.id}}
  );
  res.status(200).json(tagData);
  } catch(err){
    res.status(500).json(err);
  }
});
  

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const tagData = await Tag.destroy({
      where:{id:req.params.id}
    });
    res.status(200).json(tagData);
  } catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
