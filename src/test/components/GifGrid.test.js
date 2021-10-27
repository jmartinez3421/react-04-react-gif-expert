import "@testing-library/jest-dom";
import { shallow } from 'enzyme';
import React from 'react';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas sobre el componente <GifGrid />', () => {
    const categories = [];
    const setCategories = () => {jest.fn()};
    const category = '';

    test('el componente debe renderizarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} categories={categories} setCategories={setCategories} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagenes con nuestro useFetchGifs', () => {

        const gifs = [{
            id: 'adfdfas',
            url: 'https://google.es',
            title: 'Google'
        },
        {
            id: '1234',
            url: 'https://google.es',
            title: 'Google'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} categories={categories} setCategories={setCategories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length );
    })
})