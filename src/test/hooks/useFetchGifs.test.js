import React from 'react';
import "@testing-library/jest-dom";
import useFetchGifs from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas sobre el customHook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async () => {
        const category = 'Dragon ball';
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs(category) );

        const {data, loading} = result.current;

        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe devolver un array de imagenes y el loading en false', async () => {
        const category = 'Dragon ball';
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs(category) );

        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
    
})