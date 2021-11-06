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
                <h3><strong>O que é renderização dinâmica?</strong></h3>
                <p>Às vezes, desenvolvemos aplicações web complexas, no modelo SPA (Single Page Application). Eles normalmente dependem de frameworks JavaScript para manipular a interface do usuário.

                Uma SPA é excelente para os usuários, mas não tão bom para crawlers de motores de busca que tentam rastrear o conteúdo do site.</p>
                <h5>Renderização Dinâmica: Primeiros Passos</h5>
                <p>Se você quiser adicionar renderização dinâmico a seu website, provavelmente precisará incluir a ajuda de mais um framework.
                Infelizmente, provavelmente será necessário. Aqui estão alguns frameworks que você deve considerar:</p>
              
                
            </div>
           
        </div>
        <div className="col-12 col-md-6 text-center align-items-stretch">
            <div className="card">
                <h3><strong>Exemplos de frameworks para Renderização dinâmica</strong></h3>
                <p><strong>Puppeteer: </strong>
                Este é o oficial do Google, por isso é um bom ponto de partida. Usando o Puppeteer, você pode gerar capturas de tela e PDFs de páginas web, criar conteúdo pré-renderizado e até mesmo automatizar o envio de formulários. O melhor de tudo, é grátis.<br/>
                <strong>Rendertron: </strong>
                Esse aqui vai exigir um pouco de estudo, disponível no Github. Ainda assim, foi criado para renderizar páginas web para que o Googlebot possa rastrear e indexar o conteúdo.<br/><strong>Prerender.io: </strong>
                Esta solução custará algum dinheiro se você planeja renderizar mais de 250 páginas. O código para o framework também está disponível no Github. Depois de configurar e executar seu renderizador dinâmico, é hora de escolher o conteúdo que você deseja gerar HTML estático.
                Se você estiver interessado em indexar suas SPAs, obviamente irá desejar ter “googlebot” e “bingbot” nessa lista. No entanto, existem outros agentes (como “facebot”) que você também pode querer gerar conteúdo estático.</p>
               
            </div>
        </div>
    
</div>
        </>
    )
}