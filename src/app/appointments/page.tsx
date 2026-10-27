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
      <section className="relative overflow-hidden px-[5%] pt-16 pb-10 md:pt-24">
        <div className="pointer-events-none absolute left-10 top-20 h-56 w-56 rounded-full bg-mist blur-3xl" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl sm:text-3xl text-rose mb-2 tracking-tight">
              {SITE.name}
            </p>
            <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] text-forest tracking-tight leading-[1.08] mb-4">
              Revamp Your Look
            </h1>
            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
              Professional Hair Stylist based in Pasadena and Victorville,
              California.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1200px] px-[5%] pb-16">
        <Reveal>
          <div className="glass-strong rounded-[2rem] overflow-hidden grid md:grid-cols-2">
            <div className="relative min-h-[320px] md:min-h-full">
              <Image
                src={IMAGES.appointments}
                alt="Professional hair styling setup"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-10 flex flex-col justify-center">
              <h2 className="font-display text-3xl sm:text-4xl text-forest tracking-tight mb-4">
                Experience the Magic of Hair Transformation
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Haircuts are essential for maintaining healthy hair. Trimming
                split ends and removing damaged sections prevent further
                breakage and promote overall hair health. This maintenance
                ensures that your hair remains strong, vibrant, and manageable,
                which is crucial for everyday styling.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Indulge in our premium services tailored to your specific needs.
                Experience the magic of hair transformation with us, where every
                strand tells a story of beauty and rejuvenation.
              </p>
              <Button href="#booking" variant="primary" arrow>
                View Schedule Below
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[900px] px-[5%] pb-12">
        <Reveal>
          <h2 className="font-display text-3xl text-forest text-center tracking-tight mb-6">
            Appointment Essentials
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <Accordion items={APPOINTMENT_FAQ} />
        </Reveal>
      </section>

      <section id="booking" className="scroll-mt-24 px-[5%] pb-20 md:pb-28">
        <Reveal>
          <div className="glass-strong mx-auto max-w-[1100px] rounded-[2rem] p-6 sm:p-10 border-t-4 border-t-rose/70">
            <div className="text-center mb-8 max-w-xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl text-forest tracking-tight mb-3">
                Schedule Your Appointment
              </h2>
              <p className="text-muted">
                Select a service, date, and time that works best for you. We look
                forward to helping you achieve your healthiest, most vibrant
                hair.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.25rem] border border-[rgba(30,47,24,0.08)] bg-white/60">
              <iframe
                src={SITE.calendarEmbed}
                title="Book a RoseMaryLand hair appointment"
                className="w-full border-0"
                style={{ height: 650 }}
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
