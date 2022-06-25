import Footer from "./Footer";
import ReactIcon from "./ReactIcon";

const DefaultEvent = () => {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="text-gray-300 pt-10 text-2xl flex flex-col items-center gap-10">
        <span>
          Bem vindo ao <strong className="text-blue-500">Ignite Lab</strong>!
        </span>
        <span>Selecione uma aula na lista ao lado e bons estudos.</span>
        <ReactIcon marginTopValue="100" />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultEvent;
