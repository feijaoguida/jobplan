interface propsHeader{
  title: string;
}

export  function Header(props: propsHeader) {
  return (
    <header className="bg-white shadow z-auto fixed w-full">
        <div className="mx-auto px-4 py-5 sm:px-6 lg:px-8 top-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{props.title}</h1>
        </div>
      </header>
  )
}