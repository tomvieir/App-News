import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';

async function buffer(readanle: Readable) {

    const chunks = []

    for await (const chunk of readanle) {
        chunks.push(
            typeof chunk === 'string' ? Buffer.from(chunk) : chunk
        )
    }

    return Buffer.concat(chunks)
}

export const config = {
    api: {
        bodyParser: false
    }
}





export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const buf = await buffer(req)

        

        res.status(200).json({ ok: true });
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}