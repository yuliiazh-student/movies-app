import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useGeneralStorage = create(devtools((set) => ({
  isAuth: false,
  genres: {movies: [], tv: []},
  setIsAuth: (param)=>set({isAuth: param}),
  setGenres: (param)=>set({genres: param})
})))