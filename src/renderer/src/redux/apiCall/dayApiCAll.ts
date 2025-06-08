import { TAppDispatch } from '@renderer/lib/types'
import { isAxiosError } from 'axios'
import {
  addDay,
  addStopedDay,
  setCurrentDay,
  setDays,
  setError,
  setPagination
} from '../slices/daySlice'
import { req } from '@renderer/lib/utils'
import { addToast } from '@heroui/react'

export const getLastDay =
  (setLoading: (value: boolean) => void, cb?: () => void) => async (dispatch: TAppDispatch) => {
    setLoading(true)
    try {
      dispatch(setCurrentDay(null))
      const response = await req.get('/days/last')
      if (response.status === 200) {
        dispatch(setCurrentDay(response.data.day))
        cb && cb()
      }
    } catch (error) {
      dispatch(setCurrentDay(null))
      if (isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 404) {
            dispatch(setError('Données non trouvées.'))
          } else if (error.response.status === 400) {
            dispatch(setError(error.response.data.message))
          } else {
            dispatch(setError(error.response.data.message || 'Erreur serveur.'))
          }
        } else {
          dispatch(setError('Erreur réseau : aucune réponse du serveur'))
        }
      } else {
        dispatch(setError('Erreur inconnue'))
      }
      console.log(error)
    } finally {
      setLoading && setLoading(false)
    }
  }
export const getDaysWithPaymentsMoneyCount =
  (
    setLoading: (value: boolean) => void,
    q: { rowsPerPage: string | undefined; dateFilter: Date | undefined; page: number | undefined },
    cb?: () => void
  ) =>
  async (dispatch: TAppDispatch) => {
    setLoading(true)
    try {
      dispatch(setDays(null))
      dispatch(setPagination(null))

      const response = await req.get(
        `/days/payments-money-count?rowsPerPage=${q.rowsPerPage}&dateFilter=${q.dateFilter}&page=${q.page}`
      )
      if (response.status === 200) {
        dispatch(setDays(response.data.days))
        dispatch(setPagination(response.data.pagination))
        cb && cb()
      }
    } catch (error) {
      dispatch(setDays(null))
      dispatch(setPagination(null))
      if (isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 404) {
            dispatch(setError('Données non trouvées.'))
          } else if (error.response.status === 400) {
            dispatch(setError(error.response.data.message))
          } else {
            dispatch(setError(error.response.data.message || 'Erreur serveur.'))
          }
        } else {
          dispatch(setError('Erreur réseau : aucune réponse du serveur'))
        }
      } else {
        dispatch(setError('Erreur inconnue'))
      }
      console.log(error)
    } finally {
      setLoading && setLoading(false)
    }
  }

export const createDay =
  (setLoading?: (value: boolean) => void, cb?: () => void) => async (dispatch: TAppDispatch) => {
    setLoading && setLoading(true)
    try {
      const response = await req.post('/days/start')
      if (response.status === 201) {
        dispatch(setCurrentDay(response.data.day))
        dispatch(addDay(response.data.day))

        addToast({
          title: 'Journée',
          description: response.data.message,
          color: 'success'
        })
        cb && cb()
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 404) {
            dispatch(setError('Données non trouvées.'))
          } else if (error.response.status === 400) {
            addToast({
              title: 'Ereur',
              description: error.response.data.message,
              color: 'danger'
            })
            //toast(error.response.data.message))
          } else {
            dispatch(setError(error.response.data.message || 'Erreur serveur.'))
          }
        } else {
          dispatch(setError('Erreur réseau : aucune réponse du serveur'))
        }
      } else {
        dispatch(setError('Erreur inconnue'))
      }
      console.log(error)
    } finally {
      setLoading && setLoading(false)
    }
  }
export const stopeDay =
  (id: number, setLoading?: (value: boolean) => void, cb?: () => void) =>
  async (dispatch: TAppDispatch) => {
    setLoading && setLoading(true)
    try {
      const response = await req.put(`/days/stop/${id}`)
      if (response.status === 200) {
        dispatch(setCurrentDay(null))
        dispatch(addStopedDay(response.data.day))
        addToast({
          title: 'Journée',
          description: response.data.message,
          color: 'success'
        })
        cb && cb()
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 404) {
            dispatch(setError('Données non trouvées.'))
          } else if (error.response.status === 400) {
            addToast({
              title: 'Ereur',
              description: error.response.data.message,
              color: 'danger'
            })
            //toast(error.response.data.message))
          } else {
            dispatch(setError(error.response.data.message || 'Erreur serveur.'))
          }
        } else {
          dispatch(setError('Erreur réseau : aucune réponse du serveur'))
        }
      } else {
        dispatch(setError('Erreur inconnue'))
      }
      console.log(error)
    } finally {
      setLoading && setLoading(false)
    }
  }
