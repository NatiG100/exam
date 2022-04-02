import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useCounter } from '../src/provider/counter.provider'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import APARTMENT_REPORT from './../src/graphql/test';

export default function Home() {
  // const [value, setValue] = useState(0);
  // const {
  //   dispatch,
  //   state: { number }
  // } = useCounter();
  // const increament = () => {
  //   dispatch({
  //     type: "increament",
  //   })
  // }
  // const decreament = () => {
  //   dispatch({
  //     type: "decreament",
  //   })
  // }
  // const add = (data) => () => {
  //   dispatch({
  //     type: "add",
  //     data
  //   })
  // }
  // const minus = (data) => () => {
  //   dispatch({
  //     type: "minus",
  //     data,
  //   })
  // }
  const { loading, error, data } = useQuery(APARTMENT_REPORT);
  if (loading) return (<div>Loading</div>);
  if (error) return (<div>Error</div>);
  if (data) return (<div>Data</div>);
}
