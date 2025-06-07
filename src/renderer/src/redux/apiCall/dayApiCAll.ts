import { TAppDispatch } from '@renderer/lib/types'
import { isAxiosError } from 'axios'
import { setCurrentDay, setError } from '../slices/daySlice'
import { req } from '@renderer/lib/utils'
import { addToast } from '@heroui/react'

export const getDaysData = async (
  dispatch: TAppDispatch,
  setLoading?: (value: boolean) => void
) => {
  setLoading && setLoading(true)
  try {
    await new Promise((res) => setTimeout(res, 2000))
    await Promise.all([dispatch(getLastDay())])
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

export const getLastDay = (cb?: () => void) => async (dispatch: TAppDispatch) => {
  dispatch(setCurrentDay(null))
  const response = await req.get('/days/last')
  if (response.status === 200) {
    dispatch(setCurrentDay(response.data.day))
    cb && cb()
  }
}

export const createDay =
  (setLoading?: (value: boolean) => void, cb?: () => void) => async (dispatch: TAppDispatch) => {
    setLoading && setLoading(true)
    try {
      const response = await req.post('/days/start')
      if (response.status === 201) {
        dispatch(setCurrentDay(response.data.day))
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
              description:  error.response.data.message,
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
        addToast({
          title: 'Journée',
          description: response.data.message,
          color: 'success',
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
