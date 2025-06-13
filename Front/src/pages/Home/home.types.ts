export interface ISupportPaginatedResponse<T> {
  count: number
  next: string | number
  previous: string | number
  results: T[]
}

export interface IMaster {
  id: number
  name: string
  image: string
}
