export default defineEventHandler(async (event) => {
  const { page } = getQuery(event)
  const fetch_response = await fetch(`https://api.fundhot.com/api/forum/topics/new/43?page=${ page }`)
  const data = await fetch_response.json()
  return data.data
})
