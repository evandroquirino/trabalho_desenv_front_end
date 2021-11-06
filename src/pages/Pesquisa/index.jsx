export const Pesquisa = () => {
    return(
        <>
            <h1 className="text-center">Pesquisa sobre SEO</h1>

    <div className="row d-flex ">       

        <div className="col-12  text-center align-items-stretch">
            <div className="card">
                <h3><strong>O que é SEO e para que serve?</strong></h3>
                <p>SEO – sigla para Search Engine Optimization, que, em português, significa Otimização para Mecanismos de Buscas. Trata-se de um conjunto de técnicas que têm como objetivo posicionar uma ou mais páginas de destino entre os melhores resultados dos motores de pesquisa.

                Em termos práticos, é como pedir um Uber: você precisa ligar o GPS do celular para que o seu motorista te encontre. Com o SEO também é assim. É necessário fazer melhorias no conteúdo da sua página para que ela possa ser encontrada com mais facilidade por quem está fazendo uma pesquisa no Google.

                Por meio das técnicas de SEO, é possível otimizar o site para que ele ultrapasse os demais que ocupam as melhores posições e se torne o primeiro colocado na página de resultados, chamando a atenção dos usuários como o conteúdo mais relevante para suas buscas.</p>
              
                
            </div>
           
        </div>
        <div className="col-12 col-md-6 text-center align-items-stretch">
            <div className="card">
                <h3><strong>Vamos falar sobre Gatsby</strong></h3>
                <p>Gatsby é uma framework escrita em JavaScript e React, cuja proposta é ajudar desenvolvedores a construir aplicações e websites de forma facilitada. O foco do Gatsby é proporcionar um desenvolvimento rápido, efetivo e performático, acima de tudo.</p>
                <h5>E como que ele faz isso?</h5>
                <p>A forma que ele funciona consiste em três etapas. Primeiro, você tem o Data Source, que é basicamente a fonte desses dados que você vai entregar pra construir o web site ou uma aplicação, como um blog, por exemplo.

                E, depois, vem o processo de building, onde ele vai incorporar todo HTML, JavaScript e CSS que são necessários para compilar sua aplicação, lendo em cima dessa fonte de dados e construir o site estático.

                O conceito do Gatsby é ler esses dados, construí-los de forma estática, criando um site estático, que é o que dá, de fato, essa performance para ele. Por fim, a terceira etapa é o Deploy, onde você entrega esses arquivos e os visualiza na web.</p>
              
                
            </div>
           
        </div>
        <div className="col-12 col-md-6 text-center align-items-stretch">
            <div className="card">
                <h3><strong>Adicionando um componente de SEO</strong></h3>
                <p>Cada site na web possui meta-tags básicas como título, favicon ou descrição da página em seu elemento. Essas informações são exibidas no navegador e usadas quando alguém compartilha seu site, por exemplo, no Twitter. Você pode fornecer a seus usuários e a esses sites dados adicionais para incorporar seu site com mais dados - e é aí que este guia para um componente de SEO entra. No final, você terá um componente que pode colocar em seu arquivo de layout e ter visualizações ricas para outros clientes, usuários de smartphones e mecanismos de pesquisa.  </p>

                    <h5>gatsby-config.js</h5>
                    <p>Gatsby expõe automaticamente a siteMetadataseção do gatsby-configarquivo na camada de dados GraphQL. É considerada prática recomendada colocar as meta informações do seu site lá.</p>
             
               
            </div>
        </div>
    
</div>
        </>
    )
}