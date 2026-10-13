export function ContactPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
      <section className="rounded-[32px] border border-[#ead8cf] bg-[#fffaf7] p-7 dark:border-[#392d2a] dark:bg-[#1d1716]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Get in touch</p>
        <h1 className="mt-4 font-serif text-5xl text-[#2d201b] dark:text-[#f9efe8]">We’d love to hear from you.</h1>

        <form className="mt-8 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <input type="text" placeholder="Your name" className="h-14 rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
            <input type="email" placeholder="Email address" className="h-14 rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          </div>
          <input type="text" placeholder="Subject" className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          <textarea rows={5} placeholder="Your message" className="w-full rounded-[24px] border border-[#ead7cb] bg-white p-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          <button type="button" className="rounded-full bg-[#201814] px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f9efe8] dark:bg-[#f4e9de] dark:text-[#201814]">
            Send message
          </button>
        </form>
      </section>

      <aside className="space-y-6">
        <div className="rounded-[32px] border border-[#ead8cf] bg-[#f8f0eb] p-7 dark:border-[#392d2a] dark:bg-[#1c1715]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Contact details</p>
          <div className="mt-5 space-y-5 text-[#4f3d38] dark:text-[#eed7c7]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#7a6157] dark:text-[#d7b7a1]">Email</p>
              <p className="mt-2 text-lg">hello@kittustudio.com</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#7a6157] dark:text-[#d7b7a1]">Phone</p>
              <p className="mt-2 text-lg">+91 98765 43210</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#7a6157] dark:text-[#d7b7a1]">Instagram</p>
              <p className="mt-2 text-lg">@kittustudio</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-[#ead8cf] bg-[#fffaf7] dark:border-[#392d2a] dark:bg-[#1d1716]">
          <div className="h-72 w-full bg-[radial-gradient(circle_at_center,_rgba(214,173,148,0.17),_rgba(240,233,228,0.8)_55%,_rgba(255,255,255,0.9))] dark:bg-[radial-gradient(circle_at_center,_rgba(146,109,87,0.17),_rgba(46,35,30,0.9)_55%,_rgba(20,17,16,0.9))] p-6">
            <div className="flex h-full items-center justify-center rounded-[24px] border border-dashed border-[#d9c1b0] text-center text-[#4b3a35] dark:border-[#524038] dark:text-[#f2dcc9]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em]">Google map</p>
                <p className="mt-3 text-2xl font-semibold">Kittu Studio</p>
                <p className="mt-2 text-sm">Banjara Hills, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
