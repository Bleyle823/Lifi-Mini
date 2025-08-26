'use client'

import type { WidgetConfig } from '@lifi/widget'
import { LiFiWidget, WidgetSkeleton } from '@lifi/widget'
import { ClientOnly } from '../app/ClientOnly'
import { useEffect, useState } from 'react'

export function Widget() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Mark as loaded after component mounts
    setIsLoaded(true)
  }, [])

  const config = {
    appearance: 'light',
    theme: {
      container: {
        border: '1px solid rgb(234, 234, 234)',
        borderRadius: '16px',
        minHeight: '400px',
      },
    },
  } as Partial<WidgetConfig>

  if (!isLoaded) {
    return (
      <div className="p-4 text-center text-gray-600">
        Loading LiFi Bridge...
      </div>
    )
  }

  return (
    <div className="w-full">
      <ClientOnly fallback={<WidgetSkeleton config={config} />}>
        <LiFiWidget 
          config={config} 
          integrator="lifi-mini-app-farcaster"
        />
      </ClientOnly>
    </div>
  )
}
