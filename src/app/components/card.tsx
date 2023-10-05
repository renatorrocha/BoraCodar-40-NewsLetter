import Image from 'next/image'

interface Props {
  title: string
  subtitle: string
  icon: string
  alt: string
}

export default function Card(props: Props) {
  return (
    <section>
      <Image src={props.icon} alt={props.alt} priority />
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
    </section>
  )
}
