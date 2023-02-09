/* eslint-disable @typescript-eslint/no-this-alias */
import { createClient } from '@supabase/supabase-js'

import Prism from 'prismjs'

import './prism-vsc-dark-plus.css'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'

const supabase = createClient(
  'https://uwrqrpkjndpqvexiyojs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjIxNjY0MywiZXhwIjoxOTUxNzkyNjQzfQ.wR-wKmSyh3jx9aPCMjmHe-7rFWAq6iFJ2KG4qoqn4VM',
)

const MORE_PAGES = '...'

function debounce(func, wait, immediate) {
  let timeout
  return function(...args) {
    const context = this
    clearTimeout(timeout)
    if (immediate && !timeout)
      func.apply(context, args)

    timeout = setTimeout(() => {
      timeout = null
      if (!immediate)
        func.apply(context, args)
    }, wait)
  }
}

// https://jsperf.com/object-empty-ch/1
function isEmptyObject(obj) {
  // eslint-disable-next-line no-unreachable-loop
  for (const key in obj)
    return false

  return true
}

function createPagingRange(nrOfPages, currentPage) {
  const delta = 2
  const range = []
  const rangeWithDots = []
  let length

  range.push(1)

  if (nrOfPages <= 1)
    return range

  for (let i = currentPage - delta; i <= currentPage + delta; i++) {
    if (i < nrOfPages && i > 1)
      range.push(i)
  }
  range.push(nrOfPages)

  for (let i = 0; i < range.length; i++) {
    if (length) {
      if (range[i] - length === 2)
        rangeWithDots.push(length + 1)
      else if (range[i] - length !== 1)
        rangeWithDots.push(MORE_PAGES)
    }
    rangeWithDots.push(range[i])
    length = range[i]
  }
  return rangeWithDots
}

function fieldSorter(fields, dsSortAs = {}) {
  const dir = []
  let i
  const length = fields.length
  fields = fields.map((o, i) => {
    if (o[0] === '-') {
      dir[i] = -1
      o = o.substring(1)
    }
    else {
      dir[i] = 1
    }
    return o
  })

  return function(a, b) {
    for (i = 0; i < length; i++) {
      const o = fields[i]
      const aVal = dsSortAs[o] ? dsSortAs[o](a.value[o]) : a.value[o]
      const bVal = dsSortAs[o] ? dsSortAs[o](b.value[o]) : b.value[o]
      if (aVal > bVal)
        return dir[i]
      if (aVal < bVal)
        return -dir[i]
    }
    return 0
  }
}

function fieldFilter(items, filterFields) {
  // Filter it by field
  for (const filterKey in filterFields) {
    // console.log(filterKey + ' -> ' + filterFields[filterKey]);
    items = items.filter((item) => {
      const itemValue = item.value
      for (const itemKey in itemValue) {
        if (itemKey === filterKey) {
          if (typeof filterFields[filterKey] === 'function')
            return filterFields[filterKey](itemValue[itemKey])
          if (filterFields[filterKey] === '')
            return true
          if (itemValue[itemKey] === filterFields[filterKey])
            return true
        }
      }
      return false
    })
  }
  return items
}

// Search method that also takes into account transformations needed
function findAny(dsSearchIn, dsSearchAs, obj, str) {
  // Convert the search string to lower case
  str = String(str).toLowerCase()
  for (const key in obj) {
    if (dsSearchIn.length === 0 || dsSearchIn.includes(key)) {
      const value = String(obj[key]).toLowerCase()
      for (const field in dsSearchAs) {
        if (field === key) {
          // Found key in dsSearchAs so we pass the value and the search string to a search function
          // that returns true/false and we return that if true.
          /* Check if dsSearchAs is a function (passed from the template) */
          if (typeof dsSearchAs[field] === 'function') {
            const res = dsSearchAs[field](value, str)
            if (res === true)
              return res
          }
        }
      }
      // If it doesn't return from above we perform a simple search
      if (value.includes(str))
        return true
    }
  }
  return false
}

export async function init({ app, store, error, isClient }) {
  if (isClient) return

  try {
    const messages = await app.$axios.$get('messages')
    store.dispatch('message/setMessages', messages)
  } catch (err) {
    store.dispatch('message/setMessages', [])
    error({ statusCode: 500, message: 'Oops, try again' })
  }
}

export const strip = html => html.replace(/<[^>]*>/g, '')
export const truncate = str => `${strip(str).substr(0, 50)}...`
export const flattened = arr => [].concat(...arr)

export { Prism, MORE_PAGES, supabase, debounce, isEmptyObject, createPagingRange, fieldSorter, fieldFilter, findAny }
