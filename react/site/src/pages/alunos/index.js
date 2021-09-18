import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { Container, Conteudo } from './styled'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react';

import Api from '../../services/api';
const api = new Api();


export default function Index() {
    
    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState();
    const [categoria, setCategoria] = useState();
    const [avaliacao, setAvaliacao] = useState();
    const [precode, setPrecode] = useState();
    const [precopor, setPrecopor] = useState();
    const [estoque, setEstoque] = useState();
    const [imagem, setImagem] = useState();
    const [descricao, setDescricao] = useState();
    const [idAlterando, setIdAlterando] = useState(0);

    function LimparCampos() {
        setIdAlterando('')
        setNome('')
        setCategoria('')
        setAvaliacao('')
        setPrecode('')
        setPrecopor('')
        setEstoque('')
        setImagem('')
        setDescricao('')
    }

    async function listar() {
        let r = await api.listar();
        setProdutos(r);
    }

    async function inserir() {
        if (idAlterando == 0) {
            let r = await api.inserir(nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem);
            if (r.erro)
                alert (r.erro)
            else   
                alert ('Produto Inserido!')
        } else {
            let r = await api.alterar(idAlterando, nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem);
            if (r.erro)
                alert (r.erro)
            else   
                alert ('Produto Alterado!')
        }

        LimparCampos();
        listar();
    }


    async function remover(id) {
        confirmAlert({
            title: 'Remover Produto',
            message: `Tem certeza que deseja remover o produto ${id} ?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.remover(id);
                        if (r.erro)
                            toast.error(`${r.erro}`);
                        else {
                            toast.dark(`Produto Removido!`);
                            listar();
                        }    
                    }
                },
                {
                    label: 'Não'
                }
            ]
        });
    }

    async function editar(item) {
        setNome(item.nm_produto)
        setCategoria(item.ds_categoria)
        setAvaliacao(item.vl_avaliacao)
        setPrecode(item.vl_preco_de)
        setPrecopor(item.vl_preco_por)
        setEstoque(item.qtd_estoque)
        setImagem(item.img_produto)
        setDescricao(item.ds_produto)
        setIdAlterando(item.id_produto)
    }

    useEffect(() => {
        listar();
    } , [])
    
    return (
        <Container>
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student"> {idAlterando == 0 ? "Novo Produto" : "Alterando Produto " + idAlterando } </div>
                        </div>
                        <div>
                        <div class="input-new-student"> 
                            <div class="input-left">
                                <div class="agp-input"> 
                                    <div class="name-student"> Nome: </div>  
                                    <div class="input"> <input type='text' value={nome} onChange={e => setNome(e.target.value)} /> </div>  
                                </div> 
                                <div class="agp-input">
                                    <div class="number-student"> Categoria: </div>  
                                    <div class="input"> <input type='text' value={categoria} onChange={e => setCategoria(e.target.value)}/> </div> 
                                </div>

                                <div class="agp-input">
                                    <div class="number-student"> Avaliação: </div>  
                                    <div class="input"> <input type='text' value={avaliacao} onChange={e => setAvaliacao(e.target.value)} /> </div> 
                                </div>
                                
                            </div>

                            <div class="input-right">
                                <div class="agp-input">
                                    <div class="corse-student"> .Preço De: </div>  
                                    <div class="input"> <input type='text' value={precode} onChange={e => setPrecode(e.target.value)} /> </div>  
                                </div>
                                <div class="agp-input">
                                    <div class="class-student"> Preço Por: </div>  
                                    <div class="input"> <input type='text' value={precopor} onChange={e => setPrecopor(e.target.value)} /> </div> 
                                </div>

                                <div class="agp-input">
                                    <div class="class-student"> .   .Estoque: </div>  
                                    <div class="input"> <input type='text' value={estoque} onChange={e => setEstoque(e.target.value)} /> </div> 
                                </div>
                            </div> 
                            </div>

                            <div class="agp-input2">
                                    <div class="number-student"> Link Da Imagem: </div>  
                                     <input className="inputlink" type='text' value={imagem} onChange={e => setImagem(e.target.value)} /> 
                                </div>
                                <div className="teste33">
                                <div class="agp-input3">
                                    <div class="number-student"> Descrição: </div>  
                                     <textarea className="textareadesc" type='text' value={descricao} onChange={e => setDescricao(e.target.value)}/> 
                                </div>
                                <div class="button-create"> <button onClick={inserir}> { idAlterando == 0 ? "Cadastrar" : "Alterar" } </button> </div>
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
                                    <th> </th>
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

                                {produtos.map((item, i) => 
                                    <tr className={i % 2 == 0 ? "linha-alternada" : ''}>
                                        <td className="table-img"> <img src={item.img_produto} alt=""/> </td>
                                        <td> {item.id_produto} </td>
                                        <td title={item.nm_produto}> {item.nm_produto != null && item.nm_produto.length >= 15 ? item.nm_produto.substr(0, 15) + '...' : item.nm_produto} </td>
                                        <td title={item.ds_categoria}> {item.ds_categoria != null && item.ds_categoria.length >=15 ? item.ds_categoria.substr(0, 15) + '...' : item.ds_categoria} </td>
                                        <td> R${item.vl_preco_por} </td>
                                        <td> {item.qtd_estoque} </td>
                                        <td className="coluna-acao"> <button onClick={() => editar(item)}> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                        <td className="coluna-acao"> <button onClick={() => remover(item.id_produto)}> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                                    </tr>
                                )}

                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}