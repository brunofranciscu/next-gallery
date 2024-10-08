import { Poppins } from "next/font/google";
import { CategoriaProvider } from "./Context";
import Nav from "./Nav";
import { AuthProvider } from "./Auth";
import "./global.css";

const poppins = Poppins({ subsets: ["latin"], weight:["700" , "100" , "200" , "300" , "400" , "500" , "600" , "800" , "900"] });

export const metadata = {
  title: "PORTFOLIO ESTUDOS PINTURA DIGITAL | BRUNO FRANCISCO",
  description: "Portfolio de estudo de desenho e pintura digital, com a grande maioria usando procreate. Desenvolvido em React, utilizando firebase/firestore como banco de dados e armazenamento.",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <CategoriaProvider>
        <html lang="pt-BR">
          <body className={poppins.className}>
          <Nav/>
          {children}
            
          </body>
        </html>
      </CategoriaProvider>
    </AuthProvider>
  );
}


