import SmallContactUsButton from "../buttons/SmallContactUsButton";
import Image from "next/image";
interface ServiceCardProps {
  title: string;
  description: string;
  logoURL: string;
}

export default function ServiceCard({ title, description, logoURL }: ServiceCardProps) {
  return (
    <div className="bg-gradient-to-t from-gray to-gray-mid p-5 rounded flex flex-col items-start w-72 gap-2">
      <Image className='' src={logoURL} width={260} height={260} alt={`${title} Image`} />
      <h3 className="text-white text-lg font-light justify-self-start mt-3 w-3/5">{title}</h3>
      <p className="text-white font-light">{description}</p>
      <div className='mt-auto'>
        {/* <SmallContactUsButton /> */}
      </div>
    </div>
  );
}
