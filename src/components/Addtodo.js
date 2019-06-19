import React, { Component} from 'react';

class Addtodo extends Component {
  render() {
    return (
    <form style={{ display: 'flex' }}>
      <input
        type='text'
        name='title'
        style={{ flex: '10', poadding: '10px' }}
        placeholder='Add a task'
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
