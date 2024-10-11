export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const fetch_response = await fetch(`https://api.fundhot.com/api/forum/${ id }?page=1`)
  const res = await fetch_response.json()
  return res
})
