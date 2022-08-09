# Angular Todo App - Implementing Redux Pattern

<p>Todo App using good practices and managing the state using NGRX</p>

## Used Technology 

- [Angular 14.10](http://angular.io/)
- [Ngrx 14](https://ngrx.io/)
- [Todo MVC Style](https://www.npmjs.com/package/todomvc-app-css)

## Project Structure
<p>modules are grouped by functionality</p>

>**State** => Ngrx (actions / reducer by folders).

>**Todos** => Models, Pages (Views).

>**Shared** => Module with reusable code like pipes.

## Good Practices
- **App.Module** => imports group by library, StoreModule imports a ts file to avoid a big list.
- Group functionality in folder so everything is together.
- Avoid the use of any by specifying all variable types.
- Prevent array or object mutation by returning a new object.
- create a shared module with functionality to be export as global functionality like filter pipe (DRY).

## Links

- [Project GitHubPage](https://oliverdjbrown.github.io/Angular-Todo-App-Ngrx/)

- [Project Code](https://github.com/oliverdjbrown/Angular-Todo-App-Ngrx)

- [My LinkedIn Profile](https://www.linkedin.com/in/oliverdjbrown/)
