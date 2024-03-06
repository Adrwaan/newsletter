import { InputHTMLAttributes } from "react";

interface InputTxtProps extends InputHTMLAttributes<HTMLInputElement> {
  labelTxt: string;
  placeholderTxt: string;
}

export function InputTxt({ labelTxt, placeholderTxt, ...rest }: InputTxtProps) {
  return (
    <>
      <label className="mr-2 mb-1 font-semibold text-lg">{labelTxt}</label>
      <input
        {...rest}
        type="text"
        placeholder={placeholderTxt}
        className="w-full border-solid border border-slate-500 text-gray-700 rounded p-1 pl-3 placeholder:text-gray-400 focus:outline-none"
      />
    </>
  );
}
