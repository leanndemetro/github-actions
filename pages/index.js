import Image from "next/image";

const prefix = "/github-actions";

export default function Home() {
  return (
    <div>
      <Image src={prefix + "/images/earth.jpg"} height={100} width={100} />
    </div>
  )
}
