import Image from "next/image";

export function LogoMark() {
  return (
    <div className="rounded-[1.1rem] border border-white/70 bg-white p-2 shadow-[0_18px_40px_rgba(62,45,26,0.12)]">
      <Image
        src="/design-space-and-infra-logo.jpg"
        alt="Design Space and Infra logo"
        width={1024}
        height={1024}
        className="h-auto w-[14rem] sm:w-[16rem] lg:w-[17.5rem]"
        priority
      />
    </div>
  );
}
