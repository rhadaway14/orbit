import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 300px;
    height: 300px;

    &:hover span:before {
        transform-origin: 250px;
        box-shadow: 0 0 20px #00efff,
        -200px -200px 0 #00efff,
        -200px -200px 20px #00efff,
        200px 200px 0px #00efff,
        200px 200px 20px #00efff,
        200px -200px 0px #00efff,
        200px -200px 20px #00efff,
        -200px 200px 0px #00efff,
        -200px 200px 20px #00efff;
    }
`;

export const Planet = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // transform: rotate(calc(36deg * var(--i)));
    transform: rotate(calc(360deg / var(--j)  * var(--i)));

    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: transparent;
        border: 4px solid #00efff;
        box-sizing: border-box;
        box-shadow: 0 0 20px #00efff,
        -30px -30px 0 #00efff,
        -30px -30px 20px #00efff,
        30px 30px 0px #00efff,
        30px 30px 20px #00efff,
        30px -30px 0px #00efff,
        30px -30px 20px #00efff,
        -30px 30px 0px #00efff,
        -30px 30px 20px #00efff;
        animation: animate 5s linear infinite;
        animation-delay: calc(-0.25s * var(--i));
        transform-origin: 20px;
        transition: 2s;
    
    @keyframes animate {
        0% {
            transform: rotate(0deg);
            filter: hue-rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
            filter: hue-rotate(360deg);
        }
    }
    
}

`;

