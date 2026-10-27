import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Page not found" description="The page you were looking for could not be found." path="/404" noindex />
      <section className="container py-24 sm:py-32">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">We could not find that page</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">It may have moved. These pages may help:</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><Link to="/">Home</Link></Button>
          <Button asChild variant="outline"><Link to="/services">Services</Link></Button>
          <Button asChild variant="outline"><Link to="/testing">Microbiome testing</Link></Button>
          <Button asChild variant="outline"><Link to="/contact">Contact</Link></Button>
        </div>
      </section>
    </Layout>
  );
}
