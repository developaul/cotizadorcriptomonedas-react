import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;

    span {
        font-weight: bold;
    }
`;

const Cotizacion = ({ resultado }) => {

    if( Object.keys( resultado ).length === 0 ) return null;

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = resultado;
    
    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{ PRICE }</span></Precio>
            <Info>El precio más alto del día: <span>{ HIGHDAY }</span></Info>
            <Info>El precio más bajo del día: <span>{ LOWDAY }</span></Info>
            <Info>Variación últimas 24 horas: <span>{ CHANGEPCT24HOUR }</span></Info>
            <Info>Última actualización: <span>{ LASTUPDATE }</span></Info>
        </ResultadoDiv>
    );
};

Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
};

export default Cotizacion;