"use strict";

//This file is mocking a web API by hitting hard coded data.

var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://jackfrost.firebaseIO.com/';
var theBase = new Firebase(rootUrl + 'authors/');
/*
var authors = require('./authorData').authors;*/
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(){
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var AuthorApi = {
    getAllAuthors: function() {

    },

    getAuthorById: function() {
       return  this.bindAsArray(theBase, "authors")
    },

    saveAuthor: function(author) {
        //pretend an ajax call to web api is made here
        console.log('Pretend this just saved the author to the DB via AJAX call...');

        if (author.id) {
            var existingAuthorIndex = _.indexOf(theBase, _.find(theBase, {id: author.id}));
            theBase.splice(existingAuthorIndex, 1, author);
        } else {
            //Just simulating creation here.
            //The server would generate ids for new authors in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            author.id = _generateId(author);
            theBase.push(author);
        }

        return _clone(author);
    },

    deleteAuthor: function(id) {
        console.log('Pretend this just deleted the author from the DB via an AJAX call...');
       theBase.child(id).remove();
    }
};

module.exports = AuthorApi;