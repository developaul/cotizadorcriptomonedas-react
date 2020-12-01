import React from 'react';
import styled from '@emotion/styled';

const SkChase = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
    margin: 50px auto 50px auto;

    @keyframes sk-chase {
        100% { transform: rotate(360deg); } 
    }
`;

const SkChaseDot = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2.0s infinite ease-in-out both; 

    @keyframes sk-chase-dot {
        80%, 100% { transform: rotate(360deg); } 
    }

    &::before {
        content: '';
        display: block;
        width: 25%;
        height: 25%;
        background-color: #fff;
        border-radius: 100%;
        animation: sk-chase-dot-before 2.0s infinite ease-in-out both;

        @keyframes sk-chase-dot-before {
            50% {
              transform: scale(0.4); 
            } 100%, 0% {
              transform: scale(1.0); 
            } 
        }
    }

    &:nth-of-type(1) {
        animation-delay: -1.1s;
        &:before { animation-delay: -1.1s; }
    }

    &:nth-of-type(2) { 
        animation-delay: -1.0s;
        &:before { animation-delay: -1.0s; }
    }

    &:nth-of-type(3) {
        animation-delay: -0.9s;
        &:before { animation-delay: -0.9s; }
    }
    
    &:nth-of-type(4) { 
        animation-delay: -0.8s; 
        &:before { animation-delay: -0.8s; }
    }

    &:nth-of-type(5) { 
        animation-delay: -0.7s;
        &:before { animation-delay: -0.7s; }
    }

    &:nth-of-type(6) { 
        animation-delay: -0.6s;
        &:before { animation-delay: -0.6s; }
    }
`;

const Spinner = () => (
    <SkChase>
        <SkChaseDot></SkChaseDot>
        <SkChaseDot></SkChaseDot>
        <SkChaseDot></SkChaseDot>
        <SkChaseDot></SkChaseDot>
        <SkChaseDot></SkChaseDot>
        <SkChaseDot></SkChaseDot>
    </SkChase>
);

export default Spinner;