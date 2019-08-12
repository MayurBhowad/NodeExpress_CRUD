const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//RETRIVING CONTACTS
router.get('/contacts', (req, res, next) =>{
    Contact.find((err, contacts) => {
        res.json(contacts);
    });
});

//ADD CONTACTS
router.post('/contacts', (req, res, next) =>{
    const newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save((err, contact) => {
        if(err) {
            res.json({ msg: 'Faild to add Contact' });
        } else {
            res.json({ msg: 'Contact added successfully' });
        }
    });
});

//UPDATE CONTACTS
router.patch('/contacts/:id', (req, res, next) =>{
        Contact.updateOne(
            { _id: req.params.id },
            { $set: { phone: req.body.phone } },
            (err, result) => {
                if(err) {
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
});

//DELETE CONTACTS
router.delete('/contacts/:id', (req, res, next) =>{
    Contact.remove({ _id: req.params.id }, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;