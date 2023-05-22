import Button from "../Button";

type cardProps = {
  data: cardList
}

type cardList = {
  expectativa: string,
      data_cadastro: string,
      cargo_prententido: string,
      nome_empresa: string,
      resumo_empresa: string,
      id_vaga: number
}


export default function Card({data}: cardProps){

  function casasDecimais(num: number, precisao: number) {
    var casas = Math.pow(10, precisao);
    return Math.floor(num * casas) / casas;
};
  function calcularDias() {
    let hoje = new Date()
    let data_cadastro = new Date(data.data_cadastro)
    const diff = (Math.abs(data_cadastro.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
    const arred = casasDecimais(diff, 0)
    return arred
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 m-0">
      <div className="items-center justify-center mx-auto mt-4 max-w-2xl rounded-sm ring-1 ring-azul-02 sm:mt-4 lg-mx-0 lg:flex lg:max-w-none">
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-[160px] lg:flex-shrink-0">
          <div className="rounded-2xl bg-azul-01/50 py-8 text-center ring-1 ring-inset ring-azul-02 lg:flex lg:flex-col lg:justify-center lg:py-12">
            <div className="mx-auto max-w-xs px-2">
              <p className='text-base font-semibold text-azul-00'>
                {data.expectativa}
              </p>
            </div>
          </div>
        </div>

        <div className='p-4 sm:p-5 lg:flex-auto' >
          <div className='flex'>
            <span className='flex border p-1 rounded border-azul-00 w-20 text-azul-05 font-bold items-center justify-center'>{calcularDias()}</span>
            <h2 className="ml-3 text-2xl font-bold tracking-tight text-gray-900">{data.cargo_prententido}</h2>
          </div>
          <div className="mt-5 flex flex-col items-baseline">
            <p className="flex-none text-sm font-semibold leading-6 text-azul-00">{data.nome_empresa}</p>
            <span className="text-base leading-5 text-gray-600 line-clamp-2">{data.resumo_empresa}</span>
          </div>

        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-[160px] lg:flex-shrink-0">
          <Button>
            Acessar
          </Button>
        </div>
      </div>
    </div>
  )
}