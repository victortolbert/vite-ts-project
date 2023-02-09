import { createStore as vuexCreateStore } from 'vuex'
import { addDays } from 'date-fns'
import { getEventIndexById } from '~/utilities'

import * as user from '~/store/modules/user'
import * as event from '~/store/modules/event'
import * as notification from '~/store/modules/notification'

import EventService from '~/services/EventService'
import ClaimService from '~/services/ClaimService'
import ProjectService from '~/services/ProjectService'
import CustomerService from '~/services/CustomerService'
import ServiceTypeService from '~/services/ServiceTypeService'

import { recipes } from '~/data/recipes'

let nextId = 1

const storeConfiguration = {
  modules: {
    user,
    event,
    notification
  },

  state: {
    _lang: 'en',
    version: '0.1.0',
    activeApp: 'login',
    hasError: false,
    selectedDaypart: 'early-morning',
    stationCallLetters: 'WVVV',

    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],

    claims: [],
    claim: null,

    counter: 0,

    customers: [],
    customer: null,

    events: [
      { id: 10, title: 'All day event', date: new Date(), allDay: true },
      { id: 20, title: 'Timed event', start: addDays(new Date(), 1) },
      { id: 30, title: 'Timed event', start: addDays(new Date(), 2) }
    ],
    eventsTotal: 0,
    event: null,

    menuOpen: false,

    messages: [],
    message: null,

    movies: [],
    movie: null,

    notifications: [],

    plants: [],
    plant: null,

    projects: [],
    project: null,

    recipes,
    recipe: null,

    serviceTypes: [],
    serviceType: null,

    settings: {
      stationAudienceShare: 0.3
    },

    token: null,

    users: [],
    user: {
      name: localStorage.getItem('userName') || 'Seller User',
      email: 'seller@videa.tv'
    },

    userInfo: {
      messages: [{1: 'test', 2: 'test'}],
      notifications: [],
      tasks: []
    },

    weekendsVisible: true
  },

  getters: {
    // EVENTS
    events: state => state.events,

    weekendsVisible: state => state.weekendsVisible,

    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    },

    // SERVICE TYPES
    getServiceTypeById: state => id => {
      return state.serviceTypes.find(serviceType => serviceType.id === id)
    },

    // CLAIMS
    getClaimById: state => id => {
      return state.claims.find(claim => claim.id === id)
    },

    // PROJECTS
    getProjectById: state => id => {
      return state.projects.find(project => project.id === id)
    },

    // CUSTOMERS
    getCustomerById: state => id => {
      return state.customers.find(customer => customer.id === id)
    },

    safelyStoredNumber: state => state.safelyStoredNumber,

    storedNumberMatches(state) {
      return matchNumber => {
        return state.safelyStoredNumber === matchNumber
      }
    }
  },

  actions: {
    // EVENTS
    createEvent({ commit, dispatch }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
          commit('SET_EVENT', event)
          // commit('CREATE_EVENT', event)
          const notification = {
            type: 'success',
            message: 'Your event has been created!'
          }
          dispatch('addNotification', notification, { root: true })
        })
        .catch(error => {
          throw error
        })
    },
    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then(response => {
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          throw error
        })
    },
    fetchEvent({ commit, getters }, id) {
      const event = getters.getEventById(id)
      if (event) {
        commit('SET_EVENT', event)
      } else {
        return EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            throw error
          })
      }
    },
    updateEvent ({ commit }, updatedEvent) {
      return commit('UPDATE_EVENT', updatedEvent)
    },
    deleteEvent ({ commit }, eventId) {
      return commit('DELETE_EVENT', eventId)
    },
    setweekendsVisible ({ commit }, enabled) {
      return commit('SET_WEEKENDS_ENABLED', enabled)
    },

    // NOTIFICATIONS
    addNotification({ commit }, notification) {
      commit('PUSH_NOTIFICATION', notification)
    },
    removeNotification({ commit }, notificationToRemove) {
      commit('DELETE_NOTIFICATION', notificationToRemove)
    },

    // SERVICE TYPES
    createServiceType({ commit }, serviceType) {
      return ServiceTypeService.postServiceType(serviceType)
        .then(() => {
          commit('ADD_SERVICE_TYPE', serviceType)
          commit('SET_SERVICE_TYPE', serviceType)
        })
        .catch(error => {
          throw error
        })
    },

    fetchServiceTypes({ commit }) {
      return ServiceTypeService.getServiceTypes()
        .then(response => {
          commit('SET_SERVICE_TYPES', response.data)
        })
        .catch(error => {
          throw error
        })
    },

    fetchServiceType({ commit, getters }, id) {
      const serviceType = getters.getServiceTypeById(id)

      if (serviceType) {
        commit('SET_SERVICE_TYPE', serviceType)
      } else {
        return ServiceTypeService.getServiceType(id)
          .then(response => {
            commit('SET_SERVICE_TYPE', response.data)
          })
          .catch(error => {
            throw error
          })
      }
    },

    // CLAIMS
    createClaim({ commit }, claim) {
      return ClaimService.postClaim(claim)
        .then(() => {
          commit('ADD_CLAIM', claim)
          commit('SET_CLAIM', claim)
        })
        .catch(error => {
          throw error
        })
    },
    fetchClaims({ commit }) {
      return ClaimService.getClaims()
        .then(response => {
          commit('SET_CLAIMS', response.data)
        })
        .catch(error => {
          throw error
        })
    },
    fetchClaim({ commit, getters }, id) {
      const claim = getters.getClaimById(id)
      if (claim) {
        commit('SET_CLAIM', claim)
      } else {
        return ClaimService.getClaim(id)
          .then(response => {
            commit('SET_CLAIM', response.data)
          })
          .catch(error => {
            throw error
          })
      }
    },

    // PROJECTS
    createProject({ commit }, project) {
      return ProjectService.postProject(project)
        .then(() => {
          commit('ADD_PROJECT', project)
          commit('SET_PROJECT', project)
        })
        .catch(error => {
          throw error
        })
    },
    fetchProjects({ commit }) {
      return ProjectService.getProjects()
        .then(response => {
          commit('SET_PROJECTS', response.data)
        })
        .catch(error => {
          throw error
        })
    },
    fetchProject({ commit, getters }, id) {
      const project = getters.getProjectById(id)
      if (project) {
        commit('SET_PROJECT', project)
      } else {
        return ProjectService.getProject(id)
          .then(response => {
            commit('SET_PROJECT', response.data)
          })
          .catch(error => {
            throw error
          })
      }
    },

    // CUSTOMERS
    createCustomer({ commit }, customer) {
      return CustomerService.postCustomer(customer)
        .then(() => {
          commit('ADD_CUSTOMER', customer)
          commit('SET_CUSTOMER', customer)
        })
        .catch(error => {
          throw error
        })
    },
    fetchCustomers({ commit }) {
      return CustomerService.getCustomers()
        .then(response => {
          commit('SET_CUSTOMERS', response.data)
        })
        .catch(error => {
          throw error
        })
    },
    fetchCustomer({ commit, getters }, id) {
      const customer = getters.getCustomerById(id)
      if (customer) {
        commit('SET_CUSTOMER', customer)
      } else {
        return CustomerService.getCustomer(id)
          .then(response => {
            commit('SET_CUSTOMER', response.data)
          })
          .catch(error => {
            throw error
          })
      }
    }
  },

  mutations: {
    TOGGLE_MENU(state) {
      state.menuOpen = !state.menuOpen
    },

    OPEN_MENU(state) {
      state.menuOpen = true
    },

    CLOSE_MENU(state) {
      state.menuOpen = false
    },

    // EVENTS
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENT(state, event) {
      state.event = event
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal
    },
    CREATE_EVENT (state, event) {
      return state.events.push(event)
    },
    UPDATE_EVENT(state, updatedEvent) {
      const index = getEventIndexById(state, updatedEvent.id)

      if (index === -1) {
        return console.warn(`Unable to update event (id ${updatedEvent.id})`)
      }

      return state.events.splice(index, 1, {
        ...state.events[index],
        title: updatedEvent.title,
        start: updatedEvent.start,
        end: updatedEvent.end,
        date: updatedEvent.date
      })
    },
    DELETE_EVENT (state, eventId) {
      const index = getEventIndexById(state, eventId)

      if (index === -1) {
        return console.warn(`Unable to delete event (id ${eventId})`)
      }

      return state.events.splice(index, 1)
    },
    SET_WEEKENDS_ENABLED (state, enabled) {
      state.weekendsVisible = enabled
    },

    // NOTIFICATIONS
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push({
        ...notification,
        id: nextId++
      })
    },

    DELETE_NOTIFICATION(state, notificationToRemove) {
      state.notifications = state.notifications.filter(
        notification => notification.id !== notificationToRemove.id
      )
    },

    // SERVICE TYPES
    ADD_SERVICE_TYPE(state, serviceType) {
      state.serviceTypes.push(serviceType)
    },
    SET_SERVICE_TYPE(state, serviceType) {
      state.serviceType = serviceType
    },

    SET_SERVICE_TYPES(state, serviceTypes) {
      state.serviceTypes = serviceTypes
    },

    // CLAIMS
    ADD_CLAIM(state, claim) {
      state.claims.push(claim)
    },
    SET_CLAIM(state, claim) {
      state.claim = claim
    },
    SET_CLAIMS(state, claims) {
      state.claims = claims
    },

    // PROJECTS
    ADD_PROJECT(state, project) {
      state.projects.push(project)
    },
    SET_PROJECT(state, project) {
      state.project = project
    },
    SET_PROJECTS(state, projects) {
      state.projects = projects
    },

    // CUSTOMERS
    ADD_CUSTOMER(state, customer) {
      state.customers.push(customer)
    },
    SET_CUSTOMER(state, customer) {
      state.customer = customer
    },
    SET_CUSTOMERS(state, customers) {
      state.customers = customers
    },

    // RECIPES
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe)
    },

    // USERS
    UPDATE_USER(state, payload) {
      state.user = payload
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_TOKEN(state, token) {
      state.token = token
    },

    //
    TOGGLE_LOADING(state) {
      state.callingAPI = !state.callingAPI
    },
    TOGGLE_SEARCHING(state) {
      state.searching = (state.searching === '') ? 'loading' : ''
    },


    increment(state) {
      state.counter++
    },

    toggle(state, key) {
      state[key] = !state[key]
    },

    incrementStoredNumber(state) {
      state.safelyStoredNumber++
    },

    setStoredNumber(state, newNumber) {
      // newNumber is the payload passed in.
      state.safelyStoredNumber = newNumber
    },

    changeActiveApp(state) {
    },

    addRecipe(state, recipe) {
      state.recipes.push(recipe)
    }
  },
}

const defaultOverrides = {
  state: () => {
    return {}
  }
}

function makeState(initialState, overrideState) {
  return {
    ...(typeof initialState === 'function' ? initialState() : initialState),
    ...overrideState()
  }
}

export function createStore(storeOverrides = defaultOverrides) {
  return vuexCreateStore({
    ...storeConfiguration,
    ...storeOverrides,
    ...{
      state: makeState(storeConfiguration.state, storeOverrides.state)
    }
  })
}

export default createStore()
