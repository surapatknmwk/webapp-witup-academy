export const toMins = (t: string) => {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}

export const statusClass = (status?: string) => {
  if (status === 'A') return 'ev-attended'
  if (status === 'C') return 'ev-cancelled'
  return 'ev-scheduled'
}

export const statusLabel = (status?: string) => {
  if (status === 'A') return 'เรียนแล้ว'
  if (status === 'C') return 'ยกเลิก'
  return 'กำหนดการ'
}
