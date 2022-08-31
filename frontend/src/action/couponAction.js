import React from 'react'

 const toggleFilter = (activeState) => {
  return {
    type:"toggleFilter",
    payload:activeState
  }
}
const toggleBrands = (activeState) => {
    return {
      type:"toggleBrands",
      payload:activeState
    }
  }
export {toggleFilter,toggleBrands}
