let data = {
    "questions": [
        {
            "title": "What is the value of sum at the of the loop ?",
            "code": "let sum = 0;\n\nfor (let i = 0; i <= 3; i++) {\n\tsum += i;\n}",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "3", "isCorrect": false
                },
                {
                    "answer": "0", "isCorrect": false
                },
                {
                    "answer": "undefined", "isCorrect": false
                },
                {
                    "answer": "6", "isCorrect": true
                }
            ]
        },
        {
            "title": "What will be displayed by console.log() ?",
            "code": "let sum;\n\nconsole.log(sum)",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "null", "isCorrect": false
                },
                {
                    "answer": "undefined", "isCorrect": true
                },
                {
                    "answer": "this code doesn't work", "isCorrect": false
                },
                {
                    "answer": "nothing", "isCorrect": false
                }
            ]
        },
        {
            "title": "What is the output of the following code ?",
            "code": `let str='hello';\nlet num=12;\n\nconsole.log(hello+num)`,
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "hello12", "isCorrect": true
                },
                {
                    "answer": "hello undefined", "isCorrect": false
                },
                {
                    "answer": "hello 12", "isCorrect": false
                },
                {
                    "answer": "It gives an error", "isCorrect": false
                }
            ]
        },
        {
            "title": "What does the following code do ?",
            "code": "let str;\n\nstr.charAt(0).toUpperCase() + str.slice(1);",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "It changes the whole string to uppercase", "isCorrect": false
                },
                {
                    "answer": "It changes the first letter to uppercase", "isCorrect": false
                },
                {
                    "answer": "It changes the string to and array of characters", "isCorrect": false
                },
                {
                    "answer": "It doesn't work", "isCorrect": true
                }
            ]
        },
        {
            "title": "What is the output of the following code ?",
            "code": "const array = ['hello', 'my', 'name', 'is', 'John'];\n\nconst result = array.filter(e => e.length >= 4)\n\n;console.log(result);",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "['is', 'my']", "isCorrect": false
                },
                {
                    "answer": "'hello', 'name', 'John'", "isCorrect": false
                },
                {
                    "answer": "['hello', 'name', 'John']", "isCorrect": true
                },
                {
                    "answer": "['is', 'my']", "isCorrect": false
                }
            ]
        },
        {
            "title": "What will the output of the following code be ?",
            "code": "const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];\n\nconsole.log(beasts.indexOf('bison', 2));\nconsole.log(beasts.indexOf('giraffe'));",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "2, 0", "isCorrect": false
                },
                {
                    "answer": "4, 0", "isCorrect": false
                },
                {
                    "answer": "1, -1", "isCorrect": false
                },
                {
                    "answer": "4, -1", "isCorrect": true
                }
            ]
        },
        {
            "title": "What is missing to display the weight in kg ?",
            "code": "var obj = {fn: 'Martin', ln: 'Harper', age: 26, weight: 48};\n\nvar {fn, ,ln, age, weight} = obj;\n\nvar newObj = {fn, ln, age, weight: /*MISSING CODE*/};",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "weight / 1000", "isCorrect": false
                },
                {
                    "answer": "weight + 'kg'", "isCorrect": true
                },
                {
                    "answer": "weight + kg", "isCorrect": false
                },
                {
                    "answer": "kg", "isCorrect": false
                }
            ]
        },
        {
            "title": "What is the output of the following code ?",
            "code": "const sentence = 'The quick brown fox jumps over the lazy dog.';\nconst word = 'fox';\n\nconsole.log(`The word '${word}' ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "'The word 'fox' is in the sentence'", "isCorrect": true
                },
                {
                    "answer": "'The word 'fox' is not in the sentence'", "isCorrect": false
                },
                {
                    "answer": "Nothing it doens't work", "isCorrect": false
                },
                {
                    "answer": "'The word 'word' sentence in the sentence'", "isCorrect": false
                }
            ]
        },
        {
            "title": "What is the output of the following code ?",
            "code": "const array1 = [1, 2, 3];\n\nconsole.log(array1.includes(2));",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "1", "isCorrect": true
                },
                {
                    "answer": "2", "isCorrect": false
                },
                {
                    "answer": "3", "isCorrect": false
                },
                {
                    "answer": "0", "isCorrect": false
                }
            ]
        },
        {
            "title": "What happens to the first array ?",
            "code": "let tab1 = ['Hello'];\nlet tab2 = tab1;\n\ntab2.push('World')",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Nothing", "isCorrect": false
                },
                {
                    "answer": "Value is never read", "isCorrect": false
                },
                {
                    "answer": "It is ignored since we are changing tab1", "isCorrect": false
                },
                {
                    "answer": "It gets changed along with tab2", "isCorrect": true
                }
            ]
        },
        {
            "title": "What are JavaScript datatypes ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Number, String, Boolean, Object", "isCorrect": false
                },
                {
                    "answer": "Number, String, Boolean, Object, Undefined", "isCorrect": true
                },
                {
                    "answer": "Number, String, Boolean", "isCorrect": false
                },
                {
                    "answer": "Number, String, Boolean, Object, Array", "isCorrect": false
                }
            ]
        },
        {
            "title": "How do you declare an unchangeable variable ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "let varName", "isCorrect": false
                },
                {
                    "answer": "var varName", "isCorrect": false
                },
                {
                    "answer": "const varName", "isCorrect": true
                },
                {
                    "answer": "...varName", "isCorrect": false
                }
            ]
        },
        {
            "title": "How do you extract a specific key's value from an object ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "let { status } = user", "isCorrect": true
                },
                {
                    "answer": "let status = user", "isCorrect": false
                },
                {
                    "answer": "let { status } = user()", "isCorrect": false
                },
                {
                    "answer": "let [ status ] = user", "isCorrect": false
                }
            ]
        },
        {
            "title": "How do you declare an arrow function ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "function funcName => (args) {}", "isCorrect": false
                },
                {
                    "answer": "var funcName = (args) => {}", "isCorrect": true
                },
                {
                    "answer": "funcName => (args) {}", "isCorrect": false
                },
                {
                    "answer": "function funcName(args) => {}", "isCorrect": false
                }
            ]
        },
        {
            "title": "What is an Object in JavaScript ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "It doesn't exist in JavaScript", "isCorrect": false
                },
                {
                    "answer": "It is the same as an array", "isCorrect": false
                },
                {
                    "answer": "It is a two dimentional array", "isCorrect": false
                },
                {
                    "answer": "It stores various keyed collections entities", "isCorrect": true
                }
            ]
        },
        {
            "title": "Which type of scope doesn't exist in JavaScript ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Global Scope", "isCorrect": false
                },
                {
                    "answer": "Block Scope", "isCorrect": false
                },
                {
                    "answer": "Local or Function Scope", "isCorrect": false
                },
                {
                    "answer": "Variable Scope", "isCorrect": true
                }
            ]
        },
        {
            "title": "What is the difference between Static typing and Dynamic typing ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "There is no difference", "isCorrect": false
                },
                {
                    "answer": "The the former's type can be changed", "isCorrect": false
                },
                {
                    "answer": "The latter's type can be changed", "isCorrect": true
                },
                {
                    "answer": "Both don't exist", "isCorrect": false
                }
            ]
        },
        {
            "title": "How do you call an function taking another function as argument ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "A regular function", "isCorrect": false
                },
                {
                    "answer": "An arrow function", "isCorrect": false
                },
                {
                    "answer": "A higher order function", "isCorrect": true
                },
                {
                    "answer": "A parent function", "isCorrect": false
                }
            ]
        },
        {
            "title": "Which of the following isn't a JavaScript prototype ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "Date", "isCorrect": false
                },
                {
                    "answer": "const", "isCorrect": true
                },
                {
                    "answer": "Math", "isCorrect": false
                },
                {
                    "answer": "Array", "isCorrect": false
                }
            ]
        },
        {
            "title": "How yo make a real array's copy in JavaScript ?",
            "code": "",
            "isFrench": false,
            "topic": "JavaScript",
            "answers": [
                {
                    "answer": "let tab = [... arrayName]", "isCorrect": true
                },
                {
                    "answer": "let tab = [arrayName]", "isCorrect": false
                },
                {
                    "answer": "let tab = arrayName", "isCorrect": false
                },
                {
                    "answer": "let tab = [..., arrayName]", "isCorrect": false
                }
            ]
        }
    ]
}
module.exports = data;
