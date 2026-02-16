export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <h1 className="text-3xl font-bold">Case Study: {slug}</h1>
    </div>
  );
}
