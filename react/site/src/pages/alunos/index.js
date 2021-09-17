import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { Container, Conteudo } from './styled'


export default function Index() {
    return (
        <Container>
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student">Novo Aluno</div>
                        </div>
                        <div>
                        <div class="input-new-student"> 
                            <div class="input-left">
                                <div class="agp-input"> 
                                    <div class="name-student"> Nome: </div>  
                                    <div class="input"> <input /> </div>  
                                </div> 
                                <div class="agp-input">
                                    <div class="number-student"> Categoria: </div>  
                                    <div class="input"> <input /> </div> 
                                </div>

                                <div class="agp-input">
                                    <div class="number-student"> Avaliação: </div>  
                                    <div class="input"> <input /> </div> 
                                </div>
                                
                            </div>

                            <div class="input-right">
                                <div class="agp-input">
                                    <div class="corse-student"> .Preço De: </div>  
                                    <div class="input"> <input /> </div>  
                                </div>
                                <div class="agp-input">
                                    <div class="class-student"> Preço Por: </div>  
                                    <div class="input"> <input /> </div> 
                                </div>

                                <div class="agp-input">
                                    <div class="class-student"> .   .Estoque: </div>  
                                    <div class="input"> <input /> </div> 
                                </div>
                            </div> 
                            </div>

                            <div class="agp-input2">
                                    <div class="number-student"> Link Da Imagem: </div>  
                                     <input className="inputlink" /> 
                                </div>
                                <div className="teste33">
                                <div class="agp-input3">
                                    <div class="number-student"> Descrição: </div>  
                                     <textarea className="textareadesc" /> 
                                </div>
                                <div class="button-create"> <button> Cadastrar </button> </div>
                                </div>
                        
                        </div>
                    </div>

                    <div class="student-registered-box">
                        <div class="row-bar"> 
                            <div class="bar-new-student"> </div>
                            <div class="text-registered-student"> Produtos Cadastrados </div>
                        </div>
                    
                        <table class ="table-user">
                            <thead>
                                <tr>
                                    <th class="a"> </th>
                                    <th> ID </th>
                                    <th> Produto </th>
                                    <th> Categoria </th>
                                    <th> Preço </th>
                                    <th> Estoque </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                <tr>
                                    <td> </td>
                                    <td> 1 </td>
                                    <td> Manopola do Infinito </td>
                                    <td> joias </td>
                                    <td> R$10,50 </td>
                                    <td> 50 </td>
                                    <td> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                    <td> <button> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                                </tr>
                            
                                <tr class="linha-alternada">
                                    <td> </td>
                                    <td> 2 </td>
                                    <td> Manopola do Infinito</td>
                                    <td> joias </td>
                                    <td> R$10,50 </td>
                                    <td> 60 </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>

                                <tr>
                                    <td> </td>
                                    <td> 3 </td>
                                    <td> Manopola do Infinito</td>
                                    <td> joias </td>
                                    <td> R$10,50 </td>
                                    <td> 70 </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>

                                <tr class="linha-alternada">
                                    <td> </td>
                                    <td> 4 </td>
                                    <td> Manopola do Infinito</td>
                                    <td> joias </td>
                                    <td> R$10,50 </td>
                                    <td> 80 </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                                
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}