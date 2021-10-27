import "@testing-library/jest-dom";
import { shallow } from 'enzyme';
import React from 'react';
import AddCategory from '../../components/AddCategory';

describe('Pruebas sobre el componente <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        //Ejecutamos esta función para limpiar todos los valores antes de cada test
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe llamar a handleInputChange cuando haya un cambio en el input', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: {value: value}});

        const pInputValue = wrapper.find('p');
        expect(pInputValue.text().trim()).toBe(value);
    });

    test('no debe de postear la información on submit si está vacío', () => {
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe llamar el setCategories y limpiar la caja de texto', () => {

        wrapper.find('input').simulate('change', {target: {value:'Simulo input change'}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})