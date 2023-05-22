'use client'
import Card from '@/components/ui/Card';
import { CardBoard } from '@/components/ui/CardBoard';
import { Header } from '@/components/ui/Header';

export default function Home() {

  const cardList = [
    {
      expectativa: "Otima",
      data_cadastro: "2023-05-10",
      cargo_prententido: "Desenvolvedor FullStack",
      nome_empresa: "Mercado Livre",
      resumo_empresa: " Resumo 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, placeat esse illum inventore sed accusantium delectus minima quidem, pariatur perferendis, accusamus maiores consequatur repudiandae aliquid commodi magni cumque eius reprehenderit.",
      id_vaga: 1
    },
    {
      expectativa: "Boa",
      data_cadastro: "2023-05-13",
      cargo_prententido: "Desenvolvedor FullStack Javascrip",
      nome_empresa: "Stone",
      resumo_empresa: " Resumo 2 - Lorem ipsum adipisicing elit. Voluptatem, placeat esse illum inventore sed accusantium delectus minima quidem, pariatur perferendis, accusamus maiores consequatur repudiandae aliquid commodi magni cumque eius reprehenderit.",
      id_vaga: 2
    },
    {
      expectativa: "Ruin",
      data_cadastro: "2023-05-05",
      cargo_prententido: "Desenvolvedor Front-end Angular",
      nome_empresa: "Casa de softwares blueSoft",
      resumo_empresa: " Resumo 3 - Loremasdf  ipsum dolor,, placeat esse illum inventore sed accusantium delectus minima quidem, pariatur perferendis, accusamus maiores consequatur repudiandae aliquid commodi magni cumque eius reprehenderit.",
      id_vaga: 3
    },
  ]

  return (
    < >
      <Header 
        title="Dashboard"
      />
      <main className='mt-20'>
        <div className="mx-auto  max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-col gap-3">
          
        <CardBoard>
          Teste
        </CardBoard>
          
        <CardBoard title='Vagas que combinam com meu perfil'>
            {
              cardList.map(data => (
                <Card data={data}/>
              ))
            }
        </CardBoard>

          
          
        </div>
      </main>
    </>
  )
}
