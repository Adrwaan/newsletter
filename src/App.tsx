import { Form } from "./components/Form";

export function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-2">
      <h1 className="lg:w-1/3 sm:w-3/4 w-10/12 text-gray-50 font-bold text-3xl text-center">
        Inscreva-se
      </h1>
      <h2 className="lg:w-1/3 sm:w-3/4 w-10/12 text-gray-50 text-base text-center pb-1">
        Inscreva-se para receber o conteúdo mais recente por e-mail!
      </h2>
      <div className="lg:w-1/3 sm:w-3/4 w-10/12 flex flex-col justify-center items-center gap-2 p-8 rounded-xl bg-white">
        <Form />
      </div>
      <h2 className="lg:w-1/3 sm:w-3/4 w-10/12 text-gray-50 text-base text-center">
        Ao se increver você passará a receber nossos e-mails com as melhores
        dicas novidades e ofertas
      </h2>
    </div>
  );
}
