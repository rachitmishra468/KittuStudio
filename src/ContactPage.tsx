import { useState, type FormEvent } from 'react'

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error'

const EMAILJS_SERVICE_ID = 'service_l798hnr'
const EMAILJS_TEMPLATE_ID = 'template_wva6c19'
const EMAILJS_PUBLIC_KEY = 'B9__lRBTGSP4dcGhU'

export function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle')
  const [submissionError, setSubmissionError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmissionStatus('sending')
    setSubmissionError('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const templateParams = {
      from_name: String(formData.get('name') ?? ''),
      from_email: String(formData.get('email') ?? ''),
      reply_to: String(formData.get('email') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams,
        }),
      })

      if (!response.ok) {
        const details = await response.text()
        throw new Error(details || `Email service returned ${response.status}`)
      }

      setSubmissionStatus('success')
      form.reset()
    } catch (error) {
      setSubmissionStatus('error')
      setSubmissionError(
        error instanceof TypeError && error.message === 'Failed to fetch'
          ? `EmailJS could not be reached. Add this site origin (${window.location.origin}) in EmailJS → Account → Security → Allowed Origins, then reload and try again.`
          : error instanceof Error
            ? error.message
            : 'Unable to send your message. Please try again.',
      )
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
      <section className="rounded-[32px] border border-[#ead8cf] bg-[#fffaf7] p-7 dark:border-[#392d2a] dark:bg-[#1d1716]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Get in touch</p>
        <h1 className="mt-4 font-serif text-5xl text-[#2d201b] dark:text-[#f9efe8]">We’d love to hear from you.</h1>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <input name="name" type="text" placeholder="Your name" required className="h-14 rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
            <input name="email" type="email" placeholder="Email address" required className="h-14 rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          </div>
          <input name="subject" type="text" placeholder="Subject" required className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          <textarea name="message" rows={5} placeholder="Your message" required className="w-full rounded-[24px] border border-[#ead7cb] bg-white p-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          <button type="submit" disabled={submissionStatus === 'sending'} className="rounded-full bg-[#201814] px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f9efe8] disabled:cursor-wait disabled:opacity-60 dark:bg-[#f4e9de] dark:text-[#201814]">
            {submissionStatus === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {submissionStatus === 'success' && <p role="status" className="text-sm text-green-700 dark:text-green-400">Your message has been sent. We&apos;ll get back to you soon.</p>}
          {submissionStatus === 'error' && <p role="alert" className="text-sm text-red-700 dark:text-red-400">Could not send your message: {submissionError}</p>}
        </form>
      </section>

      <aside className="space-y-6">
        <div className="rounded-[32px] border border-[#ead8cf] bg-[#f8f0eb] p-7 dark:border-[#392d2a] dark:bg-[#1c1715]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Contact details</p>
          <div className="mt-5 space-y-5 text-[#4f3d38] dark:text-[#eed7c7]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#7a6157] dark:text-[#d7b7a1]">Email</p>
              <a href="mailto:kittustudiocustomercare@gmail.com" className="mt-2 inline-block text-lg hover:underline">kittustudiocustomercare@gmail.com</a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#7a6157] dark:text-[#d7b7a1]">Phone</p>
              <a href="tel:+918953292249" className="mt-2 inline-block text-lg hover:underline">+91 8953292249</a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#7a6157] dark:text-[#d7b7a1]">Instagram</p>
              <a href="https://www.instagram.com/kittu.studio?vrfl=bjI5NTU0cTVmdTd2" target="_blank" rel="noreferrer" className="mt-2 inline-block text-lg hover:underline">@kittu.studio</a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-[#ead8cf] bg-[#fffaf7] dark:border-[#392d2a] dark:bg-[#1d1716]">
          <div className="h-72 w-full bg-[radial-gradient(circle_at_center,_rgba(214,173,148,0.17),_rgba(240,233,228,0.8)_55%,_rgba(255,255,255,0.9))] dark:bg-[radial-gradient(circle_at_center,_rgba(146,109,87,0.17),_rgba(46,35,30,0.9)_55%,_rgba(20,17,16,0.9))] p-6">
            <div className="flex h-full items-center justify-center rounded-[24px] border border-dashed border-[#d9c1b0] text-center text-[#4b3a35] dark:border-[#524038] dark:text-[#f2dcc9]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em]">Google map</p>
                <p className="mt-3 text-2xl font-semibold">Kittu Studio</p>
                <p className="mt-2 text-sm">Gola Main Road, Lucknow</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
