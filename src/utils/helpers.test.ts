/* global describe it expect  */
import { getPageNumbers, formatDate, saveInSessionStorage } from 'utils/helpers';

describe('getPageNumbers', () => {
  it('limit the left edge', () => {
    expect(getPageNumbers(1, 20, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(getPageNumbers(2, 20, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(getPageNumbers(3, 20, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(getPageNumbers(4, 20, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(getPageNumbers(5, 20, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('shift left and right edge by one', () => {
    expect(getPageNumbers(6, 20, 10)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(getPageNumbers(7, 20, 10)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(getPageNumbers(8, 20, 10)).toEqual([4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    expect(getPageNumbers(9, 20, 10)).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    expect(getPageNumbers(10, 20, 10)).toEqual([6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    expect(getPageNumbers(11, 20, 10)).toEqual([7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    expect(getPageNumbers(12, 20, 10)).toEqual([8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
    expect(getPageNumbers(13, 20, 10)).toEqual([9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    expect(getPageNumbers(14, 20, 10)).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
    expect(getPageNumbers(15, 20, 10)).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });

  it('limit the right edge', () => {
    expect(getPageNumbers(15, 20, 10)).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    expect(getPageNumbers(16, 20, 10)).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    expect(getPageNumbers(17, 20, 10)).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    expect(getPageNumbers(18, 20, 10)).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    expect(getPageNumbers(19, 20, 10)).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    expect(getPageNumbers(20, 20, 10)).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});

describe('formatDate', () => {
  it('format in English', () => {
    expect(formatDate('2020-06-14T09:33:48Z', 'en')).toEqual('June 14, 2020, 12:33');
    expect(formatDate('2019-07-15T08:45:03Z', 'en')).toEqual('July 15, 2019, 11:45');
  });

  it('format in Russian', () => {
    expect(formatDate('2020-06-14T09:33:48Z', 'ru')).toEqual('14 июня 2020 г., 12:33');
    expect(formatDate('2019-07-15T08:45:03Z', 'ru')).toEqual('15 июля 2019 г., 11:45');
  });
});

describe('saveInSessionStorage', () => {
  it('set and get the same value', () => {
    saveInSessionStorage('currentPage', 10.0.toString());
    expect(sessionStorage.getItem('currentPage')).toEqual('10');

    saveInSessionStorage('searchTerm', 'Jest');
    expect(sessionStorage.getItem('searchTerm')).toEqual('Jest');
  });
});
