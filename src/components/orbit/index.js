import React from 'react';
import { Container, Planet } from './styles/orbit';


export default function Orbit({ children, ...restProps }) {
    return <Container { ...restProps }>{ children  }</Container>
} 

Orbit.Planet = function OrbitPlanet({ children, ...restProps }) {
    return <Planet { ...restProps }>{ children }</Planet>
}