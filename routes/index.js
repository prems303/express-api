var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)
var filter = require('knex-filter').filter

module.exports = {
  get: get,
  getUsers: getUsers,
  getUser: getUser,
  delUser: delUser,
  putUser: putUser,
  postUser: postUser,
  filUser: filUser
  // getWidget: getWidget
}

function get (req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.json({id: id, name: 'Better Users'})
    })
    .catch(function (err) {
      res.status(200).send('DATABASE ERROR: ' + err.message)
    })
}
//
// function getWidget (req, res) {
//  var id = req.params.id
//  res.json({id: id, name: 'Better widget'})
// }
//
function getUsers (req, res) {
  knex('users')
  .select()
  .then(function (users){
     res.json(users)
  })
 .catch(function (err) {
   res.status(200).send('database something: ' + err.message)
 })
}

function getUser (req, res) {
  var id = req.params.id
  knex('users')
  .select()
  .where({
    id:id
  })
  .then(function (user){
    res.json(user)
  })
  .catch(function (err) {
    res.status(500).send('database something: ' + err.message)
  })
}

function delUser (req, res) {
  var id = req.params.id
  knex('users')
  .del()
  .where({
    id: id
  })
  .then (function (){
    res.status(200).send('record deleted')
  })
  .catch(function (err) {
    res.status(200).send('database something: ' + err.message)
  })
}

function putUser (req, res) {
  var id = req.params.id
  knex('users')
  .update({
    name: req.body.name,
    email: req.body.email
  })
  .where({
    id: id
  })
  .then (function (){
    res.status(200).send('record added')
  })
  .catch(function (err){
    res.status(200).send('database something: ' + err.message)
  })
}

function postUser (req, res) {
  var id = req.params.id
   knex('users')
   .insert({
     name: req.body.name,
     email: req.body.email
   })
   .where({
     id: id
   })
   .then (function (){
     res.status(201).send('show record')
   })
   .catch(function (err){
     res.status(201).send('database something: ' + err.message)
   })
}

function filUser (req, res) {
  knex('users')
  .where({
    // ('name', 'like', '%Test%')

  })
  .then (function (){
    res.status(201).send('show record')
  })
  .catch(function (err){
    res.status(201).send('database something: ' + err.message)
  })
}
