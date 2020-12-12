import styled from 'styled-components';

export const flexBoxMixin = (direction, justify, align, wrap) => {
    return `
    display: flex;
    flex-direction: ${direction || 'row'};
    justify-content: ${justify || 'flex-start'};
    align-items: ${align || 'flex-start'};
    flex-wrap: ${wrap || 'wrap'};
    `;
};

export const ColumnContainer = styled.div.attrs(props => ({
    justify: props.justify || 'flex-start',
    align: props.align || 'stretch',
    padding: props.padding || 0,
}))`
    padding: ${props => props.padding};
    ${props => flexBoxMixin('column', props.justify, props.align)};
`;

export const RowContainer = styled.div.attrs(props => ({
    justify: props.justify || 'flex-start',
    align: props.align || 'flex-start',
    padding: props.padding || 0,
}))`
    padding: ${props => props.padding};
    ${props => flexBoxMixin('row', props.justify, props.align)}
`;

export const Center = styled.div `
    font-family: 'Montserrat', sans-serif;
    color: #fdfdfd;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: #83C5BE no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;