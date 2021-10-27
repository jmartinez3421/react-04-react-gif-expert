import React from 'react'
import "@testing-library/jest-dom"
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('Pruebas sobre el componente GifGridItem', () => {
    
    const url = 'https://media3.giphy.com/media/xT9DPpf0zTqRASyzTi/giphy.gif';
    const title = 'darth vader father GIF by Star Wars';
    const wrapper = shallow(<GifGridItem url={url} title={title} />);

    test('El componente debe verse correctamente', () => {      

        expect(wrapper).toMatchSnapshot();
    });

    test('debe haber un parrafo con el titulo', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('debe tener la imagen con la url y el title igual que los props', () => {
        const img = wrapper.find('img');

        const {src, alt} = img.props();

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('el div debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');

        const {className} = div.props();

        expect(className).toContain('animate__fadeIn');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
})