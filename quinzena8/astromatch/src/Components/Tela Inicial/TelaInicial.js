import react from "react";
import styled from "styled-components"
import axios from "axios";

const DivTotal = styled.div`
`

const ContainerPrincipal = styled.div`
display: flex;
justify-content: center;
`
const ContainerMatches = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
height: 70vh;
width: 60vh;
margin-top: 45px;
`

const Imagem = styled.img`
margin-top: 20px;
margin-bottom: 20px;    
height: 80%;
`
const ContainerBotoes = styled.div` 
margin: 10px;
padding: 10px;
`


const BotaoPaginaMatches = styled.button`
margin: 10px;
margin-left: 20px;
`

const BotaoLimparMatches = styled.button`
`

export const TelaInicial = (props) => {

return (
    <DivTotal>
    <ContainerPrincipal>
        <ContainerMatches>
                <Imagem src="https://lh3.googleusercontent.com/proxy/PCxnT0VTneQPsIlAKY6awYlHNyzWrEePN6HX0kGVi0ixcxmhAADAgc91ekqaW-KG75Laf3_S5SWaOKjhLpgVUaxE7k7pB8Rm4SYq4ZxsmcuS1w9QTjLIQg92mH6PYtSdLRL7Vg" />
            <ContainerBotoes>
                <button>❌</button>
                <button>💚</button>
            </ContainerBotoes>
        </ContainerMatches>
    </ContainerPrincipal>
    <BotaoPaginaMatches onClick={() => props.irParaMatches()} >Ir para matches</BotaoPaginaMatches>
    </DivTotal>
)
}

export default TelaInicial;