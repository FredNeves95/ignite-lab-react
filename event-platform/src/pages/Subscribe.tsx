import { useState } from "react";
import Icon from "../components/Icon";
import codeMockupImage from "../assets/code-mockup.png";
import Footer from "../components/Footer";
import ReactIcon from "../components/ReactIcon";
import SubscribeForm from "../components/SubscribeForm";
import LoginForm from "../components/LoginForm";
const Subscribe = () => {
  const [isAlreadySubscribed, setIsAlreadySubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <ReactIcon />
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Icon />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma
            <strong className="text-blue-500"> aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div>
          {isAlreadySubscribed ? (
            <LoginForm
              isAlreadySubscribed={isAlreadySubscribed}
              setIsAlreadySubscribed={setIsAlreadySubscribed}
            />
          ) : (
            <SubscribeForm
              isAlreadySubscribed={isAlreadySubscribed}
              setIsAlreadySubscribed={setIsAlreadySubscribed}
            />
          )}
        </div>
      </div>
      <img
        src={codeMockupImage}
        alt="Imagem de fundo - VS Code"
        className="mt-10"
      />
      <Footer />
    </div>
  );
};

export default Subscribe;
