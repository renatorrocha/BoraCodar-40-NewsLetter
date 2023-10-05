import Image from 'next/image'

interface Props {
  title: string
  subtitle: string
  icon: string
  alt: string
}

export default function Card(props: Props) {
  return (
    <section className='flex flex-col gap-4 w-72'>
      <Image src={props.icon} alt={props.alt} priority />
      <div className='flex flex-col gap-2'>
        <p className="card-title ">{props.title}</p>
        <p className="card-subtitle">{props.subtitle}</p>
      </div>
    </section>
  )
}
