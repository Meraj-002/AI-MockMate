import React from 'react'
import { PricingTable } from '@clerk/nextjs'

function planData() {
  return (
    <div className='mt-10'>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }} >
      <PricingTable />
    </div>
    </div>
  )
}
export default planData