import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    
    const contributionCount = await getContributionCount(userId as string);
    res.status(200).json({ count: contributionCount });
  } catch (error) {
    console.error("Error fetching contributions:", error);
    res.status(500).json({ error: "Failed to fetch contributions" });
  }
}

async function getContributionCount(userId: string): Promise<number> {
  return 259;
}
