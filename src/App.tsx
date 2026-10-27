import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import FeesPage from "./pages/FeesPage";
import CliniciansPage from "./pages/CliniciansPage";
import TestingPage from "./pages/TestingPage";
import SciencePage from "./pages/SciencePage";
import ProvidersPage from "./pages/ProvidersPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import { PrivacyPage, TermsPage, AccessibilityPage } from "./pages/InfoPages";
import NotFound from "./pages/NotFound";

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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
