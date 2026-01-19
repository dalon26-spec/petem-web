import { redirect } from "next/navigation";

interface PageProps {
  params: {
    code: string;
  };
}

export default function QRRedirectPage({ params }: PageProps) {
  const { code } = params;

  redirect(`/pet-public/${code}`);
}
