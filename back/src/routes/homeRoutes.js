const router = require('express').Router();

const { List } = require('../db/models')
router.get('/api/list', async (req, res) => {
  try {
    const list = await List.findAll();
    setTimeout(() =>{
      res.json({ list })
    }, 5000)
  } catch (error) {
    console.log(error)
  }
})

router.post('/api/add', async (req, res) => {
  const { text } = req.body;
  try {
    const newList = await List.findOrCreate({
      where: { name: text },
      defaults: {
        status: false
      },
      raw: true
    });
    res.json({ newList })
  } catch (error) {
    console.log(error)
  }
})

router.put('/api/change/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.findByPk(id);
    const stat = !list.status;
    await list.update({ status: stat });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
})

router.delete('/api/delete/:id', async (req, res) => {
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
