export interface RootL {
  info: InfoL
  results: ResultL[]
}

export interface InfoL {
  count: number
  pages: number
  next: string
  prev: any
}

export interface ResultL {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}
