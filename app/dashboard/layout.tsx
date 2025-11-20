import { ReactNode } from 'react';

// Force dynamic rendering and no caching for dashboard
// This ensures demo.kisag.co always gets fresh content, not cached responses
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Explicit cache control headers
export async function generateMetadata() {
  return {
    title: 'Kern Irrigation AI Dashboard',
    description: 'Real-Time Precision Irrigation Intelligence',
  };
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return children;
}
