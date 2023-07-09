import { useState } from 'react';
import '../styles/global.css'
import { AppProps } from 'next/app';
import data from '../src/data/datasets.json';

export default function App({ Component, pageProps }: AppProps) {
  const [datasets, setDatasets] = useState(data);
  console.log(`datasets`);
  console.log(datasets);
  return <Component {...pageProps} datasets={datasets} setDatasets={setDatasets} />
}
