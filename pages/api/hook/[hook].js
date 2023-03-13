// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const ids = req.query.hook.split(";")
  const serverId = ids[0];
  const hookId = ids[1];
  if(serverId == undefined || hookId == undefined) {
    res.status(200).json({ error: 'Webhook ID is not parsing correctly' })
  }
  res.status(200).json({ name: 'John Doe' })
}
