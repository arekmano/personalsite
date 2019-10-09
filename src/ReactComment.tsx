import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ReactComment extends Component {

    componentDidMount() {
        let el = ReactDOM.findDOMNode(this) as any;
        ReactDOM.unmountComponentAtNode(el);
        el.outerHTML = this.comment();
    }

    comment() {
      return `
      <!-- Oho! You've passed the "not a recruiter" test!
      It seems you are knowledgable in the HTMLs!
      In that case, I'd like to direct your attention to this link:
      aHR0cHM6Ly93d3cuYXJla21hbm8ubWUvdmVyeWltcHJlc3NpdmUud2VicA==
      -->`;
    }

    render() {
        return <div />;
    }
}

export default ReactComment;