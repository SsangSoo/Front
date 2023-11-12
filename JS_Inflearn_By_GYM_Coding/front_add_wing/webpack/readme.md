

### 번들링
파일들을 하나로 묶는 작업

### 모듈 번들러
여러 개의 파일을 하나로 묶어주는 도구

### 웹팩(Webpack)
프론트엔드에서 가장 인기있는 모듈 번들러

모듈이 많아지면, 네트워크 비용이 많이 들게 되고, 페이지 로딩이 길어지고, 사용자 경험에 좋지 않은 영향을 미친다.
그리고 크롬-검사 탭의 네트워크에서 여러 개의 모듈이 전송되는 것을 알 수 있다.

그리고 각 파일을 클릭하면, **Timing** 탭이 있다.
이 Timing탭에서는 컨텐츠를 가져오는 총 시간을 알 수 있다.

즉, 모듈이 많아지면 많아질 수록 불필요하게 낭비되는 시간을 줄일 수 있다.


#### 웹팩 적용하기
웹 팩을 설치하려면, 해당 프로젝트가 npm에 의해 관리되어야 한다.

``` 
npm init -y; 
```

**웹팩 설치**

```
npm install --save-dev webpack webpack-cli 
```

웹팩은 운영환경에 배포될 일이 없으므로, dev Dependencies에 적용되도록 --save-dev 를 붙여 적용함.

**로컬 환경에 설치된 CLI 실행**

npx를 통해 실행할 수 있다.

```
npx webpack --entry ./src/index.js --output-path ./dist --mode development
```

--entry 는 진입점을 가리킨다. 어떤 파일을 기준으로 bundling할 건지를 지정한다.
--output 는 번들링할 파일의 위치를 가리킨다.(단 ~~디렉터리가 생성되어 있어야 한다.~~ 디렉터리 생성 안 해도 알아서 된다.)
--mode development 는 압축없이 적용되어 생성된다. (기본은 한 줄로 압축되어있다.)

크롬의 네트워크 탭에서 **단 하나**의 파일을 가져오게 되는데, 동작은 똑같이하고, Timing에서의 시간도 현저히 줄어듬.
필자 컴으론 52ms에서 35ms로 현저히 줄었음.


#### 웹팩사용시 환경설정 파일을 활용하여 웹팩 적용하기

[웹팩 공식문서 ](https://webpack.kr/) << 바로가기

<div align="left">
    <img src="https://velog.velcdn.com/images/tjdtn4484/post/c7934489-3db8-4ae1-970d-c55fdb596d88/image.png">
</div>

복붙 후, 프로젝트에 **webpack.config.js** 생성 후 복붙

```
const path = require('path');

module.exports = {
    entry: './src/index.js',        // 진입점 설정
    output: {                       // 번들링 파일이 위치할 경로
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
```

```
npx webpack 
```

해당 명령어로 위의 webpack.config.js 파일을 참조하여 번들링한다.
cli의 옵션과 동일함.

그리고 webpack.config.js에서 모드를 지정할 수 있다.

```
const path = require('path');

module.exports = {
    mode: 'production', // or development
    entry: './src/index.js',        // 진입점 설정
    output: {                       // 번들링 파일이 위치할 경로
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
```

bundle은 자주 사용하는 명령이므로, package.json에서 임의로 지정할 수 있다.

```
"scripts" : {
    "build" : "webpack"
  },
```

package.json에서 2~4 라인을 추가했다.

그리고 다음 명령어를 실행하면, dist/bundle.js가 생긴다.

```
npm run build
```

이후 운영에 배포시엔, bundle.js를 배포하게 된다.

그리고 bundle은 JS뿐만 아니라, 이미지, CSS 등 다양한 데이터를 변환할 수 있다.

모듈 파일을 묶어줌으로써, Http 요청 개수를 줄임으로 퍼포먼스는 확장하고, 
공백같은 문자를 줄여주기 때문에 리소스를 최적화해준다.


## 삽질 
- 언더바를 대쉬로 써놓고, 못 발견해서 시간 날림 .. 졸린 상태로 듣다가..;;ㅋ