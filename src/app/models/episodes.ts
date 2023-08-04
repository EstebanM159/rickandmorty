export interface RootE {
  info: InfoE
  results: ResultE[]
}

export interface InfoE {
  count: number
  pages: number
  next: string
  prev: any
}

export interface ResultE {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}
