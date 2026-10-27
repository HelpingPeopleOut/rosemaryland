import type { Metadata } from "next";
import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Reveal } from "@/components/Reveal";
import { SiteShell } from "@/components/SiteShell";
import { FAQ } from "@/lib/products";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind RoseMaryLand. Crafting natural products for your skin and hair begins with a commitment to purity and quality.",
};

const STORY_INTRO =
  "Crafting natural products for your skin and hair begins with a commitment to purity and quality. We meticulously source the finest botanical ingredients, such as rose water, rosemary water, and lavender, known for their remarkable benefits. Our process begins by carefully selecting organic roses and rosemary, ensuring only the highest quality plants are used in our formulations.";

const STORY_ACCORDION = [
  {
    q: "How we distill botanicals",
    a: "Once harvested, the roses and rosemary undergo a gentle distillation process to extract their pure essences. This process preserves the potent antioxidants, vitamins, and minerals inherent in these botanicals, ensuring maximum benefits for your skin and hair.",
  },
  {
    q: "Upcoming lavender shampoo",
    a: "In our upcoming lavender shampoo, we're harnessing the power of lavender, renowned for its soothing and balancing properties. Lavender essential oil is carefully blended with other natural ingredients to create a luxurious shampoo that gently cleanses the hair and scalp while providing nourishment and hydration. Lavender oil is known for its calming aroma, which can help relax the mind and reduce stress levels. Additionally, lavender oil has antimicrobial properties, making it ideal for promoting scalp health and preventing dandruff.",
  },
  {
    q: "What you’ll feel with every wash",
    a: "With our lavender shampoo, you can enjoy the natural goodness of lavender while transforming your hair care routine into a spa-like experience. Each wash leaves your hair feeling soft, silky, and beautifully fragrant, while promoting overall scalp health and vitality. At Rose Maryland, we're dedicated to creating natural products that enhance your beauty and well-being. From rose water and rosemary water to our upcoming lavender shampoo, we invite you to experience the transformative power of nature in every bottle.",
  },
] as const;

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="page-x relative overflow-hidden pb-8 pt-12 sm:pb-10 sm:pt-16 md:pt-24">
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-mist/80 blur-3xl" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-display mb-2 text-xl tracking-tight text-rose sm:text-2xl md:text-3xl">
              {SITE.name}
            </p>
            <h1 className="font-display mb-3 text-[clamp(2rem,5vw,4rem)] leading-[1.08] tracking-tight text-forest sm:mb-4">
              Our Story
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-muted sm:text-base md:text-lg">
              Commitment to purity, quality, and the transformative power of
              nature.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="page-x mx-auto max-w-[1100px] pb-12 sm:pb-16">
        <Reveal>
          <div className="glass-strong grid items-center gap-8 rounded-[1.5rem] p-5 sm:gap-10 sm:rounded-[2rem] sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:p-12">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-full bg-rose/20 blur-2xl" />
                <Image
                  src={SITE.logo}
                  alt="Rose Maryland Logo"
                  width={360}
                  height={360}
                  className="relative h-auto w-full max-w-[200px] rounded-full object-cover shadow-[0_20px_50px_rgba(183,110,121,0.25)] ring-4 ring-white/70 sm:max-w-[280px] md:max-w-[320px]"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-display mb-4 text-2xl tracking-tight text-forest sm:mb-5 sm:text-3xl md:text-4xl">
                At Rose Maryland
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted sm:text-base">
                {STORY_INTRO}
              </p>
              <Accordion items={STORY_ACCORDION} plain defaultOpen={0} className="text-left" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="page-x pb-12 sm:pb-16">
        <Reveal>
          <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[1.5rem] bg-forest px-5 py-10 text-center text-white shadow-[0_28px_64px_rgba(30,47,24,0.25)] sm:rounded-[2rem] sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-rose/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-mist/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display mb-3 text-2xl tracking-tight sm:text-3xl md:text-4xl">
                Join the Community
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-sm text-white/80 sm:mb-8 sm:text-base">
                Sign up with your email address to receive news, exclusive
                updates, and early access to drops like our upcoming lavender
                shampoo!
              </p>
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="page-x mx-auto max-w-[900px] pb-16 sm:pb-20 md:pb-28">
        <Reveal>
          <h2 className="font-display mb-6 text-center text-2xl tracking-tight text-forest sm:mb-8 sm:text-3xl">
            Good to Know
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <Accordion items={FAQ} />
        </Reveal>
      </section>
    </SiteShell>
  );
}
