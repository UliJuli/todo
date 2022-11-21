const router = require('express').Router();
const isImitate = require('../middlewares/setImitate');

const { List } = require('../db/models');

router.get('/api/list', async (req, res) => {
  try {
    const list = await List.findAll();
    res.json({ list })
  } catch (error) {
    console.log(error)
  }
})

router.post('/api/add', isImitate, async (req, res) => {
  const { text } = req.body;
  try {
    const newList = await List.findOrCreate({
      where: { name: text },
      defaults: {
        status: false
      },
      raw: true
    });
    res.json({ newList }).sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})

router.put('/api/change/:id', isImitate, async (req, res) => {
  const { id } = req.params;
  console.log(111111111111111111)
  try {
    const list = await List.findByPk(id);
    const stat = !list.status;
    await list.update({ status: stat });
    console.log(22222222222222222222222)
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
})

router.delete('/api/delete/:id', isImitate, async (req, res) => {
  const { id } = req.params;
  try {
    await List.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
})

module.exports = router;
