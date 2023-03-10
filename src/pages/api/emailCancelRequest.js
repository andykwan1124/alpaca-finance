import { emailCancelRequest } from '@/utilities/bullmq'

export default async function handler(req, res) {
  const { isSuccessful, error } = await emailCancelRequest('woody.andygrant@gmail.com', 'Andy', 100)

  if (!isSuccessful) {
    console.error(`emailCancelRequest: ${JSON.stringify(error)}`)
    return res.status(500).json({ error: error })
  }

  console.log(`Successfully scheduled email job: emailCancelRequest.`)
  res.status(200).json({ data: { isSuccessful } })
}
