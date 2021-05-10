const reverse = (str) => str.split('').reverse().join('');

test('reverse', () => {
  expect(reverse('hello')).toBe('olleh');
});
