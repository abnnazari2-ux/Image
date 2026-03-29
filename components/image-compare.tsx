import Image from 'next/image';

export function ImageCompare({ beforeUrl, afterUrl }: { beforeUrl: string; afterUrl: string }) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <div className="card">
        <p className="mb-2 text-sm">Before</p>
        <Image src={beforeUrl} alt="Before edit" width={640} height={640} className="h-auto w-full rounded-lg" />
      </div>
      <div className="card">
        <p className="mb-2 text-sm">After</p>
        <Image src={afterUrl} alt="After edit" width={640} height={640} className="h-auto w-full rounded-lg" />
      </div>
    </section>
  );
}
