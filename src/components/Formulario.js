import React, { useState ,useEffect } from 'react';

import styled from '@emotion/styled';
import Axios from 'axios';

import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Formulario = () => {

    // State del listado de criptomonedas
    const [ listacripto, setListCripto ] = useState( [] );
    const [ error, setError ] = useState( false );

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
        { codigo: 'PE', nombre: 'Soles Peruano' }
    ]

    const [ moneda, SelectMonedas, setMoneda ] = useMoneda( 'Elige tu Moneda', '', MONEDAS );

    const [ criptomoneda, SelectCripto, setCripto ] = useCriptomoneda( 'Elige tu Criptomoneda', '', listacripto );

    // Ejecutar llamado a la api
    useEffect( () => {

        ( async () => {

            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

            const resultado = await Axios.get( url );

            setListCripto( resultado.data.Data );

        } )();

    }, [] );

    // Cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar
        if( !moneda || !criptomoneda ) {
            setError( true );
            return;
        }

        setError( false );

        // Realizar Cotización

    }

    return (
        <form
            onSubmit={ cotizarMoneda }
        >

            { error && <Error message='Todos los campos son obligatorios' /> }

            <SelectMonedas />

            <SelectCripto />

            <Boton 
                type='submit'
                value='Calcular'
            />
        </form>
    );
};

export default Formulario;