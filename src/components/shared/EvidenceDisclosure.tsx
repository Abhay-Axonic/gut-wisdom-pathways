import { AlertTriangle } from "lucide-react";

export function EvidenceDisclosure() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
      <div className="flex gap-4">
        <AlertTriangle className="h-6 w-6 flex-shrink-0 text-amber-600" />
        <div>
          <h3 className="font-semibold text-amber-900">Important Information</h3>
          <p className="mt-2 text-sm text-amber-800">
            While gut microbiome research shows promise, current international consensus 
            (December 2024, <em>The Lancet Gastroenterology & Hepatology</em>) indicates 
            insufficient evidence for routine diagnostic use. Our clinic focuses on 
            research-informed health optimisation in partnership with your existing 
            healthcare providers.
          </p>
        </div>
      </div>
    </div>
  );
}
