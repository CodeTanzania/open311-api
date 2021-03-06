'use strict';


//dependencies
const path = require('path');
const _ = require('lodash');
const jurisdictions = require(path.join(__dirname, 'jurisdiction_seed'));
const services = require(path.join(__dirname, 'service_seed'));
const parties = require(path.join(__dirname, 'party_seed'));


/**
 * @description export service seeds
 * @return {Array} collection of service to seed
 */
module.exports = [{
  jurisdiction: jurisdictions[0],
  group: services[0].group,
  method: 'USSD',
  service: _.omit(services[0], 'jurisdiction'),
  reporter: _.omit(parties[0], 'jurisdiction'),
  operator: _.omit(parties[0], 'jurisdiction'),
  assignee: _.omit(parties[0], 'jurisdiction'),
  description: 'For three days now we dont have water',
  address: 'Mikocheni'
}, {
  jurisdiction: jurisdictions[1],
  group: services[1].group,
  service: _.omit(services[1], 'jurisdiction'),
  reporter: _.omit(parties[0], 'jurisdiction'),
  operator: _.omit(parties[0], 'jurisdiction'),
  assignee: _.omit(parties[0], 'jurisdiction'),
  description: 'There have been a leakage at my area. Lots of water in the street',
  address: 'Kijitonyama'
}, {
  jurisdiction: jurisdictions[2],
  group: services[2].group,
  service: _.omit(services[2], 'jurisdiction'),
  reporter: _.omit(parties[0], 'jurisdiction'),
  operator: _.omit(parties[0], 'jurisdiction'),
  assignee: _.omit(parties[0], 'jurisdiction'),
  description: 'I have not received my last month bill',
  address: 'Temeke - Mikoroshini'
}, {
  jurisdiction: jurisdictions[0],
  group: services[3].group,
  service: _.omit(services[3], 'jurisdiction', 'group'),
  reporter: _.omit(parties[0], 'jurisdiction'),
  operator: _.omit(parties[0], 'jurisdiction'),
  assignee: _.omit(parties[0], 'jurisdiction'),
  description: 'Too much sewage in city center roads',
  address: 'Posta Mpya'
}];
