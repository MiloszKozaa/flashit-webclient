export type Response<TData> = {
  status: number,
  data: TData,
  error: string
}