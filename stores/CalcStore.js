'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var calculations = [];

var CalcStore = assign({}, EventEmitter.prototype,{
    
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT,callback);
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    getCalculations: function(){
        return _authors;
    },
    getCalcMemory: function(id){
        return _.find(_authors, {id :id});
    }
});

Dispatcher.register(function(action){
   switch(action.actionType){
       case ActionTypes.INITIALIZE:
           _authors = action.initialData.authors;
           AuthorStore.emitChange();
           break;
        case ActionTypes.CREATE_AUTHOR:
           _authors.push(action.author);
           AuthorStore.emitChange();
           break;
       case ActionTypes.UPDATE_AUTHOR:
           var existingAuthor = _.find(_authors, {id: action.author.id});
           var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
           _authors.splice(existingAuthorIndex, 1, action.author);
           AuthorStore.emitChange();
           break;
       default:

   }
});

module.exports = AuthorStore;