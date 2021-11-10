const express = require('express');
const router = express.Router();

const knex = require('../connection');
const users_m = require('../models/users_m');
const bcrypt = require('bcryptjs');
const {v4:uuidv4} = require('uuid');

  /* GET users listing. */
  router.get('/', async  (req, res, next) => {
    try {
      const result = await knex.select('').from('users')
      res.status(200).json({
        status: "success",
        users: result,
      });
    } catch(err) {
      res.status(500).send({err})
    }
  
});

/* GET uuid. */
router.get('/:uuid',async (req, res, next) => {
  try {
    const result = await knex.select('').from('users').where('uuid', req.params.uuid)
    res.status(200).json({
      status: "success",
      users: result,
    });
  } catch(err) {
    res.status(500).send({err})
  }
});

/* POST. */
router.post('/',async (req, res, next) => {
  console.log(req.body.password);
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  var input = {
    uuid: uuidv4(),
    role: req.body.role,
    email: req.body.email,
    password: hash,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
    authorized: req.body.authorized,
    optin: req.body.optin,
    double_optin: req.body.double_optin,
    token: req.body.token,
  }

  try {
      await users_m.validateAsync(input);
  }
  catch (err) { 
    res.status(500).send({err});
  }

  try {
    await knex('users').insert(input).then( function (result) {
        res.status(200).json({ success: true, message: 'ok' });
    });
  }
  catch (err) {
    res.status(500).send({err});
  }

});

/* PUT /{uuid} */
router.put('/:uuid',async (req, res, next) => {
  try {
    const result = await knex('users')
    .where('uuid', req.params.uuid)
    .update(req.body);

    res.status(200).json({
      status: "success",
      users: result,
    });
  } catch(err) {
    res.status(500).send({err})
  }
});

/* DELETE /{uuid} */
router.delete('/:uuid',async (req, res, next) => {
  try {
    const result = await knex('users')
    .where('uuid', req.params.uuid)
    .del();

    res.status(200).json({
      status: "success",
      users: result,
    });
  } catch(err) {
    res.status(500).send({err})
  }
});


module.exports = router;
