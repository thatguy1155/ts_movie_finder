Here are my notes:

To run:

after unzipping the file, make sure to navigate to the main directory in your terminal and run "npm i" to ensure that any dependencies are installed.

As stated below, you could run "npm start" or "yarn start" to run the application in localhost.

<br />

To test:

I made a few unit tests using Jest and Enzyme. Run "npm test" or "yarn test" to run them.

<br /><br />



Answers:
<br />
Part 1:

1)For Typescript, I like to keep my types and interfaces separated in their own folder and then create a file for each component with the relevant types stored in a file corresponding with the folder that they're in. I then import these types into the proper code. I find this easier to keep track of and keeps the code looking neater.

2)Honestly, I don't think useContext is too bad for this project. However, if you were to scale up the project into something that used more components, then I'd want a more robust state management system. In this case, I used  redux since it's the industry standard, though I believe context would also suffice.

3)I hope you enjoy reading this.

<br />

Part2) Less is a Css pre-compiler that ultimately gets turned into css. It makes Css that functions more like Javascript with variables, functions that you can pass values into and much more. Two main advantages that I see with Less include mixins and nesting. With nesting, you can put tags for child Dom elements inside the tags of their parent elements. This makes the whole css layout much easier to follow and is especially helpful for media queries or pseudo-classes such as ::hover.

Mixins are basically css classes that can be re-used inside other classes. This is very helpful when you have a large code base and there are a lot of reusable css properties. For example: roughly 80% of the times that I've used display:flex have involved justify-content:center or justify-content:space between. With less, you can use mixins to create your commonly used flex structures and re-use them in a modular fashion throughout your code. They also include inheritance so they you can  make variations of the same mixins for different occasions.

In short, Less allows you to take the same techniques for writing clean Js code and apply them to CSS.

--------------------------------------------------

이것이 나의 메모입니다 :

달리는 :

파일을 압축 해제 한 후 반드시 터미널의 메인 디렉토리로 이동하여 'npm i "를 실행하여 종속성이 설치되어 있는지 확인하십시오.

아래에서 설명하는 바와 같이, "npm start"또는 "yarn start"를 실행하여 로컬 호스트에서 응용 프로그램을 실행할 수 있습니다.

<br />

테스트 :

Jest와 Enzyme를 사용하여 몇 가지 단위 테스트를 실시했습니다. "npm test"또는 "yarn test '를 실행하고 실행합니다.

<br />

답변 :
<br />
1 부 :

1) Typescript의 경우 자신의 유형과 인터페이스를 자신의 폴더에 나누어 저장하고 각 구성 요소 파일을 작성하고 관련 유형을 그들이 존재하는 폴더에 해당 파일에 저장합니다. 그렇다면 이러한 유형을 적절한 코드. 나는 이것을 추적하는 것이 더 간단하고 코드를 더 깔끔하게 보이게합니다.

2) 솔직히 나는이 프로젝트에 useContext이 너무 나쁜 생각하지 않습니다. 그러나 더 많은 구성 요소를 사용하는 프로젝트에 프로젝트를 확장 할 경우보다 강력한 상태 관리 시스템이 필요합니다. 이 경우 산업 표준이므로 redux을 사용했지만, 문맥에서도 충분하다고 생각합니다.

3)이를 즐길 수 있습니다.

Part2) Less는 결국 css로 변환되는 Css 사전 컴파일러입니다. 이렇게하면 변수를 사용하여 JavaScript와 같은 기능을하는 Css 값을 전달할 수있는 기능 등이 생성됩니다. Less에서 볼 수있는 2 개의 주요 이점은 믹스 인과 중첩이 있습니다. 중첩을 사용하면 하위 Dom 요소의 태그를 부모 요소의 태그에 배치 할 수 있습니다. 그러면 CSS 레이아웃 전체가 매우 간단 해 미디어 쿼리와 : hover와 같은 유사 클래스에 특히 유용합니다.

믹스 인은 기본적으로 다른 클래스에서 재사용 할 수 css 클래스입니다. 이것은 코드베이스가 크고, 재사용 가능한 css 속성이 많은 경우 매우 유용합니다. 예를 들어, 내가 display : flex를 사용한 시간의 약 80 %는 justify-content : center 또는 justify-content : space가 포함되어 있습니다. 적은 경우는 믹스 인을 사용하여 일반적으로 사용되는 플렉스 구조를 만들고 모듈 전체 코드에서 재사용 할 수 있습니다. 또한 상속도 포함되어 있기 때문에 다양한 상황에서 동일한 믹스 인 변화를 만들 수 있습니다.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
