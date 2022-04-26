const Engineer = require ('../lib/Engineer');

test ('create an engineer gitHub and return of Manager', () => {
    const manager = new Manager('Bob', 1, 'test@test.com', 123);

    expect(engineer.github).toBe('banana');
    expect(engineer.github()).toBe('banana');
    expect(engineer.getRole()).toBe('Engineer');
})