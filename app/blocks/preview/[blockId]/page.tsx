import { blocksComponents } from "@/content/blocks-components";
import { notFound } from "next/navigation";
import PreviewThemeSwitcher from "./theme-switcher";
import type { Metadata } from "next";

type Params = {
  params: Promise<{
    blockId: string;
  }>;
};

export async function generateStaticParams() {
  const blockIds = Object.keys(blocksComponents);

  return blockIds.map((blockId) => ({
    blockId: blockId,
  }));
}

export default async function BlockPreviewPage({ params }: Params) {
  const { blockId } = await params;
  const BlocksComponent = blocksComponents[blockId];

  if (!BlocksComponent) {
    notFound();
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <BlocksComponent />
      <PreviewThemeSwitcher />
    </div>
  );
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Preview — Not Indexed",
};
