import React from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';

// https://codesandbox.io/s/vm1k17ymq0
// https://github.com/andrerpena/react-mde

export default class MDEEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '**Hello world!!!**',
      tab: 'write',
    };
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true,
    });
  }

  handleValueChange = value => {
    this.setState({ value });
  };

  handleTabChange = tab => {
    this.setState({ tab });
  };

  render() {
    return (
      <div className='container'>
        <ReactMde
          onChange={this.handleValueChange}
          onTabChange={this.handleTabChange}
          value={this.state.value}
          generateMarkdownPreview={markdown =>
            Promise.resolve(this.converter.makeHtml(markdown))
          }
          selectedTab={this.state.tab}
        />
      </div>
    );
  }
}
