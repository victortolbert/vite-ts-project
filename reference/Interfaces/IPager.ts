export default interface IPager {
  CurrentPage: number
  NextPage: string | null
  PageSize: number
  PreviousPage: string | null
  TotalCount: number
  TotalPages: number
}
