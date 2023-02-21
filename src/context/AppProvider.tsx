'use client'
import React from 'react'
import { AppContext } from './AppContex'

interface AppProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

