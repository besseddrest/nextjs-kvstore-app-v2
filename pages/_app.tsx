import React, { createContext, useState } from 'react';
import '../styles/global.css'
import { AppProps } from 'next/app';
import { DatasetsProvider } from '../lib/context/DatasetsContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DatasetsProvider>
      <Component />
    </DatasetsProvider>
  )
}
