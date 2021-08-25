import {
  formatArea,
  formatPrice,
  formatBathroom,
  formatAddress,
  formatListDate,
} from './formatter';

describe('utils/formatter.js', () => {
  it('formatArea() ', () => {
    expect(formatArea(1234)).toEqual('1200');
    expect(formatArea(12345)).toEqual('12300');
    expect(formatArea(12)).toEqual('12');
    expect(formatArea(0)).toEqual('0');
  });

  it('formatPrice() ', () => {
    expect(formatPrice(100)).toEqual('$100');
    expect(formatPrice(104869)).toEqual('$104,869');
    expect(formatPrice(1104869)).toEqual('$1,104,869');
    expect(formatPrice(12104869)).toEqual('$12,104,869');
  });

  it('formatBathroom() ', () => {
    expect(formatBathroom(0, 0)).toEqual('0');
    expect(formatBathroom(1, 0)).toEqual('1');
    expect(formatBathroom(2, 0)).toEqual('2');
    expect(formatBathroom(3, 0)).toEqual('3');

    expect(formatBathroom(0, 1)).toEqual('0.5');
    expect(formatBathroom(1, 1)).toEqual('1.5');
    expect(formatBathroom(2, 1)).toEqual('2.5');
    expect(formatBathroom(3, 1)).toEqual('3.5');

    expect(formatBathroom(0, 2)).toEqual('1');
    expect(formatBathroom(1, 2)).toEqual('2');
    expect(formatBathroom(2, 2)).toEqual('3');
    expect(formatBathroom(3, 2)).toEqual('4');

    expect(formatBathroom(0, 3)).toEqual('1.5');
    expect(formatBathroom(1, 3)).toEqual('2.5');
    expect(formatBathroom(2, 3)).toEqual('3.5');
    expect(formatBathroom(3, 3)).toEqual('4.5');
  });

  it('formatListDate() ', () => {
    expect(formatListDate('2021-05-23T18:50:30.184391Z')).toEqual('5/23/21');
    expect(formatListDate('2021-12-11T18:50:30.184391Z')).toEqual('12/11/21');
    expect(formatListDate('2021-12-01T18:50:30.184391Z')).toEqual('12/1/21');
  });

  it('formatAddress() ', () => {
    const propertyAddress = {
      city: 'Houston',
      country: 'United States',
      postalCode: '77096',
      state: 'Texas',
      streetName: 'East Sweet Bottom Br',
      streetNumberText: '74434',
    };
    expect(formatAddress(propertyAddress)).toEqual(
      '74434 East Sweet Bottom Br, Houston, TX',
    );
  });
});
