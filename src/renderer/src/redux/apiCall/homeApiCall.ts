import { isAxiosError } from 'axios'
import {
  setError,
  setSummary,
  setTopPopularDeleverys,
  setTopPopularOffers,
  setTopPopularProducts,
  setYears
} from '../slices/homeSLice'
import { TAppDispatch } from '@renderer/lib/types'
import { req } from '@renderer/lib/utils'

export const getHomeData = async (
  dispatch: TAppDispatch,
  year?: number,
  setLoading?: (loading: boolean) => void
) => {
  setLoading && setLoading(true)
  try {
    await Promise.all([
      dispatch(getSummary(year)),
      dispatch(getTopPopularProducts(year)),
      dispatch(getTopPopularOffers(year)),
      dispatch(getTopRankingDeleverys(year)),
      dispatch(getYears())
    ])
  } catch (error) {
    dispatch(setSummary(null))
    dispatch(setTopPopularProducts(null))
    dispatch(setTopPopularOffers(null))
    dispatch(setTopPopularDeleverys(null))
    dispatch(setYears(null))
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

export const getSummary =
  (year?: number, cb?: () => void | undefined) => async (dispatch: TAppDispatch) => {
    // await new Promise((reslv) => setTimeout(reslv, 2000))
    const result = await req.get(`/home/summary?year=${year}`)
    if (result.status === 200) {
      dispatch(setSummary(result.data))
      cb && cb()
    }
  }

export const getTopPopularProducts =
  (year?: number, cb?: () => void | undefined) => async (dispatch: TAppDispatch) => {
    //   await new Promise((reslv) => setTimeout(reslv, 2000))
    const result = await req.get(`/home/popular-products?year=${year}`)
    if (result.status === 200) {
      dispatch(setTopPopularProducts(result.data))
      cb && cb()
    }
  }

export const getTopPopularOffers =
  (year?: number, cb?: () => void) => async (dispatch: TAppDispatch) => {
    const result = await req.get(`/home/popular-offers?year=${year}`)
    if (result.status === 200) {
      dispatch(setTopPopularOffers(result.data))
      cb && cb()
    }
  }

export const getTopRankingDeleverys =
  (year?: number, cb?: () => void) => async (dispatch: TAppDispatch) => {
    const result = await req.get(`/home/popular-deleverys?year=${year}`)
    if (result.status === 200) {
      dispatch(setTopPopularDeleverys(result.data))
      cb && cb()
    }
  }
export const getYears = (cb?: () => void) => async (dispatch: TAppDispatch) => {
  const result = await req.get(`/home/years`)
  if (result.status === 200) {
    dispatch(setYears(result.data))
    cb && cb()
  }
}
