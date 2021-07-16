import './App.css'
import React from 'react';

import Primeiro from './components/Primeiro.jsx'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional';


export default props => (
    <div className="App">
        <Card titulo="#05 - Condicional">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente com FILHOS">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                    <li>Dieferson</li>
                    <li>Dieferson</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente com parâmetro">
            <ComParametro titulo="Esse é o título" 
            subtitulo="Esse é o subtítulo"></ComParametro>
        </Card>
        <Card titulo="#01 - Primeiro componente">
            <Primeiro/>  
        </Card>
    </div>
    );