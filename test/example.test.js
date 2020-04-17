// IMPORT MODULES under test here:
// import example from '../src/example.js';
import makeUser from '../make-user.js'; 

const test = QUnit.test;

test('makes a user object in plain js from form data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData(); 

    formData.set('name', 'breeann');
    formData.set('class', 'zoo');

    const expected = {
        name: 'breeann',
        class: 'zoo',
        completed: {},
        hp: 50, 
        tigers: 0, 
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const userObject = makeUser(formData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, userObject);
});



test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, true);
});

