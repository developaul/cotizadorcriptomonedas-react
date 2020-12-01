import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';
import Axios from 'axios';

import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
	max-width: 900px;
	margin: 0 auto;
	@media ( min-width: 920px ) {
		display: grid;
		grid-template-columns: repeat( 2, 1fr );
		grid-column-gap: 2rem; 
	}
`;

const Imagen = styled.img`
	max-width: 100%;
	margin-top: 5rem;
`;

const Heading = styled.h1`
	font-family: 'Bebas Neue', cursive;
	color: #FFF;
	text-align: left;
	font-weight: 700;
	font-size: 50px;
	margin-bottom: 50px;
	margin-top: 80px;

	&::after {
		content: '';
		width: 100px;
		height: 6px;
		background-color: #66a2fe;
		display: block;
	}
`;

function App() {

	const [ moneda, setMoneda ] = useState( '' );
	const [ criptomoneda, setCriptomoneda ] = useState( '' );
	const [ resultado, setResultado ] = useState( {} );
	const [ cargando, setCargando ] = useState( false );

	useEffect( () => {

		if( !moneda || !criptomoneda ) return;
		
		setCargando( true );

		( async () => {

			const url 		= `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ criptomoneda }&tsyms=${ moneda }`;
			const { data }	= await Axios.get( url );

			setCargando( false );
			
			setResultado( data.DISPLAY[ criptomoneda ][ moneda ] );

		} )();

	}, [ moneda, criptomoneda ] );

	const componente = cargando ? <Spinner /> : <Cotizacion resultado={ resultado } />

	return (
		<Contenedor>
			<div>
				<Imagen 
					src={ imagen } 
					alt='Imagen Crypto' 
				/>
			</div>

			<div>
				<Heading>
					Cotiza Criptomonedas al Instante
				</Heading>
				
				<Formulario 
					setMoneda={ setMoneda }
					setCriptomoneda={ setCriptomoneda }
				/>

				{ componente }
			</div>
		</Contenedor>
	);
};

export default App;