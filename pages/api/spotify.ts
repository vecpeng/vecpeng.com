import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
      res.status(200).json({ name: 'John Doe' })
    }
    res.status(200).json({ name: 'John Doe' })
  }


export default handler
  