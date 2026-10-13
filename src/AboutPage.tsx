export function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(249,240,235,0.95),_rgba(233,214,201,0.8))] p-8 dark:bg-[radial-gradient(circle_at_top,_rgba(37,28,25,0.96),_rgba(24,17,15,0.96))]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efc9b0]">Our story</p>
        <h1 className="mt-4 font-serif text-5xl text-[#2b1f1b] dark:text-[#f9efe8]">A brand shaped by modern femininity.</h1>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-[#ead8cf] bg-[#fffaf7] p-8 dark:border-[#392d2a] dark:bg-[#1d1716]">
          <p className="text-base leading-8 text-[#4d3c38] dark:text-[#eed7c7]">
            Kittu Studio began with a simple idea: luxury should feel deeply personal and effortlessly wearable. Every design is created to move with a woman through her daily rhythm — whether she is navigating a workday, a celebratory evening, or a weekend escape.
          </p>
          <p className="mt-6 text-base leading-8 text-[#4d3c38] dark:text-[#eed7c7]">
            We blend thoughtful craftsmanship, premium materials, and understated glamour to create handbags that feel elevated without ever trying too hard.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80"
          alt="Luxury handbag concept"
          className="h-full min-h-[320px] w-full rounded-[32px] object-cover"
        />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Mission',
            text: 'To design beautifully functional handbags that celebrate confidence, softness, and modern elegance.',
          },
          {
            title: 'Quality commitment',
            text: 'We source premium materials and refine every detail so each piece delivers enduring beauty.',
          },
          {
            title: 'Sustainability',
            text: 'We design with longevity in mind and prioritize responsible sourcing and timeless silhouettes.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-[#ead8cf] bg-[#fffaf7] p-6 dark:border-[#392d2a] dark:bg-[#1d1716]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a57b68] dark:text-[#efd0b2]">Kittu values</p>
            <h2 className="mt-4 font-serif text-4xl text-[#2d201b] dark:text-[#f9efe8]">{item.title}</h2>
            <p className="mt-4 text-base leading-8 text-[#544540] dark:text-[#ecd5c4]">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[32px] bg-[#f5e9df] p-8 dark:bg-[#1a1413]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Our craft</p>
        <h2 className="mt-4 font-serif text-5xl text-[#2d201b] dark:text-[#f9efe8]">Luxury craftsmanship in every stitch.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[26px] bg-white p-6 dark:bg-[#231d1b]">
            <p className="text-lg leading-8 text-[#4c3a35] dark:text-[#f0dac8]">
              Our team studies silhouettes, textures, and finishes with the same care as couture ateliers. Each handbag is shaped to feel distinctly feminine while staying practical for real life.
            </p>
          </div>
          <div className="rounded-[26px] bg-white p-6 dark:bg-[#231d1b]">
            <p className="text-lg leading-8 text-[#4c3a35] dark:text-[#f0dac8]">
              From polished gold hardware to softly structured forms, every element is selected to balance statement-making design with long-term wearability.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
