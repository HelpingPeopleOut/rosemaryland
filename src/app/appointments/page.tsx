import type { Metadata } from "next";
import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SiteShell } from "@/components/SiteShell";
import { APPOINTMENT_FAQ, IMAGES } from "@/lib/products";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Haircare Appointments",
  description:
    "Professional Hair Stylist in Pasadena and Victorville California. Haircuts are essential for maintaining healthy hair, trimming split ends, and promoting overall hair health.",
};

export default function AppointmentsPage() {
  return (
    <SiteShell ctaHref="#booking" ctaLabel="Book Now">
      <section className="page-x relative overflow-hidden pb-8 pt-12 sm:pb-10 sm:pt-16 md:pt-24">
        <div className="pointer-events-none absolute left-10 top-20 h-56 w-56 rounded-full bg-mist blur-3xl" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-display mb-2 text-xl tracking-tight text-rose sm:text-2xl md:text-3xl">
              {SITE.name}
            </p>
            <h1 className="font-display mb-3 text-[clamp(2rem,5vw,4rem)] leading-[1.08] tracking-tight text-forest sm:mb-4">
              Revamp Your Look
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-muted sm:text-base md:text-lg">
              Professional Hair Stylist based in Pasadena and Victorville,
              California.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="page-x mx-auto max-w-[1200px] pb-12 sm:pb-16">
        <Reveal>
          <div className="glass-strong grid overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:grid-cols-2">
            <div className="relative aspect-[4/3] min-h-[220px] sm:aspect-auto sm:min-h-[320px] md:min-h-full md:aspect-auto">
              <Image
                src={IMAGES.appointments}
                alt="Professional hair styling setup"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10">
              <h2 className="font-display mb-3 text-2xl tracking-tight text-forest sm:mb-4 sm:text-3xl md:text-4xl">
                Experience the Magic of Hair Transformation
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-muted sm:mb-4 sm:text-base">
                Haircuts are essential for maintaining healthy hair. Trimming
                split ends and removing damaged sections prevent further
                breakage and promote overall hair health. This maintenance
                ensures that your hair remains strong, vibrant, and manageable,
                which is crucial for everyday styling.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-muted sm:mb-8 sm:text-base">
                Indulge in our premium services tailored to your specific needs.
                Experience the magic of hair transformation with us, where every
                strand tells a story of beauty and rejuvenation.
              </p>
              <Button href="#booking" variant="primary" arrow className="self-start">
                View Schedule Below
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="page-x mx-auto max-w-[900px] pb-10 sm:pb-12">
        <Reveal>
          <h2 className="font-display mb-5 text-center text-2xl tracking-tight text-forest sm:mb-6 sm:text-3xl">
            Appointment Essentials
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <Accordion items={APPOINTMENT_FAQ} />
        </Reveal>
      </section>

      <section id="booking" className="page-x scroll-mt-24 pb-16 sm:pb-20 md:pb-28">
        <Reveal>
          <div className="glass-strong mx-auto max-w-[1100px] rounded-[1.5rem] border-t-4 border-t-rose/70 p-4 sm:rounded-[2rem] sm:p-8 md:p-10">
            <div className="mx-auto mb-6 max-w-xl text-center sm:mb-8">
              <h2 className="font-display mb-3 text-2xl tracking-tight text-forest sm:text-3xl md:text-4xl">
                Schedule Your Appointment
              </h2>
              <p className="text-sm text-muted sm:text-base">
                Select a service, date, and time that works best for you. We look
                forward to helping you achieve your healthiest, most vibrant
                hair.
              </p>
            </div>
            <div className="-mx-1 overflow-x-auto rounded-[1rem] border border-[rgba(30,47,24,0.08)] bg-white/60 sm:mx-0 sm:rounded-[1.25rem]">
              <iframe
                src={SITE.calendarEmbed}
                title="Book a RoseMaryLand hair appointment"
                className="booking-frame min-w-[280px]"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
