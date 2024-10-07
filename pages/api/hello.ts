// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * Represents the structure of the data returned by the API
 *
 * @property name - The name of the data entity
 */
type Data = {
    name: string
}

/**
 * Handles the API request and sends a JSON response.
 * @param req - The NextApiRequest object representing the incoming request.
 * @param res - The NextApiResponse object representing the outgoing response.
 */
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.status(200).json({ name: 'Lorem Ipsum' })
}
