'use client'

import { Provider } from 'react-redux'
import { store, persister } from '@/lib/redux/store';
import { PersistGate } from 'redux-persist/integration/react'

export default function ReduxProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        {children}
      </PersistGate>
    </Provider>
  )
}