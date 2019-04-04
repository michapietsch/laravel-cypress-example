# Demo of Laravel and Cypress with a dedicated testing database and seeding

Please follow the commits to review the steps taken.

_Features:_

-   swapping out the environment to use a dedicated database
-   refresh and seed the database before running the tests
-   programatically log in an existing user

You may notice that I refresh and seed the database only once. Then I run multiple tests. This is usually considered an anti-pattern. Tests should not build up on the state that previous tests left behind. I think in this case it's fine. That's because these tests don't alter the data, there are only a few and the test suite starts in a controlled state. So far everything is perfectly predictable. You can refresh the database before every single test. Running all tests will then take longer. I would probably split a larger suite into multiple spec files and refresh the database before running each. &mdash; I highly recommend the Cypress guides, especially the [best practices overview](https://docs.cypress.io/guides/references/best-practices.html).

## License

Built on top of [Laravel](https://github.com/laravel/laravel). Laravel is licensed under the MIT license and so is all this code.
