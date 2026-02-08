import Image from "next/image";

export function GraphiDrawDemo() {
  return (
    <section id="demo" className="border-y bg-muted/30 py-20">
      <div className="">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            See GraphiDraw in Action
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            A clean, collaborative canvas built for sketching ideas together
            in real time.
          </p>

          <div className="relative overflow-hidden rounded-xl border bg-background shadow-2xl">
            <Image
              src="/images/products/Graphidraw.png"
              alt="GraphiDraw canvas preview"
              width={1200}
              height={800}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
