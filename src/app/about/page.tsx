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

const STORY = [
  "Crafting natural products for your skin and hair begins with a commitment to purity and quality. We meticulously source the finest botanical ingredients, such as rose water, rosemary water, and lavender, known for their remarkable benefits. Our process begins by carefully selecting organic roses and rosemary, ensuring only the highest quality plants are used in our formulations.",
  "Once harvested, the roses and rosemary undergo a gentle distillation process to extract their pure essences. This process preserves the potent antioxidants, vitamins, and minerals inherent in these botanicals, ensuring maximum benefits for your skin and hair.",
  "In our upcoming lavender shampoo, we're harnessing the power of lavender, renowned for its soothing and balancing properties. Lavender essential oil is carefully blended with other natural ingredients to create a luxurious shampoo that gently cleanses the hair and scalp while providing nourishment and hydration.",
  "The benefits of lavender shampoo extend beyond cleansing. Lavender oil is known for its calming aroma, which can help relax the mind and reduce stress levels. Additionally, lavender oil has antimicrobial properties, making it ideal for promoting scalp health and preventing dandruff.",
  "With our lavender shampoo, you can enjoy the natural goodness of lavender while transforming your hair care routine into a spa-like experience. Each wash leaves your hair feeling soft, silky, and beautifully fragrant, while promoting overall scalp health and vitality.",
  "At Rose Maryland, we're dedicated to creating natural products that enhance your beauty and well-being. From rose water and rosemary water to our upcoming lavender shampoo, we invite you to experience the transformative power of nature in every bottle.",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden px-[5%] pt-16 pb-10 md:pt-24">
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-mist/80 blur-3xl" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl sm:text-3xl text-rose mb-2 tracking-tight">
              {SITE.name}
            </p>
            <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] text-forest tracking-tight leading-[1.08] mb-4">
              Our Story
            </h1>
            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
              Commitment to purity, quality, and the transformative power of
              nature.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1100px] px-[5%] pb-16">
        <Reveal>
          <div className="glass-strong rounded-[2rem] p-6 sm:p-10 md:p-12 grid gap-10 md:grid-cols-[0.85fr_1.15fr] items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-rose/20 blur-2xl scale-110" />
                <Image
                  src={SITE.logo}
                  alt="Rose Maryland Logo"
                  width={360}
                  height={360}
                  className="relative h-auto w-full max-w-[280px] sm:max-w-[320px] rounded-full object-cover shadow-[0_20px_50px_rgba(183,110,121,0.25)] ring-4 ring-white/70"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-forest tracking-tight mb-5">
                At Rose Maryland
              </h2>
              <div className="space-y-4">
                {STORY.map((para) => (
                  <p key={para.slice(0, 40)} className="text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-[5%] pb-16">
        <Reveal>
          <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[2rem] bg-forest px-6 py-14 sm:px-12 text-center text-white shadow-[0_28px_64px_rgba(30,47,24,0.25)]">
            <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-rose/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-mist/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-3">
                Join the Community
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Sign up with your email address to receive news, exclusive
                updates, and early access to drops like our upcoming lavender
                shampoo!
              </p>
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[900px] px-[5%] pb-20 md:pb-28">
        <Reveal>
          <h2 className="font-display text-3xl text-forest text-center tracking-tight mb-8">
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
