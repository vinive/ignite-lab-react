import logoRocket from '../assets/logo-rocketseat.png';

export function Footer() {
  return(
   <div className="w-full py-5 bg-gray-900 flex flex-col items-center">
      <img
        className="w-[162px]" 
        src={logoRocket} 
        alt="Logo rocketseat" 
      />
      <p className="py-6 text-gray-400">Rocketseat - Todos os direitos reservados</p>
      <p className="text-gray-400">Políticas de privacidade</p>
   </div>
  ) 
}