## Behind the scenes when the `new` keyword is used

- ### A `new` object is created
    - The `new` keyword initiates the creation of a new javascript object.

- ### A prototype is linked
    - The newly created object gets linked to the `prototype` property of the constructor function.
    - This means that is has access to the propertoes and methods defined on the constructor's prototype.

- ### The constructor is called
    - The constructor  function is called with the specified with the arguments and this is bound to the newly created object.
    - If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

- ### The new object is returned
    - After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.