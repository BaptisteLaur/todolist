const express = require('express');
const router = express.Router();

//const data = require('../data/fake_tasks');

const {v4:uuid} = require('uuid');

router.get('/', (req, res, next) => {
  res.status(200).json({
        uuid: "ce63ef14-c658-4bf4-8f39-843c422229d3",
        status: "1",
        description: "description de la tache 1",
        created_at: "09/11/2021 - 10h57",
    },
    {
        uuid: "06aa1fb8-2474-4013-8e7b-b370d8e7bbb2",
        status: "1",
        description: "description de la tache 2",
        created_at: "09/11/2021 - 10h59",
    },
    {
        uuid: "16aa1fb8-2474-4013-8e7b-b370d8e7bbb2",
        status: "1",
        description: "description de la tache 2",
        created_at: "09/11/2021 - 10h58",
    },
    {
        uuid: "26aa1fb8-2474-4013-8e7b-b370d8e7bbb2",
        status: "1",
        description: "description de la tache 2",
        created_at: "09/11/2021 - 10h56",
    });
});

router.post('/', (req, res, next) => {
    const description = req.body.description;
    //const now = new Date().toISOString().slice(0,19).replace('T',)
    const new_task = {
        "uuid": uuid(),
        "description": description,
        "status": 0,
        "created_at": ""
    };

    data.push(new_task);
    res.status(200).json({ items: data });
});

module.exports = router;