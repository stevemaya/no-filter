const {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
} = require('./main.js')


describe('onlyOdds', () => {
  it(`given an array of numbers, returns an array with only those numbers that are odd`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    expect(onlyOdds(nums1)).toEqual([1, 3]);
    expect(onlyOdds([5, 101, 0, 7])).toEqual([5, 101, 7]);
  })

  it(`does not modify the original array`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    const original1 = [1, 2, 3, 4];
    const original2 = [5, 101, 0, 7];
    onlyOdds(nums1);
    onlyOdds(nums2);
    expect(nums1).toEqual(original1);
    expect(nums2).toEqual(original2);
  });
})

describe('onlyEvens', () => {
  it(`given an array of numbers, returns an array with only those numbers that are even`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    expect(onlyEvens(nums1)).toEqual([2, 4]);
    expect(onlyEvens([5, 101, 0, 7])).toEqual([0]);
  })

  it(`does not modify the original array`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    const original1 = [1, 2, 3, 4];
    const original2 = [5, 101, 0, 7];
    onlyEvens(nums1);
    onlyEvens(nums2);
    expect(nums1).toEqual(original1);
    expect(nums2).toEqual(original2);
  });
})

describe('shortNamesOnly', () => {
  it(`given an array of names, returns only those that are fewer than 7 characters long`, () => {
    const names1 = [
      'Colin',
      'Mesuara',
      'Chase',
      'Dallas',
      'Crystal',
      'Marc',
      'Miley',
      'Sharod',
    ];

    const shortNames1 = [
      'Colin',
      'Chase',
      'Dallas',
      'Marc',
      'Miley',
      'Sharod',
    ];

    const names2 = [
      'LaToddra',
      'Deaundre',
      'Daniel',
      'Carlos',
      'Francis',
      'Prem',
      'Jumary',
    ];

    const shortNames2 = [
      'Daniel',
      'Carlos',
      'Prem',
      'Jumary',
    ]


    expect(shortNamesOnly(names1)).toEqual(shortNames1);
    expect(shortNamesOnly(names2)).toEqual(shortNames2);
  })

  it(`does not modify the original array`, () => {
    const original1 = [
      'Colin',
      'Mesuara',
      'Chase',
      'Dallas',
      'Crystal',
      'Marc',
      'Miley',
      'Sharod',
    ];

    const original2 = [
      'LaToddra',
      'Deaundre',
      'Daniel',
      'Carlos',
      'Francis',
      'Prem',
      'Jumary',
    ];

    const names1 = [
      'Colin',
      'Mesuara',
      'Chase',
      'Dallas',
      'Crystal',
      'Marc',
      'Miley',
      'Sharod',
    ];

    const names2 = [
      'LaToddra',
      'Deaundre',
      'Daniel',
      'Carlos',
      'Francis',
      'Prem',
      'Jumary',
    ];

    shortNamesOnly(names1);
    shortNamesOnly(names2);
    expect(names1).toEqual(original1);
    expect(names2).toEqual(original2);
  });
});

describe('sNames', () => {
  it(`returns only the names that begin with a capital S`, () => {
    const names1 = [
      'Colin',
      'Mesuara',
      'Patrick',
      'Fernando',
      'Nicholas',
      'Ilyas',
      'Sonny',
      'Steve',
      'Greg',
      'Timothy',
    ];

    const sNames1 = [
      'Sonny',
      'Steve',
    ];

    const names2 = [
      'Superman',
      'Spiderman',
      'Batman',
      'Wonderman',
    ];

    const sNames2 = [
      'Superman',
      'Spiderman',
    ];
    
    expect(sNames(names1)).toEqual(sNames1);
    expect(sNames(names2)).toEqual(sNames2);
  });

  it(`does not modify the original array`, () => {
    const original1 = [
      'Colin',
      'Mesuara',
      'Chase',
      'Dallas',
      'Crystal',
      'Marc',
      'Miley',
      'Sharod',
    ];

    const original2 = [
      'LaToddra',
      'Deaundre',
      'Daniel',
      'Carlos',
      'Francis',
      'Prem',
      'Jumary',
    ];

    const names1 = [
      'Colin',
      'Mesuara',
      'Chase',
      'Dallas',
      'Crystal',
      'Marc',
      'Miley',
      'Sharod',
    ];

    const names2 = [
      'LaToddra',
      'Deaundre',
      'Daniel',
      'Carlos',
      'Francis',
      'Prem',
      'Jumary',
    ];

    sNames(names1);
    sNames(names2);
    expect(names1).toEqual(original1);
    expect(names2).toEqual(original2);
  });
});
