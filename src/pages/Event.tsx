import { ArrowRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

import reactIcon from '../assets/react-icon.svg';

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="lg:flex lg:flex-1">
        { slug 
          ? <Video lessonSlug={slug} /> 
          : <div className="flex-1 flex justify-center items-center flex-col">
              <img 
                  className="w-96"
                  src={reactIcon} 
              />
              <h1 className="text-2xl flex items-center py-6">
                Comece sua incrível jornada!    
                <ArrowRight size={40} className="text-blue-500 ml-2" />          
              </h1>
              </div>
          
        }
        <Sidebar />
      </main>     

      <Footer />      
    </div>
  )
}