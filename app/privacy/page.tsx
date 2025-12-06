import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — GenXora",
  description: "Privacy Policy for GenXora",
}

export default function PrivacyPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            Privacy Policy content will be added here. This is a placeholder
            page.
          </p>
        </div>
      </div>
    </div>
  )
}

