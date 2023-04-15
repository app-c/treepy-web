/* eslint-disable camelcase */
import React from 'react'
import { api } from '../services/api'
import { useQuery } from 'react-query'

export function useParc(value: number) {
  const appId = ''
  const brand = ''

  const session = useQuery('calcule', async () => {
    const data = await api.get(`pay-pag/session/`)

    return data.data
  })

  const session_id = session.data?.id

  console.log(session_id)

  // const { brand, isLoading, isError, refetch } = useQuery(
  //   'calcule',
  //   async () => {
  //     const data = await api.get(`pay-pag/parc/${value}`)
  //     return data.data
  //   },
  // )

  // const { parc, isLoading, isError, refetch } = useQuery(
  //   'calcule',
  //   async () => {
  //     const data = await api.get(`pay-pag/parc/${value}`)
  //     return data.data
  //   },
  // )

  return {
    session,
  }
}
