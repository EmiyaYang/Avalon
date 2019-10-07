export function timelineSerial(list) {
  if (!Array.isArray(list)) throw new TypeError('array required!')

  const timelineMap = {}

  try {
    list.forEach((item) => {
      if (!item.createdAt) throw new TypeError('createdAt required!')
      const date = new Date(item.createdAt)

      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()

      if (!timelineMap[year]) timelineMap[year] = {}

      if (!timelineMap[year][month]) timelineMap[year][month] = {}

      timelineMap[year][month][day] = item
    })
  } catch (e) {
    throw new Error(e)
  }

  return timelineMap
}
