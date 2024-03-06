import { FormEvent, useState } from "react";
import { InputTxt } from "./InputTxt";

interface Props {
  text: string;
}

const mailRegex: RegExp =
  /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function LabelError({ text }: Props) {
  return <label className="text-red-600 font-bold">{text}</label>;
}

export function Form() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [success, setSuccess] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [checkError, setCheckError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nameError && !mailError && isChecked) {
      console.log(isChecked, checkError);
      setSuccess(true);
    }
    if (
      name === "" ||
      name.length <= 3 ||
      name === undefined ||
      name === null
    ) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (
      mail === "" ||
      name === undefined ||
      name === null ||
      !mailRegex.test(mail)
    ) {
      setMailError(true);
    } else {
      setMailError(false);
    }

    if (isChecked) {
      setCheckError(false);
    } else {
      setCheckError(true);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-center items-start gap-2"
    >
      <InputTxt
        onChange={(e) => setName(e.target.value)}
        value={name}
        labelTxt="Nome:"
        placeholderTxt="Digite seu primeiro nome"
      />
      {nameError ? <LabelError text="Digite seu nome!" /> : ""}
      <InputTxt
        onChange={(e) => setMail(e.target.value)}
        value={mail}
        labelTxt="E-mail:"
        placeholderTxt="Digite seu melhor e-mail"
      />
      {mailError ? <LabelError text="Digite seu e-mail corretamente!" /> : ""}
      <p className="underline">Termos de serviço</p>
      <span className="flex justify-center gap-1">
        <input
          type="checkbox"
          onChange={(e) => setIsChecked(e.target.checked)}
          checked={isChecked}
        />
        Aceitar termos de serviço
      </span>
      {checkError ? (
        <LabelError text="Marque a caixa de termos de serviço para continuar!" />
      ) : (
        ""
      )}
      <button className="bg-white border border-violet-700 text-violet-700 w-full p-2 mt-2 rounded-lg transition-all duration-700 hover:bg-violet-700 hover:text-white hover:scale-105">
        Cadastrar-se
      </button>
      {success ? (
        <p className="text-emerald-400">
          Sucesso! Verifique seu e-mail e aproveite a newsletter.
        </p>
      ) : (
        ""
      )}
    </form>
  );
}
