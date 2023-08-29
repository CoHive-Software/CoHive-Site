import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { content } = req.body;

  const discordWebhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

  if (!discordWebhookUrl) {
    return res.status(500).json({ error: 'Discord webhook URL is not defined' });
  }

  try {
    const response = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Message sent successfully' });
    } else {
      return res.status(500).json({ error: 'Failed to send message' });
    }
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
