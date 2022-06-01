import React, { useState, Context } from 'react';
import Orbit from '../components/orbit'

export default function Main() {
    var num = [...Array(10).keys()]
    num.shift()
    num.push(Math.max(...num) +1)
    var m = Math.max(...num)
    console.log(num)
    return (
        <>
            <Orbit>
                { num !== undefined ? num.map(n => (
                <Orbit.Planet style={{"--i": n, "--j": m}} ></Orbit.Planet>)
                ): null}
            </Orbit>
        </>
    )
}