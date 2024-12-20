import { SiteFooter } from "@/components/shared/site-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 p-4">{children}</main>
      <SiteFooter />
    </div>
  )
}
