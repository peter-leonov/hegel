(this.webpackJsonp=this.webpackJsonp||[]).push([[10],{1319:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return c}));t(17),t(4),t(3),t(1),t(12),t(10),t(22);var r=t(59),a=t(65);t(36);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/function-types.mdx"}});var u={_frontmatter:i},s=a.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(s,o({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"function-types"},"Function Types"),Object(r.b)("hr",null),Object(r.b)("p",null,"Functions have two places where you can annotate types: arguments (input) and the return value (output)."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'// Function Declaration\nfunction sum1(a: number, b: number): number {\n  return a + b;\n}\n\n// Function Expression\nconst sum2 = function (a: number, b: number): number {\n  return a + b;\n}\n\n// Arrow Function Expression\nconst sum3 = (a: number, b: number): number => a + b;\n\nsum1(1, 2) // 👌!\nsum2(1, 2) // 👌!\nsum3(1, 2) // 👌!\n\n// Error: Type "false" is incompatible with type "number"\nsum1(false, "");\n\n// Error: Type "\'\'" is incompatible with type "number"\nsum2("", 4);\n\n// Error: Type "\'1\'" is incompatible with type "number"\nsum3("1", "2");\n')),Object(r.b)("h2",{id:"function-returns"},"Function Returns"),Object(r.b)("p",null,"As you understand, arguments types will be checked when you try to apply arguments to a function, but return type will be checked when you implement function logic. "),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function awesome(name: string): string {\n\n  // Error: Type "2" is incompatible with type "string"\n  return 2;\n}\n')),Object(r.b)("p",null,"Return types ensure that every ",Object(r.b)("inlineCode",{parentName:"p"},"return")," will be called with the same type. This prevents you from accidentally not returning a value under certain conditions."),Object(r.b)("h2",{id:"optional-and-default-argument"},"Optional and Default Argument"),Object(r.b)("p",null,"All arguments are required by default, but as was mentioned in ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/optional-types"}),"Optional Types"),", if you annotate some argument as optional type then this argument will become optional:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function awesome(name: ?string) {\n  const actualName = name === undefined ? "you" : name;\n  return `Awesome, ${actualName}.`;\n}\n\nawesome()             // 👌!\nawesome("JavaScript") // 👌!\n')),Object(r.b)("p",null,"In JavaScript, we can also set a default value for optional arguments like this:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function awesome(name = "you") {\n  return `Awesome, ${name}.`;\n}\n')),Object(r.b)("p",null,"So, which type should the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," argument be annotated with? You can see this demonstrated in the ",Object(r.b)("a",o({parentName:"p"},{href:"/try#GYVwdgxgLglg9mABAQwO4FMDOcC26AUYyeAXIplAE4xgDmiAvIgEQCecIzAlIgN4BQiRJXRQQlJAAMAghmx4ANIgAkvIngC+AOkkBufhqA"}),"Hegel Playground"),".\nIf you hover over the function name and then on the argument name, you will see some magic; the function argument is ",Object(r.b)("inlineCode",{parentName:"p"},"string | undefined")," outside the function but ",Object(r.b)("inlineCode",{parentName:"p"},"string")," inside."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'// awesome: (string | undefined) => string\nfunction awesome(name: string = "you") {\n  return `Awesome, ${name}.`;\n}\n\nawesome()             // 👌!\nawesome("JavaScript") // 👌!\n')),Object(r.b)("h2",{id:"rest-argument"},"Rest Argument"),Object(r.b)("p",null,"Sometimes, you don't know how many arguments will be applied to the function. JavaScript supports rest arguments. The rest operator '...' groups all applied arguments in an array of arguments."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"function sum(...numbers) {\n  // ...\n}\n")),Object(r.b)("p",null,"In Hegel you can annotate this argument the same as other arguments, but with a constraint. The type of this rest argument should be an ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/array-types"}),Object(r.b)("inlineCode",{parentName:"a"},"Array")," type")," or ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/tuple-types"}),"tuple type")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"function sum(...numbers: Array<number>) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\n\nsum();             // 👌!\nsum(1);            // 👌!\nsum(1, 2);         // 👌!\nsum(1, 2, 42);     // 👌!\nsum(1, 2, 42, 14); // 👌!\n// ...\n")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function sum(...numbers: [number] | [number, number] | [number, number, number]) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\n\n// Error: Type "[]" is incompatible with type "...[number, number, number] | [number, number] | [number]"\nsum();\nsum(1);       // 👌!\nsum(1, 2);    // 👌!\nsum(1, 2, 3); // 👌!\n\n// Error Type "[1, 2, 3, 4]" is incompatible with type "...[number, number, number] | [number, number] | [number]"\nsum(1, 2, 3, 4);\n')),Object(r.b)("h2",{id:"function-types-1"},"Function Types"),Object(r.b)("p",null,"Sometimes, you need to annotate arguments or return types as a function. Hegel has syntax for function type annotation ",Object(r.b)("inlineCode",{parentName:"p"},"(type1, type2) => returnType"),". For example:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function twice(fn: (number) => number, arg: number) {\n   return fn(fn(arg)); \n}\n\ntwice((a: number): number => a + 4, 4); // 👌!\ntwice(                                  // 👌!\n  (a: number | string): number => (typeof a === "string" ? parseInt(a) : a) + 4,\n  4\n); \n\n// Error: Type "(string) => number" is incompatible with type "(number) => number"\ntwice((a: string): number => parseInt(a), 4);\n\n// Error: Type "(number) => string" is incompatible with type "(number) => number"\ntwice((a: number): string => String(a), 4);\n\n// Error: Type "(number) => number | string" is incompatible with type "(number) => number"\ntwice((a: number): number | string => a, 4);\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you play with the previous example you will see the next rule of the function type:\nYou can assign one function to another only if the actual argument types are wider than declared and the return type is more specific than declared. This rule sounds like: function is ",Object(r.b)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)"}),"contravariant")," by arguments and ",Object(r.b)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)"}),"covariant")," by return.")),Object(r.b)("p",null,"A more classical and simple example of this rule:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'class Animal {\n  name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n}\nclass Dog extends Animal {}\nclass Corgi extends Dog {}\n\nfunction presentMyDog(goodBoy: Dog, dogPresenter: (Dog) => Dog): string {\n  const dog = dogPresenter(goodBoy);\n  return `${dog.name}, my ${dog.name}, i will give you to noone.`;\n}\n\nconst nickolay = new Corgi("Nickolay");\n\npresentMyDog(nickolay, (goodBoy: Dog): Dog => goodBoy);     // 👌!\npresentMyDog(nickolay, (goodBoy: Animal): Dog => nickolay); // 👌!\n\n// Error: Type "(Corgi) => Dog" is incompatible with type "(Dog) => Dog"\npresentMyDog(nickolay, (goodBoy: Corgi): Dog => nickolay);\n\npresentMyDog(nickolay, (goodBoy: Dog): Corgi => nickolay);  // 👌!\n\n// Error: Type "(Dog) => Animal" is incompatible with type "(Dog) => Dog"\npresentMyDog(nickolay, (goodBoy: Dog): Animal => nickolay);\n')),Object(r.b)("h2",{id:"function-type"},Object(r.b)("inlineCode",{parentName:"h2"},"Function")," type"),Object(r.b)("p",null,"Also, Hegel supports ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," type which represents any possible function in JavaScript:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function argsLength(fn: Function) {\n  return fn.length;\n}\n\nargsLength(() => 2);\nargsLength((a: number) => a);\nargsLength(parseFloat);\n\n// Error: Type "2" is incompatible with type "Function"\nargsLength(2);\n\n// Error: Type "[]" is incompatible with type "Function"\nargsLength([]);\n')))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/function-types.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-function-types-mdx-461c43b38f83b07b7db4.js.map