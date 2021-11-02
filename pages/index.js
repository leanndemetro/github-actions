import Image from 'next/image';

const prefix = '/github-actions'


export default function Home() {
  return (
    <div>
      <Image src='/images/earth.jpg' width={100} height={100} />
    </div>
  )
}
