import React from 'react'
import StepOne from './step-1'
import StepTwo from './step-2'

const steps =
  [
    { name: 'Step 1: Pledge Details', component: <StepOne /> },
    { name: 'Step 2: Review & Confirm', component: <StepTwo /> }
  ]

export { steps }