import { CardBoard } from "@/components/ui/CardBoard";
import { Header } from "@/components/ui/Header";
import { MainCard } from "@/components/ui/MainCard";
import { Modal } from "@/components/ui/Modal";
import { Table } from "@/components/ui/Table";

export default function Company() {

  
  const titleTable = [
    'Nome do Produto', 'Cor', 'Categoria', 'Preço'
  ]

  const dadosTable = [{
    NomeProduto: 'aple',
    Cor: 'prata',
    Categoria: 'laptop',
    Preço: 'R$ 2.999,00'
  },
  {
    NomeProduto: 'Dell',
    Cor: 'prata',
    Categoria: 'WorkStation',
    Preço: 'R$ 29.999,00'
  },
  {
    NomeProduto: 'Acer',
    Cor: 'prata',
    Categoria: 'Servidor',
    Preço: 'R$ 2.876.999,00'
  },
  {
    NomeProduto: 'aple',
    Cor: 'prata',
    Categoria: 'laptop',
    Preço: 'R$ 2.999,00'
  },
  {
    NomeProduto: 'aple',
    Cor: 'prata',
    Categoria: 'laptop',
    Preço: 'R$ 2.999,00'
  },
]

  return (
    < >
      <Header 
        title="Empresas"
      />
      <MainCard>
        <CardBoard
          title="Empresas Cadastradas"
        >
          <Table
            titleTable={titleTable}
            dadosTable={dadosTable}
            botao
          ></Table>
          <br />
          <div>Teste Modal</div>

        </CardBoard>
      </MainCard>
      
    </>
  )
}