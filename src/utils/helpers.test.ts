/* global describe it expect  */
import { generatePagesNumeration, formatDate, saveInSessionStorage } from 'utils/helpers';

describe('getPageNumbers', () => {
  it('limit the left edge', () => {
    expect(generatePagesNumeration(1, 20, 8)).toEqual([0, 1, 2, 3, 4, 5, 6, 'next-more', 19]);
    expect(generatePagesNumeration(2, 20, 8)).toEqual([0, 1, 2, 3, 4, 5, 6, 'next-more', 19]);
    expect(generatePagesNumeration(3, 20, 8)).toEqual([0, 1, 2, 3, 4, 5, 6, 'next-more', 19]);
    expect(generatePagesNumeration(4, 20, 8)).toEqual([0, 1, 2, 3, 4, 5, 6, 'next-more', 19]);
  });

  it('shift left and right edge', () => {
    expect(generatePagesNumeration(5, 20, 8)).toEqual([0, 'prev-more', 3, 4, 5, 6, 7, 'next-more', 19]);
    expect(generatePagesNumeration(6, 20, 8)).toEqual([0, 'prev-more', 4, 5, 6, 7, 8, 'next-more', 19]);
    expect(generatePagesNumeration(7, 20, 8)).toEqual([0, 'prev-more', 5, 6, 7, 8, 9, 'next-more', 19]);
    expect(generatePagesNumeration(8, 20, 8)).toEqual([0, 'prev-more', 6, 7, 8, 9, 10, 'next-more', 19]);
    expect(generatePagesNumeration(9, 20, 8)).toEqual([0, 'prev-more', 7, 8, 9, 10, 11, 'next-more', 19]);
    expect(generatePagesNumeration(10, 20, 8)).toEqual([0, 'prev-more', 8, 9, 10, 11, 12, 'next-more', 19]);
    expect(generatePagesNumeration(11, 20, 8)).toEqual([0, 'prev-more', 9, 10, 11, 12, 13, 'next-more', 19]);
    expect(generatePagesNumeration(12, 20, 8)).toEqual([0, 'prev-more', 10, 11, 12, 13, 14, 'next-more', 19]);
    expect(generatePagesNumeration(13, 20, 8)).toEqual([0, 'prev-more', 11, 12, 13, 14, 15, 'next-more', 19]);
    expect(generatePagesNumeration(14, 20, 8)).toEqual([0, 'prev-more', 12, 13, 14, 15, 16, 'next-more', 19]);
    expect(generatePagesNumeration(15, 20, 8)).toEqual([0, 'prev-more', 13, 14, 15, 16, 17, 'next-more', 19]);
  });

  it('limit the right edge', () => {
    expect(generatePagesNumeration(16, 20, 8)).toEqual([0, 'prev-more', 14, 15, 16, 17, 18, 19]);
    expect(generatePagesNumeration(17, 20, 8)).toEqual([0, 'prev-more', 14, 15, 16, 17, 18, 19]);
    expect(generatePagesNumeration(18, 20, 8)).toEqual([0, 'prev-more', 14, 15, 16, 17, 18, 19]);
    expect(generatePagesNumeration(19, 20, 8)).toEqual([0, 'prev-more', 14, 15, 16, 17, 18, 19]);
    expect(generatePagesNumeration(20, 20, 8)).toEqual([0, 'prev-more', 14, 15, 16, 17, 18, 19]);
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
