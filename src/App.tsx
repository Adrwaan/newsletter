import { Form } from "./components/Form";

export function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-2">
      <h1 className="w-1/3 text-gray-50 font-bold text-3xl text-center">
        Inscreva-se
      </h1>
      <h2 className="w-1/3 text-gray-50 text-base text-center pb-1">
        Inscreva-se para receber o conteúdo mais recente por e-mail!
      </h2>
      <div className="w-1/3 flex flex-col justify-center items-center gap-2 p-8 rounded-xl bg-white">
        <Form />
      </div>
      <h2 className="w-1/3 text-gray-50 text-base text-center">
        Ao se increver você passará a receber nossos e-mails com as melhores
        dicas novidades e ofertas
      </h2>
    </div>
  );
}
