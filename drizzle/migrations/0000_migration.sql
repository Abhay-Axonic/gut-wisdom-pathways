CREATE TABLE public.consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text,
  phone text,
  preferred_contact text NOT NULL,
  appointment_preference text NOT NULL,
  message text,
  marketing_opt_in boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'new'
);
GRANT ALL ON public.consultation_requests TO service_role;
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;
-- No policies: only the server function (service role) can read or write.