// const person = {
    // name : 'Maximilan',
    // age : 30,
    // hobbies: ['Sports', 'Cooking'],
    // role: [2, 'author'] // 여기선 사용할 수 있는 타입이 무엇인지만 지정
                        // 첫 번째 요소는 숫자, 두 번째 요소는 문자열 인것을 사용자만 알고, 타스는 알지 못함. 
                        // 이런 경우에 튜플이 적합하다.
                        // 어떤 role이어야 하는지를 role의 타입을 명시적으로 설정함으로써 타입스크립트에게 인식시켜야 함.
// };

// person.role.push('admin');  // 작동이 가능 // 작동이 되면 안 됨.
// person.role[1] = 10;


const person: {
    name : string;
    age : number;
    hobbies: string[];
    role: [number, string]; // 튜플 // JS에선 일반 배열로 인식
} = {
    name : 'Maximilan',
    age : 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

// 타입스크립트로 개발 도중 이렇게 작성하면 에러가 발생한다.
// 이 코드에는 딱 두 개의 요소만 있는 특수 배열을 입력해야한다.
person.role.push('admin'); 
// person.role[1] = 10; 

let favoriteActivities: string[]; // 배열
// favoriteActivities = 'Sports';     // 문자열들의 배열이 아닌 하나의 값이기 때문에, 에러 발생
favoriteActivities = ['Sports'];      // 괄호로 감싸면 됨.
// 숫자를 추가하면, 컴파일 오류 발생, 숫자도 함께 추가되려면, any[] 타입으로 선언해야함.
favoriteActivities = ['Sports'];      // 괄호로 감싸면 됨. 

console.log(person.name);

for(const hobby of person.hobbies) {
    // 문자열의 어떤 메서드도 사용가능
        // 왜냐하면 타입스크립트가 hobbies가 문자열의 배열 타입이라고 이해하고 있기 때문
    console.log(hobby.toUpperCase());   
    // 오류 발생
    // map은 배열에서는 가능하지만, 문자열에선 사용 못함.   
    // console.log(hobby.map());  
}
