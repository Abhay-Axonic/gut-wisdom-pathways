/** Only details supplied by the clinic. Credentials are added here once verified. */
export const clinicians = [
  {
    slug: "abhay-chopada",
    name: "Prof. Abhay Chopada",
    role: "Consultant Gastrointestinal Surgeon",
    kind: "Medical",
    summary:
      "Prof. Chopada leads the clinic’s medical assessment. As a gastrointestinal surgeon, he considers your symptoms in the context of standard investigations and ensures that anything needing conventional care is not missed.",
  },
  {
    slug: "rashmi-kulkarni",
    name: "Dr Rashmi Kulkarni",
    role: "Microbiome Specialist",
    kind: "Specialist",
    summary:
      "Dr Kulkarni focuses on the science of the gut microbiome, helping patients understand what current research can and cannot tell them, and how that relates to their own situation.",
  },
] as const;
