import React, { Component} from 'react';

class Addtodo extends Component {
  state = {
    title: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''});
  };

  titleChange = (e) => this.setState ({ [e.target.name]: e.target.value });


  render() {
    return (
    <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
      <input
        type='text'
        name='title'
        style={{ flex: '10', poadding: '10px' }}
        placeholder='Add a task'
        value= {this.state.title}
        onChange={this.titleChange}
      />
      <input
      type='submit'
      value='submit'
      style={{ flex: '1' }}
      className='btn'
      />
    </form>
  );

  }
}
export default Addtodo;
