# Clear Visibility Testing with Playwright

## Introduction
The tests in this project can be run against the Clear Visibility, Classic ASP.
Inside the [playwright.config.ts](/playwright.config.ts) file, you can find the configuration for the tests.  One of these properties is the base URL.
```typescript
    baseUrl: 'http://192.168.1.14/',w
```

This is the URL that the tests will run against.  You can change this to run the tests against different environments.

## Logging In
Also within the file mentioned above you can find the username and password being entered, this should be changed to the correct credentials.

## Playwright Tests
So that you can use the base URL each test should only go to a relative path like follows:

    ```typescript
    await page.goto('/');
    await page.goto('/views/?VREF=DataSets');
    ```
The first line will go to the homepage, and the 2nd line to the datasets.

Each test method should be added to the [classic.spec.ts](/classic.spec.ts) file.

If necessary you can create different files for different areas of the application. But they should have this same structure.

Within a file you can have further sections using the describe method:

```typescript
    describe('Navigation Section', () => {
        test('Test Name', async ({ page }) => {
            // Test code
        });
    });
```
Just put the tests within the describe method.

Just remember that each test should have one or more Expects, otherwise it's not really testing anything.

```typescript
    await expect(page.getByRole('heading', { name: 'A_Action' })).toBeVisible();
```

The above test will only pass if the heading of A_Action exists.