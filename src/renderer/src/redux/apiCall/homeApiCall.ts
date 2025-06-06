import { isAxiosError } from 'axios'
import {
  setError,
  setSummary,
  setTopPopularOffers,
  setTopPopularProducts
} from '../slices/homeSLice'
import { TAppDispatch } from '@renderer/lib/types'
import { req } from '@renderer/lib/utils'

export const getHomeData = async (
  dispatch: TAppDispatch,
  setLoading?: (loading: boolean) => void
) => {
  setLoading && setLoading(true)
  try {
    await Promise.all([
      dispatch(getSummary()),
      dispatch(getTopPopularProducts()),
      dispatch(getTopPopularOffers())
    ])
  } catch (error) {
    dispatch(setSummary(null))
    dispatch(setTopPopularProducts(null))
    dispatch(setTopPopularOffers(null))
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
    console.log(error)
  } finally {
    setLoading && setLoading(false)
  }
}

export const getSummary = (cb?: () => void) => async (dispatch: TAppDispatch) => {
  //   await new Promise((reslv) => setTimeout(reslv, 2000))
  const result = await req.get('/home/summary')
  if (result.status === 200) {
    dispatch(setSummary(result.data))
    cb && cb()
  }
}

export const getTopPopularProducts = (cb?: () => void) => async (dispatch: TAppDispatch) => {
  //   await new Promise((reslv) => setTimeout(reslv, 2000))
  const result = await req.get('/home/popular-products')
  if (result.status === 200) {
    dispatch(setTopPopularProducts(result.data))
    cb && cb()
  }
}

export const getTopPopularOffers = (cb?: () => void) => async (dispatch: TAppDispatch) => {
  const result = await req.get('/home/popular-offers')
  if (result.status === 200) {
    console.log(result.data)
    dispatch(setTopPopularOffers(result.data))
    cb && cb()
  }
}
