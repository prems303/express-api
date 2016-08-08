var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get,
  getUsers: getUsers,
  getUser: getUser,
  delUser: delUser
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
    res.status(200).send('record delted')
  })
  .catch(function (err) {
    res.status(200).send('database something: ' + err.message)
  })
}
//
// function getUsers (req, res) {
//   $.ajax('/users', {
//     success: function (users) {
//       // users is the response data
//       users.forEach(function (users) {
//         $('#users').append('<p>' + users.name + '</p>')
//       })
//     },
//     error: function (jqxhr) {
//       // jqxhr is the XMLHTTPResponse object
//       $(200).text('Error: ' + jqxhr.responseText)
//     }
//   })
// }
