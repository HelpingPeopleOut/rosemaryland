import { SITE } from "@/lib/site";
import { Button } from "./Button";

export function NewsletterForm() {
  return (
    <form
      action={`https://formsubmit.co/${SITE.email.orders}`}
      method="POST"
      className="mx-auto w-full max-w-lg"
    >
      <input type="hidden" name="_cc" value={SITE.email.support} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="RoseMaryLand Newsletter Signup" />
      <input type="hidden" name="_next" value={`${SITE.url}/thank-you/`} />
      <div className="flex flex-col gap-3 sm:flex-row sm:rounded-full sm:bg-white sm:p-1.5 sm:shadow-lg">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email address"
          className="field flex-1 sm:!border-0 sm:!bg-transparent sm:!shadow-none sm:focus:!shadow-none"
          autoComplete="email"
        />
        <Button type="submit" variant="rose" className="w-full shrink-0 sm:w-auto sm:!px-6" stackMobile>
          Subscribe
        </Button>
      </div>
    </form>
  );
}
