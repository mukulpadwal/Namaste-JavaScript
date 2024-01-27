# DOM Selection

### Selecting Element by ID
- SYNTAX : document.getElementById(param);
- `document.getElementById('id');`
    - it returns element
    - getting class name of this element
        - `.className`
    - getting attributes of this element
        - `.getAttribute('attrName')`
    - setting attributes of this element
        - `.setAttribute('attrName', 'value')`
        - remember it will always ovverride the current value
    - styling the element
        - `.style.key = value`
        - remeber here it takes key in camelCase not kebab case
    - getting and adding content
        - `.textContent` : returns us all the content even the hidden one.
        - `.innerHTML` : returns us the content and html tags also.
        - `.innerText` : returns us the visible text only.

### Selecting Elements by ClassName
- SYNTAX : document.getElementsByClassName(props);
- `document.getElementsByClassName('class')`
    - returns HTMLCollection of all the matching elements


### querySelector()
- SYNTAX : document.querySelector(props)
- props can be id, class, tag
- `document.querySelector('.class');`
- `document.querySelector('#ud');`
- `document.querySelector('tag');`