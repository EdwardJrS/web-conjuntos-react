import Image from "next/image";
import backgrounImage from "../../public/assets/images/background_homepage.png";

export default function Home() {
  return (
    <div>
        <Image
          className="opacity-60"
          src={ backgrounImage }
          fill={true}
        />
    </div>
  );
}
