import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <Eyebrow>Error 404</Eyebrow>
      <h1 className="max-w-2xl text-5xl leading-tight font-medium sm:text-6xl">We couldn’t find that page.</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">
        It may have moved during our website update. Try one of these instead.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/" arrow>
          Back to home
        </ButtonLink>
        <ButtonLink href="/programs" variant="outline">
          Our programmes
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </div>
    </Container>
  );
}
