import logoRocket from "../assets/logo-rockeat.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black h-[81px] px-6">
      <div className="w-full h-full border-t border-gray-300 flex items-center justify-between gap-6">
        <div className="flex gap-6 items-center">
          <img src={logoRocket} alt="Logotipo RocketSeat" />
          <strong className="text-gray-300">
            Rocketseat - Todos os direitos reservados
          </strong>
        </div>

        <a href="google.com" target="_blank" className="text-gray-300">
          Políticas de privacidade
        </a>
      </div>
    </footer>
  );
};

export default Footer;
