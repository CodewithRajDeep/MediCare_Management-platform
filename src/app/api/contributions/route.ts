import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const contributionCount = await getContributionCount(userId);
    return NextResponse.json({ count: contributionCount });
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return NextResponse.json({ error: "Failed to fetch contributions" }, { status: 500 });
  }
}

async function getContributionCount(userId: string): Promise<number> {
  
  return 259;
}
