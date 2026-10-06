import { useState } from "react";
import {
  Stethoscope, Baby, HeartPulse, Syringe, Microscope, ShieldCheck, Phone, Mail, MapPin,
  Clock, Menu, X, Star, CalendarCheck, Users, Award, CheckCircle2, ArrowRight, Heart,
} from "lucide-react";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: Stethoscope, title: "General Check-ups", desc: "Comprehensive physical exams and preventive care for every member of your family." },
  { icon: Baby, title: "Pediatrics", desc: "Gentle, attentive care for infants, children, and teens — from newborn visits to school physicals." },
  { icon: HeartPulse, title: "Chronic Care", desc: "Ongoing management of diabetes, hypertension, asthma, and other long-term conditions." },
  { icon: Syringe, title: "Vaccinations", desc: "Routine immunizations, flu shots, and travel vaccines to keep you protected year-round." },
  { icon: Microscope, title: "Lab & Diagnostics", desc: "On-site blood tests, screenings, and fast results so you get answers sooner." },
  { icon: ShieldCheck, title: "Women's Health", desc: "Prenatal care, wellness exams, and personalized support at every stage of life." },
];

const doctors = [
  { name: "Dr. Anika Narada", role: "Family Medicine · Founder", img: "https://images.pexels.com/photos/16552437/pexels-photo-16552437.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
  { name: "Dr. Minh Tran", role: "Internal Medicine", img: "https://images.pexels.com/photos/15962798/pexels-photo-15962798.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
  { name: "Dr. Grace Adeyemi", role: "Pediatrics", img: "https://images.pexels.com/photos/17829429/pexels-photo-17829429.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
];

const testimonials = [
  { name: "Sarah M.", text: "Dr. Narada has cared for our whole family for years. The staff remember our kids by name and always make us feel at home.", rating: 5 },
  { name: "James K.", text: "Booking was easy, the wait was short, and the doctor took real time to listen. It's rare to find a clinic this caring.", rating: 5 },
  { name: "Priya R.", text: "My daughter used to be terrified of doctors. Now she actually looks forward to her check-ups. Thank you, Narada team!", rating: 5 },
];

const hours = [
  ["Monday – Friday", "8:00 AM – 7:00 PM"],
  ["Saturday", "9:00 AM – 3:00 PM"],
  ["Sunday", "Closed"],
];

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-slate-600">{sub}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="hidden bg-teal-700 text-teal-50 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> (555) 123-4567</span>
            <span className="flex items-center gap-2"><Mail size={14} /> hello@naradaclinic.com</span>
          </div>
          <span className="flex items-center gap-2"><Clock size={14} /> Mon–Fri 8AM–7PM · Sat 9AM–3PM</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white"><Heart size={20} fill="currentColor" /></span>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-semibold text-slate-900">Narada</span>
            <span className="block text-xs font-medium uppercase tracking-widest text-teal-600">Medical Clinic</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-slate-600 transition hover:text-teal-600">{n.label}</a>
          ))}
        </nav>
        <a href="#appointment" className="hidden rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 lg:inline-flex">
          Book Appointment
        </a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 font-medium text-slate-700">{n.label}</a>
          ))}
          <a href="#appointment" onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-teal-600 px-5 py-3 text-center font-semibold text-white">Book Appointment</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-amber-50">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-teal-700 shadow-sm ring-1 ring-teal-100">
            <span className="h-2 w-2 rounded-full bg-teal-500" /> Accepting new patients
          </span>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
            Caring for your <span className="italic text-teal-600">family</span>, every step of the way.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            At Narada Medical Clinic, we provide compassionate, personalized healthcare for patients of all ages — from first steps to golden years.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#appointment" className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700">
              Book an Appointment <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:ring-teal-300">
              Our Services
            </a>
          </div>
          <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[["25+", "Years of care"], ["12k", "Happy patients"], ["4.9★", "Patient rating"]].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-3xl font-semibold text-slate-900">{n}</p>
                <p className="text-sm text-slate-500">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img src="https://images.pexels.com/photos/8460030/pexels-photo-8460030.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200" alt="Doctor with mother and child" className="h-[460px] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600"><CalendarCheck /></span>
            <div>
              <p className="font-semibold text-slate-900">Same-day visits</p>
              <p className="text-sm text-slate-500">Available most weekdays</p>
            </div>
          </div>
          <div className="absolute -right-4 top-8 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:flex">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600"><Users /></span>
            <div>
              <p className="font-semibold text-slate-900">All ages</p>
              <p className="text-sm text-slate-500">Kids to seniors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Our Services" title="Complete care under one roof" sub="From routine check-ups to managing ongoing conditions, our team is here for every health need your family has." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-3xl border border-slate-100 bg-slate-50/50 p-8 transition hover:-translate-y-1 hover:border-teal-100 hover:bg-white hover:shadow-xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
                <Icon size={26} />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600">{desc}</p>
              <a href="#appointment" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">Learn more <ArrowRight size={16} /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = ["Board-certified physicians", "Same-day & walk-in appointments", "Most insurance plans accepted", "Bilingual, friendly staff"];
  return (
    <section id="about" className="bg-teal-900 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.pexels.com/photos/8460049/pexels-photo-8460049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600" alt="Pediatric check-up" className="h-80 w-full rounded-3xl object-cover" />
          <img src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600" alt="Doctor consultation" className="mt-12 h-80 w-full rounded-3xl object-cover" />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-300">About Us</p>
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">A neighborhood clinic that treats you like family</h2>
          <p className="mt-6 text-teal-100/90">
            Founded in 1999, Narada Medical Clinic was built on a simple belief: great healthcare starts with genuine relationships. We take the time to know you, your history, and your goals — so we can care for the whole person, not just the symptoms.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3"><CheckCircle2 className="shrink-0 text-amber-300" size={20} /> {p}</li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-4 rounded-2xl bg-white/10 p-5">
            <Award className="text-amber-300" size={36} />
            <p className="text-sm text-teal-50">Recognized as <strong>Top Family Practice</strong> by the Regional Health Awards for five consecutive years.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Doctors() {
  return (
    <section id="doctors" className="bg-amber-50/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Our Team" title="Meet our doctors" sub="Experienced, compassionate physicians dedicated to your family's wellbeing." />
        <div className="grid gap-8 md:grid-cols-3">
          {doctors.map((d) => (
            <div key={d.name} className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-xl">
              <div className="overflow-hidden">
                <img src={d.img} alt={d.name} className="h-96 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-slate-900">{d.name}</h3>
                <p className="mt-1 text-sm font-medium text-teal-600">{d.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Testimonials" title="What our patients say" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-slate-100 bg-gradient-to-b from-teal-50/60 to-white p-8">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <blockquote className="mt-5 text-slate-700">“{t.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 font-semibold text-white">{t.name[0]}</span>
                <span className="font-semibold text-slate-900">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  const [sent, setSent] = useState(false);
  return (
    <section id="appointment" className="bg-gradient-to-br from-teal-600 to-teal-800 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
        <div className="text-white lg:col-span-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200">Appointments</p>
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">Book your visit today</h2>
          <p className="mt-5 text-teal-50/90">Fill out the form and our front desk will confirm your appointment within one business day. For urgent needs, please call us directly.</p>
          <div className="mt-8 space-y-4">
            {hours.map(([d, h]) => (
              <div key={d} className="flex justify-between border-b border-white/15 pb-3">
                <span>{d}</span><span className="font-semibold">{h}</span>
              </div>
            ))}
          </div>
          <a href="tel:5551234567" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/20">
            <Phone size={18} /> (555) 123-4567
          </a>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-2xl lg:col-span-3">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="text-teal-600" size={56} />
              <h3 className="mt-4 font-serif text-2xl font-semibold text-slate-900">Request received!</h3>
              <p className="mt-2 text-slate-600">Thank you. We'll contact you shortly to confirm your appointment.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-teal-600">Book another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5 sm:grid-cols-2">
              {[
                ["Full name", "text", "Jane Doe"],
                ["Phone", "tel", "(555) 000-0000"],
                ["Email", "email", "jane@example.com"],
                ["Preferred date", "date", ""],
              ].map(([label, type, ph]) => (
                <label key={label} className="block">
                  <span className="text-sm font-medium text-slate-700">{label}</span>
                  <input required type={type} placeholder={ph} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-slate-700">Service</span>
                <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100">
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-slate-700">Message (optional)</span>
                <textarea rows={4} placeholder="Tell us briefly about your visit..." className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
              </label>
              <button className="rounded-full bg-teal-600 px-6 py-4 font-semibold text-white transition hover:bg-teal-700 sm:col-span-2">Request Appointment</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: MapPin, title: "Visit us", text: "123 Wellness Avenue, Suite 200\nSpringfield, ST 12345" },
    { icon: Phone, title: "Call us", text: "(555) 123-4567\nAfter hours: (555) 123-4500" },
    { icon: Mail, title: "Email us", text: "hello@naradaclinic.com\nbilling@naradaclinic.com" },
  ];
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Contact" title="We're here to help" />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-slate-50 p-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white"><Icon /></span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 whitespace-pre-line text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl">
          <iframe title="Map" className="h-80 w-full grayscale-[30%]" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.135%2C51.505%2C-0.115%2C51.515&layer=mapnik" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white"><Heart size={20} fill="currentColor" /></span>
            <span className="font-serif text-xl font-semibold text-white">Narada Medical Clinic</span>
          </div>
          <p className="mt-4 max-w-sm">Compassionate, personalized healthcare for your whole family — today, tomorrow, and for years to come.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick links</h4>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-teal-400">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Hours</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {hours.map(([d, h]) => <li key={d}>{d}<br /><span className="text-slate-300">{h}</span></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Narada Medical Clinic. All rights reserved. · In an emergency, call 911.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
