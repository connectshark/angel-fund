export default defineEventHandler(async (event) => {
  const fetch_response = await fetch(`https://api.fundhot.com/api/index/topicList`)
  const data = await fetch_response.json()
  return data.data
})
