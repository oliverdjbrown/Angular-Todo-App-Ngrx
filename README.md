# Angular Todo App - Implementing Redux Pattern

<p>Todo App using good practices and managing the state using NGRX</p>

## Used Technology 

- [Angular 14.10](http://angular.io/)
- [Ngrx 14](https://ngrx.io/)
- [Todo MVC Style](https://www.npmjs.com/package/todomvc-app-css)

## Project Structure
<p>Modules are grouped by functionality</p>

>**State** => Ngrx (actions / reducer by folders).

>**Todos** => Models, Pages (Views).

>**Core** => Main Services, Enums.

>**Shared** => Module with reusable code like UI components and pipes.

## Good Practices

- **APP**
- Atomic Designe (Smart and Dumbs Components)

- **App.Module** 
- Imports group by library, StoreModule imports a ts file to avoid a big list.
- Group functionality in folder so everything is together.
- Avoid the use of any by specifying all variable types.
- Prevent array or object mutation by returning a new object.

- **App.Shared**
- Create a shared module with functionality to be export as global functionality like UI components or filter pipe (DRY).
- Group components and pipes in an individual array for easy import and export.

- **Core.Module**
- Main services by library for high cohesion and low coupling

## Links

- [Project GitHubPage](https://oliverdjbrown.github.io/Angular-Todo-App-Ngrx/)

- [Project Code](https://github.com/oliverdjbrown/Angular-Todo-App-Ngrx)

- [My LinkedIn Profile](https://www.linkedin.com/in/oliverdjbrown/)
