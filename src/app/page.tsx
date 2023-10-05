import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import background from 'public/background.png'
import rocket from 'public/icon_rocket.svg'
import thunder from 'public/icon_thunder.svg'
import tools from 'public/icon_tools.svg'
import present from 'public/iconPresent.svg'
import Card from './components/card'
export default function Home() {
  return (
    <main className="relative">
      <article className="flex flex-col gap-8 w-[482px] pt-40 ml-12">
        <section className="flex flex-col gap-4">
          <p className="tagline">newsletter exclusiva</p>
          <p className="title">Workspace inspiration</p>
        </section>

        <p className="subtitle">
          Assine nossa newsletter e transforme seu espaço de trabalho em um
          oásis de produtividade!
        </p>
        <section className="flex justify-start gap-2">
          <input type="text" placeholder="Digite seu e-mail" />
          <button className="uppercase font-bold">
            quero receber
            <ChevronRight />
          </button>
        </section>
      </article>
      <Image
        src={background}
        priority
        alt=""
        className="fixed right-0 top-0 w-[704px] -z-10"
      />
      <article>
        <Card
          icon={rocket}
          title="As últimas inovações"
          subtitle="Mantenha-se atualizado com as mais recentes tecnologias e acessórios que vão revolucionar a forma como você trabalha."
          alt="Icone de foguete"
        />
      </article>
    </main>
  )
}
