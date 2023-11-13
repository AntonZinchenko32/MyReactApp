import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}

/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title:string
}

class Component<T> {
  constructor (public props:T) {
    
  }
}

class Page extends Component<Props> {
  pageInfo ():void {
    console.log(this.props.title);
  }
}

const myTitle = {
  title:'test'
}

const pageInstance = new Page(myTitle);

pageInstance.pageInfo();
