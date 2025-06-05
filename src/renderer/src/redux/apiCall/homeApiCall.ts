import { Dispatch } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { setError, setSummary } from '../slices/homeSLice'
import { TAppDispatch } from '@renderer/lib/types'
import { req } from '@renderer/lib/utils'

export const getHomeData = async (
  dispatch: TAppDispatch,
  setLoading?: (loading: boolean) => void
) => {
  setLoading && setLoading(true)
  try {
    await Promise.all([dispatch(getSummary())])
  } catch (error) {
    dispatch(setSummary(null))
    if (isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 404) {
          dispatch(setError('Données non trouvées.'))
        } else {
          dispatch(setError(error.response.data.message || 'Erreur serveur.'))
        }
      } else {
        dispatch(setError('Erreur réseau : aucune réponse du serveur'))
      }
    } else {
      dispatch(setError('Erreur inconnue'))
    }
  } finally {
    setLoading && setLoading(false)
  }
}

export const getSummary = (cb?: () => void) => async (dispatch: TAppDispatch) => {
  await new Promise((reslv) => setTimeout(reslv, 5000))
  const result = await req.get('/home/summary')
  if (result.status === 200) {
    dispatch(setSummary(result.data))
    cb && cb()
  }
}
