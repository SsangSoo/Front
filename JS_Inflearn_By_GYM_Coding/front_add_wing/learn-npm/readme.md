# NPM(Node Package Manager)
자바스크립트로 애플리케이션을 개발할 때 다양한 모듈이 필요한데, 그 필요한 모듈을 쉽게 다운받을 수 있도록 해주는 도구이다.
자바스크립트 개발자들은 자주 쓰는 코드들을 모듈로 모아놨는데, 그 모아놓은 모듈을 쉽게 다운받을 수 있도록 도와주는 도구이다

결론은 모듈을 쉽게 다운받을 수 있도록 해주는 도구

#### 사용 명령어

```
npm install <모듈명>
```

노드를 설치하면 **npm**이 자동으로 설치된다.


#### 참고!
**Node**는 자바스크립트 런타임 환경이다.
자바스크립트를 Node환경에서 실행하면, 백엔드 애플리케이션이,
자바스크립트를 웹 브라우저에 실행하면 프론트엔드 애플리케이션이 된다.


설치 후 버전 확인을 하여 설치가 되었는지 확인한다.

```
node -v
npm -v
```


<details>
<summary>날짜 관련 모듈 다운받기</summary>

```
npm install dayjs // 혹시 권한으로 인해 오류가 발생하면, 앞에 sudo 키워드를 붙인다.
```

</detail>

module을 다운받을 수 있는 사이트 <br>
<a href="npmjs.com">npmjs.com</a>

```
require('dayjs') 을 하게 되면
node-modules 에서 괄호 안에 있는 js파일을 찾아서 저장한다.
```

### package.json
- 프로젝트에 대한 정보를 갖고 있는 파일이다.
- dependencies와 같은 속성을 활용하여 프로젝트에 의존된 라이브러리를 관리한다.
- 직접 작성할 수도 있고, `npm init` 명령어를 통하여 자동으로 생성할 수 있다.

#### 속성
- name : 프로젝트 이름으로 가장 중요하다(필수 항목)
- version : 프로젝트 버전을 정의한다. 주로 3단계 버전을 사용한다.(필수 항목)
- description : 프로젝트 설명을 기술한다. npm seartch로 검색된 리스트에 표시되기 때문에 사람들이 패키지를 찾아내고 이해하는 데 도움이 된다.
- keywords : 프로젝트를 검색할 때 참조되는 키워드이다. description과 마찬가지로 npm search로 검색된 리스트에 표시된다.
- private : true로 설정되면 npm 게시를 거부한다. 이 값은 개인 리포티조리가 실수로 게시되는 것을 방지한다.
- main : 프로그램의 기본 진입점
- script : 프로젝트에서 자주 실행하는 명령어를 scripts로 작성해두면 npm 명령어로 실행 가능하다.
- author : 제작자의 이름을 지정한다.
- license : 패키지에 대한 라이선스를 지정하여 사람들이 패키지를 사용할 수 있는 방법과 패키지에 대한 제한 사항을 알 수 있도록 해야한다.
- dependencies : 
  - 프로젝트에서 사용하는(의존하는) 모듈을 기술하는 부분이다. 따라서, 이 프로젝트가 어떤 모듈을 사용하는지 한 눈에 볼 수 있다.
  - 애플리케이션을 설치할 때 이 내용을 참조하여 필요한 확장 모듈을 자동으로 설치한다. 따라서 개발한 애플리케이션에서 사용하는 모듈을 여기에 꼭 명시를 해주어야 한다.
- devDependencies : 개발할 때만 의존하는 모듈을 관리한다.


### node_modules
- 우리가 사용할 라이브러리가 실제로 설치된 경로다.


### package-lock.json
- 라이브러리간에는 서로 의존하는 모듈들이 있는데, 그 의존하는 모듈을 기록하는 곳이다.
- 프로젝트에 설치된 모듈들의 의존성 트리를 기록하고 있으며, package-lock.json 파일을 참고하여 node_modules 디렉토리 안에 모듈을 다운받는다.


### npm 명령어

```
npm init // 새로운 프로젝트(패키지)를 시작할 때 사용하는 명령어로 package.json 파일을 생성한다.
```

```
npm init -y // -y 옵션을 사용하여 기본값을 자동으로 설정할 수 있다.
```

```
npm install <패키지명> (install을 축약 : i) // 패키지(= 라이브러리, 모듈)를 설치하는 명령어입니다.
```

```
npm install <패키지명@버전> // 버전과 함께 사용하면 특정 버전을 설치할 수 있습니다.
// ex) npm i dayjs@1.10.7
```

```
npm install --save(축약 : -S) 
// --save 옵션을 사용하면 dependencies에 추가된다.
// npm@5 버전 이후로는 디폴트로 --save 옵션이 적용됨.
```

```
npm install --save-dev(축약 -D)
// 사용하면 devDependencies에 추가된다.
```

```
npm install <패키지명1> <패키지명2> 
// 여러 개를 설치할 수 있다.
```

```
npm install -g <패키지명>
// 전역 설치를 할 수 있다.(또는 --global)
```

```
npm install // package.json에 설정된 모든 패키지를 설치
```

```
npm install --procudction // package.json에 설정된 모든 패키지를 설치 (devDependencies 제외)
```

```
npm uninstall <패키지명> // 로컬 패키지 삭제 
```

```
npm uninstall -g <패키지명> // 전역 패키지 삭제
```

```
npm update <패키지명> // 설치한 패키지를 업데이트 한다.
```

```
npm root // 로컬 패키지 설치 디렉토리 확인
```

```
npm root -g // 전역 패키지 설치 디렉토리 확인
```

```
npm ls // 로컬 설치된 패키지 확인
--depth2
```

```
npm ls -g // 전역 설치된 패키지 확인
```

```
npm start // package.json 파일의 script 속성의 start 실행
```

```
npm run <script-name> // package.json 파일의 script 속성의 start외 스크립트 실행
```