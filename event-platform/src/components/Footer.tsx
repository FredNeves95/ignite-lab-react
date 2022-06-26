import logoRocket from "../assets/logo-rockeat.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black px-6 h-[164px] lg:h-[81px]">
      <div className="w-full h-full border-t border-gray-300 flex items-center flex-col justify-center lg:flex-row  lg:justify-between gap-6">
        <div className="flex flex-col gap-6 items-center lg:flex-row">
          <img src={logoRocket} alt="Logotipo RocketSeat" />
          <strong className="text-gray-300">
            Rocketseat - Todos os direitos reservados
          </strong>
        </div>

        <a href="https://google.com" target="_blank" className="text-gray-300">
          Políticas de privacidade
        </a>
      </div>
    </footer>
  );
};

export default Footer;
