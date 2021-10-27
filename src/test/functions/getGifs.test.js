import { getGifs } from "../../functions/getGifs";
import "@testing-library/jest-dom";

describe('Pruebas sobre la funcion getGifs', () => {
    test('debe devolver 10 gifs', async () => {

        const gifs = await getGifs('Dragon ball');

        expect(gifs.length).toBe(10);

    });

    test('Si no le pasamos ninguna categoría debe devolver un array vacío', async () => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    });
})