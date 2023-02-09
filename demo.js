const lodash = require('lodash')
const faker = require('faker')
const events = require('./data/events.json')
const projects = require('./data/projects.js')
const projectStatuses = require('./data/project-statuses.json')
const serviceTypes = require('./data/service-types.json')


function data() {
  return {
    events,
    projects,
    'project-statuses': projectStatuses,
    'service-types': serviceTypes,
  }
}

module.exports = data
