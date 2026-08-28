import { notFound } from "next/navigation";
import { certificates } from "../../data/certificates";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CertificatePage({ params }: Props) {
  const { slug } = await params;

  const certificate = certificates.find(
    (item) => item.slug === slug
  );

  // Certificate itself doesn't exist
  if (!certificate) {
    notFound();
  }

  // Certificate information exists,
  // but the actual PDF is not uploaded
  if (!certificate.file) {
    notFound();
  }

  // This route is only used when a certificate has a file.
  // Redirect directly to the PDF.
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <a
        href={certificate.file}
        className="text-cyan-400 underline"
      >
        Open Certificate
      </a>
    </div>
  );
}
