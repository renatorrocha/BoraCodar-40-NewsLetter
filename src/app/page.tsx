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
    <main className="relative flex flex-col gap-40">
      <article className="flex flex-col gap-8 w-[482px] pt-40 ml-16">
        <section className="flex flex-col gap-4">
          <p className="tagline">newsletter exclusiva</p>
          <p className="title">Workspace inspiration</p>
        </section>

        <p className="subtitle">
          Assine nossa newsletter e transforme seu espaço de trabalho em um
          oásis de produtividade!
        </p>
        <form className="flex justify-start gap-2">
          <input type="email" placeholder="Digite seu e-mail" />
          <button className="uppercase font-bold">
            quero receber
            <ChevronRight />
          </button>
        </form>
      </article>

      <article className="flex gap-10 mx-16 mb-12">
        <Card
          icon={rocket}
          title="As últimas inovações"
          subtitle="Mantenha-se atualizado com as mais recentes tecnologias e acessórios que vão revolucionar a forma como você trabalha."
          alt="Icone de foguete"
        />

        <Card
          icon={thunder}
          title="Reviews detalhadas"
          subtitle="Analisamos os produtos mais populares do mercado para que você possa fazer as escolhas certas."
          alt="Icone de trovão"
        />

        <Card
          icon={tools}
          title="Dicas de organização"
          subtitle="Aumente sua eficiência e proteja sua saúde com conselhos especializados sobre ergonomia e organização."
          alt="Icone de ferramentas"
        />

        <Card
          icon={present}
          title="Ofertas exclusivas"
          subtitle="Como membro da nossa comunidade, você terá acesso a descontos e promoções especiais em produtos selecionados."
          alt="Icone de presente"
        />
      </article>
      <Image
        src={background}
        priority
        alt=""
        className="fixed right-0 h-full w-[704px] -z-10"
      />
    </main>
  )
}
