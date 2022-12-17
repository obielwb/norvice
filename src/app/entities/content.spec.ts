import { Content } from "./content";

test('it should be able to create a notificaton content', () => {
  const content = new Content('Hello World');
  expect(content.value).toBe('Hello World');
})

test('it should not be able to create a notification content with less then 5 characters', () => {
  expect(() => new Content('12')).toThrow('Content length must be between 5 and 255 characters');
})

test('it should not be able to create a notification content with more then 5 characters', () => {
  expect(() => new Content('a'.repeat(256))).toThrow('Content length must be between 5 and 255 characters');
})