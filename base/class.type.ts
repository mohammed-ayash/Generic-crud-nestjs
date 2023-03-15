export type ClassType<T = any> = new (...args: any[]) => T;


/*
This is TypeScript code that defines a type alias named ClassType.

The ClassType type is a generic type that can take any type T as a parameter, with a default value of any. It represents a constructor function that can create instances of type T. The new keyword indicates that it's a constructor function.

The constructor function takes in any number of arguments of any type (using the ...args: any[] syntax). The return value of the constructor is an instance of type T.

This ClassType type is useful when you want to create new instances of a class dynamically or when you want to define a function that takes a constructor function as a parameter.
*/