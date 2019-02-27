require('../src/data.js');
let pokemonObj;
describe('filterData()', () => {
  it('should filter Pokemon by type', () => {
   expect(typeof window.kantodex.filterData()).toBe('function');
  });

  it('debería devolver Pikachu para tipo Electric', () => {
    expect(window.kantodex.filterData(pokemonObj,'Electric')).toBe('Pikachu');
  });
});

