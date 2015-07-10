/**
 * This is the only file where globals should be declared.
 * We do this, so we can have all other files in strict mode.
 */

/* globals Letterpress: true */

Letterpress = {
  Constants: {},
  // Small reusable utilities
  Utils: {},
  // Meteor Mongo Collections
  Collections: {},
  // Domain specific logic.
  Services: {},
  // Response handlers for 3rd party libraries
  Handlers: {},
  Subscriptions: {}
};

var global = this;
global.Letterpress = Letterpress;
