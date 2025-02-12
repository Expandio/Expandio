// pages/index.js (Home do Marketplace)
import Head from 'next/head';
import Link from 'next/link';
  
export default function Home() {
  return (
    <div>
      <Head>
        <title>Expandio - Marketplace de Supermercado</title
      </Head>
      <header>
        <h1>Bem-vindo ao Expandio</h1>
        <nav>
          <ul>
           <li><Link href="/cadastro">Cadastro</Link></li>
           <li><Link href="/produtos">Produtos</Link></li>
           <li><Link href="/carrinho">Carrinho</Link></li>
         </ul>
       </nav>
     </header> 
     <main>
       <h2>Encontre fornecedores para o seu supermercado</h2>     
       <p>Cadastre-se e tenha acesso a fornecedores locais com as melhores ofertas.</p>
     </main>
   </div>
 ); 
 }         
            
 

      