import { GLBViewer } from "@/components/glb-container"

import { configs } from "./configs"

export default async function IndexPage() {
  return (
    <section className="flex w-full items-center justify-center gap-4">
      {configs.map((data) => (
        <div className="relative w-full max-w-lg rounded-lg border bg-secondary p-2">
          <div className="m-4 mb-12 rounded border bg-background">
            <GLBViewer url={data.url} />
          </div>
          <p className="absolute bottom-4 left-4 font-heading text-lg">
            {data.name}
          </p>
        </div>
      ))}
    </section>
  )
}
