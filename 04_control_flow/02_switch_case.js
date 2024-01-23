// SWITCH CASE STATEMENT

// SYNTAX

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3;

switch (month) {
    case 1: console.log('January');
        break;
    case 2: console.log('February');
        break;
    case 3: console.log('March');
        break;
    case 4: console.log('April');
        break;
    case 5: console.log('May');
        break;
    case 6: console.log('June');
        break;
    case 7: console.log('January');
        break;
    case 8: console.log('January');
        break;
    case 9: console.log('January');
        break;
    case 10: console.log('January');
        break;
    case 11: console.log('January');
        break;
    case 12: console.log('January');
        break;
    default: console.log(`Sorry Not Month Found`);
        break;
}

// if we do not use break then the point where the case is matched it prints all the case values but not default