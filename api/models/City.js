/**
 * City.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 *dasdads
 */

module.exports = {

 connection: 'MysqlServer',
  migrate:'safe',

  attributes: {

        name: {
            type: 'string',
            unique: true
        },

        states : {
        	model : 'state'
        }
  }
};

