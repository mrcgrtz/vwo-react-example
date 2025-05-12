import { expect, test } from 'vitest'
import App from '../root.tsx'

test('App', () => {
    expect(App).toBeDefined();
    expect(App).toMatchSnapshot();
});
