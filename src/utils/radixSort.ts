// O(n*k), n - length of array, k - length of largest number

// FIXME: one specified field of type number and other of any type
export type NumMap = { [key: string]: any };
export type NumMapArray = NumMap[];

const getDigit = (num: number, i: number): number => Math.floor(Math.abs(num) / 10 ** i) % 10;

const digitCount = (num: number): number => (num === 0 ? 1
  : Math.floor(Math.log10(Math.abs(num))) + 1);

const mostDigits = (nums: number[]): number => nums.length && nums
  .reduce((acc, num) => Math.max(acc, digitCount(num)));

const radixSort = <T extends NumMap>(
  arr: T[], sortByKey: string, isAscending: boolean = true,
): T[] => {
  const nums = arr.map((obj) => obj[sortByKey] || 0);
  const maxDigitCount = mostDigits(nums as number[]);

  for (let k = 0; k < maxDigitCount; k += 1) {
    const digitBuckets: NumMapArray[] = Array.from({ length: 10 }, () => []);

    arr.forEach((el) => {
      const digit = getDigit(el[sortByKey] as number || 0, k);
      digitBuckets[digit].push(el);
    });

    // eslint-disable-next-line
        (function flatten() {
      // eslint-disable-next-line no-param-reassign
      arr = [];
      const cb = (bucket: NumMapArray, current: NumMapArray): NumMapArray => {
        // eslint-disable-next-line no-param-reassign
        (arr as NumMapArray) = bucket.concat(current);
        return arr;
      };

      return isAscending
        ? digitBuckets.reduce(cb)
        : digitBuckets.reduceRight(cb);
    })();
  }

  return arr;
};

export default radixSort;
