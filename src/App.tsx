import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, lazy, Suspense } from "react";
import HomePage from "./pages/HomePage";
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const FeesPage = lazy(() => import("./pages/FeesPage"));
const CliniciansPage = lazy(() => import("./pages/CliniciansPage"));
const TestingPage = lazy(() => import("./pages/TestingPage"));
const SciencePage = lazy(() => import("./pages/SciencePage"));
const ProvidersPage = lazy(() => import("./pages/ProvidersPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/InfoPages").then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import("./pages/InfoPages").then((m) => ({ default: m.TermsPage })));
const AccessibilityPage = lazy(() => import("./pages/InfoPages").then((m) => ({ default: m.AccessibilityPage })));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/clinicians" element={<CliniciansPage />} />
            <Route path="/testing" element={<TestingPage />} />
            <Route path="/science" element={<SciencePage />} />
            <Route path="/providers" element={<ProvidersPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            {/* Retired pages redirected to their closest equivalent */}
            <Route path="/research" element={<Navigate to="/science" replace />} />
            <Route path="/resources" element={<Navigate to="/testing" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
