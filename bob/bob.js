//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
    let response = 'Whatever.',
        regEx = message.match(/[a-zA-Z]+/g);

    if (message.replace(/\s/g, '') === '') {
      response = 'Fine. Be that way!';
    } else if (message.endsWith('?')) {
      if (regEx && regEx[0] === regEx[0].toUpperCase()) {
        response = 'Whoa, chill out!'
      } else {
        response = 'Sure.';
      }
    } else if (message === message.toUpperCase() && regEx) {
      response = 'Whoa, chill out!';
    }

    return response;
  }
}

export default Bob;
