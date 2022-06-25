import { useContext } from "react";
import { SubscriberNameContextType } from "../contexts/subscriberContext/useSubscriberName";
import { SubscriberContext } from "../contexts/subscriberContext/useSubscriberNameContext";
import Footer from "./Footer";
import ReactIcon from "./ReactIcon";

const DefaultEvent = () => {
  const { getSubscriberName } = useContext(
    SubscriberContext
  ) as SubscriberNameContextType;

  const name = getSubscriberName();

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="text-gray-300 pt-10 text-2xl flex flex-col items-center gap-10">
        <span>
          Olá, <strong className="text-blue-500">{name}</strong>.<br />
          Bem vindo(a) ao <strong className="text-blue-500">Ignite Lab</strong>!
        </span>
        <span>Selecione uma aula na lista ao lado e bons estudos.</span>
        <ReactIcon marginTopValue="100" />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultEvent;
