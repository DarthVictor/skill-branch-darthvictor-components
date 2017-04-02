import React from 'react'
import StatusButton from './StatusButton'

const PROMISE_TIMEOUT = 2500

module.exports = ({ storiesOf, action }) => {
    let timeout
    const getSuccessPromise = () => {        
        return new Promise((resolve, reject) => {
            timeout && window.clearTimeout(timeout);
            timeout = window.setTimeout(() => {
                resolve('Added!')}, 
            PROMISE_TIMEOUT)
        })
    }
    
    const getErrorPromise = () => {        
        return new Promise((resolve, reject) => {
            timeout&&window.clearTimeout(timeout);
            timeout = window.setTimeout(() => {
                reject('Error!')
            }, PROMISE_TIMEOUT)
        })
    }
  return storiesOf('StatusButton', module)
    
    .add('Status Button state none', () => (
        <StatusButton defaultState={StatusButton.STATE_NONE}>Add to cart</StatusButton>
    ))  

    .add('Status Button default state', () => (
        <StatusButton>Add to cart</StatusButton>
    ))   

    .add('Status Button loading state', () => (
        <StatusButton defaultState={StatusButton.STATE_LOADING}>Waiting</StatusButton>
    ))   
    
    .add('Status Button success state', () => (
        <StatusButton defaultState={StatusButton.STATE_SUCCESS}>OK</StatusButton>
    ))   
    
    .add('Status Button error state', () => (
        <StatusButton defaultState={StatusButton.STATE_ERROR}>Error!</StatusButton>
    ))   

    
    .add('Status Button success promise', () => (
        <StatusButton onClickPromise={getSuccessPromise}>Add to cart</StatusButton>
    ))   

    
    .add('Status Button error promise', () => (
        <StatusButton onClickPromise={getErrorPromise}>Add to cart</StatusButton>
    ))   

};